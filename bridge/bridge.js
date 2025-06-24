const menuButton = document.querySelector('[data-collapse-toggle="navbar-cta"]');
const menu = document.getElementById('navbar-cta');

menuButton.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});

document.getElementById('close-btn').addEventListener('click', function () {
    document.getElementById('notification-overlay').style.display = 'none';
});

document.getElementById('notification-overlay').addEventListener('click', function (event) {
    if (!document.getElementById('notification').contains(event.target)) {
        document.getElementById('notification-overlay').style.display = 'none';
    }
});

let currentAccount = null;
let userEthBalance = 0;
const NETWORK_COST = 0.02; // Network cost
const NEXUS_TESTNET = '0xF64';

const connectWalletBtn = document.getElementById('connectWalletBtn');
const userAddress = document.getElementById('userAddress');
const buyAddress = document.getElementById('buyAddress');
const swapBtn = document.getElementById('swapBtn');
const sellAmount = document.getElementById('sellAmount');
const buyAmount = document.getElementById('buyAmount');
const ethBalance = document.getElementById('ethBalance');
const percent20 = document.getElementById('percent20');
const percent50 = document.getElementById('percent50');
const percentMax = document.getElementById('percentMax');
const receiveAmount = document.getElementById('receiveAmount');
const walletSatu = document.getElementById('walletSatu');
const walletDua = document.getElementById('walletDua');
const connectButton = document.getElementById('connectButton');

function calculateFinalAmount(amount) {
    if (isNaN(amount)) return 0;
    const finalAmount = amount - NETWORK_COST;
    return finalAmount > 0 ? finalAmount : 0;
}

function updateAmountDisplays(amount) {
    const finalAmount = calculateFinalAmount(amount);
    buyAmount.value = finalAmount.toFixed(6);
    receiveAmount.textContent = finalAmount.toFixed(6);
}

async function getEthBalance(address) {
    try {
        const balance = await window.web3.eth.getBalance(address);
        userEthBalance = parseFloat(window.web3.utils.fromWei(balance, 'ether'));
        return userEthBalance.toFixed(6);
    } catch (error) {
        console.error("Error getting balance:", error);
        return "-";
    }
}

function setPercentage(percent) {
    if (userEthBalance <= 0) return;

    let amount;
    if (percent === 100) {
        amount = userEthBalance;
    } else {
        amount = (userEthBalance * percent / 100).toFixed(6);
    }

    sellAmount.value = amount;
    updateAmountDisplays(parseFloat(amount));
    swapBtn.disabled = false;
}

async function init() {
    if (typeof window.ethereum !== 'undefined') {
        console.log('MetaMask is installed!');

        try {
            const chainId = await window.ethereum.request({ method: 'eth_chainId' });
            if (chainId !== NEXUS_TESTNET) {
                await window.ethereum.request({
                    method: 'wallet_switchEthereumChain',
                    params: [{ chainId: NEXUS_TESTNET }],
                });
            }

            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            if (accounts.length === 0) {
                throw new Error('No accounts found');
            }

            currentAccount = accounts[0];
            const truncatedAddress = `${currentAccount.substring(0, 5)}...${currentAccount.substring(currentAccount.length - 4)}`;
            connectButton.textContent = `${currentAccount.substring(0, 5)}...${currentAccount.substring(currentAccount.length - 4)}`;

            userAddress.textContent = truncatedAddress;
            buyAddress.textContent = truncatedAddress;
            userAddress.classList.remove('hidden');
            buyAddress.classList.remove('hidden');
            walletSatu.classList.remove('hidden');
            walletDua.classList.remove('hidden');
            document.getElementById("detail").classList.remove('hidden');
            connectWalletBtn.textContent = truncatedAddress;

            window.web3 = new Web3(window.ethereum);
            const balance = await getEthBalance(currentAccount);
            ethBalance.textContent = `Balance: ${balance} NEX`;

        } catch (error) {
            console.error('Initialization failed:', error);
            Swal.fire(
                'Error!',
                'Failed to connect: ' + (error.message || error),
                'error'
            );
        }
    } else {
        console.error('MetaMask is not installed!');
        Swal.fire(
            'Error!',
            'Please install MetaMask to use this application',
            'error'
        );
    }
}

connectWalletBtn.addEventListener('click', init);

percent20.addEventListener('click', () => setPercentage(20));
percent50.addEventListener('click', () => setPercentage(50));
percentMax.addEventListener('click', () => setPercentage(100));

sellAmount.addEventListener('input', (e) => {
    const inputValue = e.target.value;

    if (/^[0-9]*\.?[0-9]*$/.test(inputValue)) {
        const amount = parseFloat(inputValue) || 0;
        updateAmountDisplays(amount);

        const isValid = amount > 0 && amount <= userEthBalance;
        swapBtn.disabled = !(inputValue && !userAddress.classList.contains('hidden') && isValid);
    } else {
        e.target.value = sellAmount.value;
    }
});

swapBtn.addEventListener('click', async () => {
    try {
        if (!currentAccount) {
            alert('Please connect your wallet first');
            return;
        }

        const amount = parseFloat(sellAmount.value);
        if (!amount || isNaN(amount) || amount <= 0 || amount > userEthBalance) {
            alert('Please enter a valid amount');
            return;
        }

        const amountInWei = window.web3.utils.toWei(amount.toString(), 'ether');
        const finalAmount = calculateFinalAmount(amount);

        const contractABI = [
            {
                "inputs": [],
                "name": "bridge",
                "outputs": [],
                "stateMutability": "payable",
                "type": "function"
            }
        ];

        const contractAddress = "0xF314Ff41233E7f1b4AD71174137384202548312b";
        const contract = new window.web3.eth.Contract(contractABI, contractAddress);

        const confirmed = await Swal.fire({
            title: 'Confirm Bridge',
            html: `You are bridging <b>${amount} NEX</b><br>
                           Network cost: 0.02 NEX<br><br>
                           You will receive <b>${finalAmount} sNEX</b> on Sepolia`,
            icon: 'info',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Confirm Bridge',
            reverseButtons: true
        });

        if (!confirmed.isConfirmed) return;

        await contract.methods.bridge().send({
            from: currentAccount,
            value: amountInWei
        });

        await Swal.fire(
            'Success!',
            `Your ${amount} NEX has been bridged to ${finalAmount} sNEX`,
            'success'
        );

        const balance = await getEthBalance(currentAccount);
        ethBalance.textContent = `Balance: ${balance} NEX`;

        sellAmount.value = '';
        buyAmount.value = '';
        receiveAmount.textContent = '0';
        swapBtn.disabled = true;

    } catch (error) {
        console.error("Error during swap:", error);
        Swal.fire(
            'Error!',
            'Transaction failed: ' + (error.message || error),
            'error'
        );
    }
});

if (typeof window.ethereum !== 'undefined') {
    window.web3 = new Web3(window.ethereum);

    window.addEventListener('load', async () => {
        if (window.ethereum) {
            ethereum.on('chainChanged', (chainId) => {
                window.location.reload();
            });

            ethereum.on('accountsChanged', (newAccounts) => {
                accounts = newAccounts;
                if (accounts.length > 0) {
                    updateConnectButton(accounts[0]);
                } else {
                    window.location.reload();
                }
            });

            try {
                await init();
            } catch (error) {
                console.error('Initialization error:', error);
            }
        }
    });
}