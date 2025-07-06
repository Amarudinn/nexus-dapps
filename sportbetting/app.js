const menuButton = document.querySelector('[data-collapse-toggle="navbar-cta"]');
const menu = document.getElementById('navbar-cta');

menuButton.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});

function parseWIBTime(wibText) {
    const currentYear = new Date().getFullYear();
    const parts = wibText.split(' ');
    const formatted = `${parts[1]} ${parts[2]} ${currentYear} ${parts[3]} +07:00`;
    return new Date(formatted);
}

document.querySelectorAll('.wib-time').forEach(el => {
    const originalText = el.textContent.trim();
    const localDate = parseWIBTime(originalText);

    const options = {
        weekday: "short",
        day: "2-digit",
        month: "short",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false
    };

    const localTimeString = localDate.toLocaleString(undefined, options);
    el.textContent = localTimeString;
});

function checkMatchVisibility() {
    const now = new Date();

    document.querySelectorAll('.match-container').forEach(el => {
        const showTimeStr = el.getAttribute('data-showtime');
        if (!showTimeStr) return;

        const showTime = new Date(showTimeStr);
        if (now >= showTime && el.classList.contains('hidden')) {
            el.classList.remove('hidden');
        }
    });
}

checkMatchVisibility();

setInterval(checkMatchVisibility, 10000);

function checkMatchVisibility() {
    const now = new Date();

    document.querySelectorAll('.match-container').forEach(el => {
        const showTimeStr = el.getAttribute('data-showtime');
        const hideTimeStr = el.getAttribute('data-hidetime');

        const showTime = showTimeStr ? new Date(showTimeStr) : null;
        const hideTime = hideTimeStr ? new Date(hideTimeStr) : null;

        const shouldShow = (!showTime || now >= showTime) && (!hideTime || now < hideTime);

        if (shouldShow && el.classList.contains('hidden')) {
            el.classList.remove('hidden');
        } else if (!shouldShow && !el.classList.contains('hidden')) {
            el.classList.add('hidden');
        }
    });
}

checkMatchVisibility();
setInterval(checkMatchVisibility, 10000);

const canvas = document.getElementById("ballCanvas");
const ctx = canvas.getContext("2d");

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

window.addEventListener("resize", resize);
resize();

class Ball {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.radius = Math.random() * 5 + 2;
        this.dx = Math.random() * 2 - 1;
        this.dy = Math.random() * 2 - 1;
        this.color = `hsl(${Math.random() * 360}, 100%, 70%)`;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
    }

    update() {
        this.x += this.dx;
        this.y += this.dy;

        if (this.x < 0 || this.x > canvas.width) this.dx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.dy *= -1;

        this.draw();
    }
}

const balls = Array.from({ length: 80 }, () => new Ball());

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    balls.forEach(ball => ball.update());
    requestAnimationFrame(animate);
}

animate();

const CONTRACTS = {
    'M. Cilic vs F. Cobolli': '0x133b67279f7E7835a7Dc5aE118091b461717c7cA', // Contract Satu
    'A. de Minaur vs N. Djokovic': '0xFb3D146642CF9C98e50dda36bCB475eDEAFa3f49', // Contract Dua
    'B. Shelton vs L. Sonego': '0xd25EcA3e4C874376d99f795980b822f4b06f31c9', // Contract Tiga
    'J. Sinner vs G. Dimitrov': '0xad995032e4Ad3492cC182fE06BD25262DBA1A3BF', // Contract Empat
    'L. Samsonova vs J. Bouzas Maneiro': '0x8b9e0E7fe46b4e494bc9645DEf8Ae18D0E632595', // Contract Lima
    'E. Alexandrova vs B. Bencic': '0x630Bd4318d998c6DA70fDD6fAaf7DE16c1555526', // Contract Enam
    'M. Andreeva vs N. Navarro': '0xB4d56b7ee390B981D116810C109515Fb41b64be4', // Contract Tujuh
    'I. Swiatek vs C. Tauson': '0x2c3d9b6F02e056461C76185bfE1D3214be0e4aFD', // Contract Delapan
    'Fluminense vs Chelsea': '0x2F8402cdBFFb897Bee02Ce136bc5646601e8966C', // Contract Sembilan
    'PSG vs Real Madrid': '0xCd10390Ea2e7CB3B9a46B7B3d77eCfe7d878232C', // Contract Sepuluh
    'M. Andreeva vs H. Baptiste': '0x2b105e14b51233F869C40a413b6D60718510aC86', // Contract Sebelas
    'B. Krejcikova vs E. Navarro': '0xF50E4b651bE72948AB1E6bBC99F442aC0AD3Ad40' // Contract Duabelas
};

const CONTRACT_ABI = [
	{
		"inputs": [],
		"name": "betDraw",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "betTeamA",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "betTeamB",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "claimReward",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "closeBetting",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "openBetting",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "resetGame",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_oddsA",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_oddsB",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_oddsDraw",
				"type": "uint256"
			}
		],
		"name": "setOdds",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "outcome",
				"type": "uint256"
			}
		],
		"name": "setWinner",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "outcome",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "from",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "to",
				"type": "uint256"
			}
		],
		"name": "setWinnerBatch",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [],
		"name": "withdraw",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"stateMutability": "payable",
		"type": "receive"
	},
	{
		"inputs": [],
		"name": "bettingOpen",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "drawBettors",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "finalResult",
		"outputs": [
			{
				"internalType": "enum SportBetting.Outcome",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getDrawBettors",
		"outputs": [
			{
				"internalType": "address[]",
				"name": "",
				"type": "address[]"
			},
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "user",
				"type": "address"
			}
		],
		"name": "getPendingReward",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getTeamABettors",
		"outputs": [
			{
				"internalType": "address[]",
				"name": "",
				"type": "address[]"
			},
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getTeamBBettors",
		"outputs": [
			{
				"internalType": "address[]",
				"name": "",
				"type": "address[]"
			},
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "user",
				"type": "address"
			}
		],
		"name": "getUserBets",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "hasClaimed",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "maxBet",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "minBet",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "oddsDraw",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "oddsTeamA",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "oddsTeamB",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "pendingClaimers",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "pendingRewards",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "players",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "teamABettors",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "teamBBettors",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "userBets",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "teamA",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "teamB",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "draw",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

let web3;
let currentContract;
let currentAccount;
let currentOdds = 0;
let currentSelection = '';
let currentMatch = '';
let currentBetFunction = '';
let currentChainId = null;

const connectButton = document.getElementById('connectButton');

window.addEventListener('DOMContentLoaded', async function () {
    connectButton.addEventListener('click', initWeb3);

    if (typeof CONTRACTS !== 'undefined') {
        document.getElementById('contractSatu').textContent = shortenAddress(CONTRACTS['M. Cilic vs F. Cobolli']);
        document.getElementById('contractDua').textContent = shortenAddress(CONTRACTS['A. de Minaur vs N. Djokovic']);
        document.getElementById('contractTiga').textContent = shortenAddress(CONTRACTS['B. Shelton vs L. Sonego']);
        document.getElementById('contractEmpat').textContent = shortenAddress(CONTRACTS['J. Sinner vs G. Dimitrov']);
        document.getElementById('contractLima').textContent = shortenAddress(CONTRACTS['L. Samsonova vs J. Bouzas Maneiro']);
        document.getElementById('contractEnam').textContent = shortenAddress(CONTRACTS['E. Alexandrova vs B. Bencic']);
        document.getElementById('contractTujuh').textContent = shortenAddress(CONTRACTS['M. Andreeva vs N. Navarro']);
        document.getElementById('contractDelapan').textContent = shortenAddress(CONTRACTS['I. Swiatek vs C. Tauson']);
        document.getElementById('contractSembilan').textContent = shortenAddress(CONTRACTS['Fluminense vs Chelsea']);
        document.getElementById('contractSepuluh').textContent = shortenAddress(CONTRACTS['PSG vs Real Madrid']);
        document.getElementById('contractSebelas').textContent = shortenAddress(CONTRACTS['M. Andreeva vs H. Baptiste']);
        document.getElementById('contractDuabelas').textContent = shortenAddress(CONTRACTS['B. Krejcikova vs E. Navarro']);
    }
});

async function initWeb3() {
    if (window.ethereum) {
        try {
            web3 = new Web3(window.ethereum);

            await checkNetwork();

            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });

            if (accounts.length > 0) {
                currentAccount = accounts[0];
                await getWalletBalance();
            }

            await updateConnectButton(currentAccount);

            window.ethereum.on('chainChanged', () => window.location.reload());

        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops!',
                text: 'Error initializing Web3: ' + error.message,
                confirmButtonColor: '#d33'
            });
        }
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Wallet Not Detected',
            text: 'Please install MetaMask or another Web3 wallet to use this application!',
            confirmButtonColor: '#d33'
        });
    }
}

async function checkNetwork() {
    try {
        currentChainId = await web3.eth.getChainId();

        if (currentChainId !== 3940) {
            try {
                await window.ethereum.request({
                    method: 'wallet_switchEthereumChain',
                    params: [{ chainId: '0xF64' }],
                });
            } catch (switchError) {
                if (switchError.code === 4902) {
                    await window.ethereum.request({
                        method: 'wallet_addEthereumChain',
                        params: [{
                            chainId: '0xF64',
                            chainName: 'Nexus Testnet',
                            nativeCurrency: { name: 'Nexus Testnet', symbol: 'NEX', decimals: 18 },
                            rpcUrls: ['https://nexus-testnet.g.alchemy.com/public'],
                            blockExplorerUrls: ['https://testnet3.explorer.nexus.xyz']
                        }]
                    });
                }
            }
        }
    } catch (error) {
        console.error("Error checking network:", error);
    }
}

function updateConnectButton(account) {
    connectButton.textContent = `${account.substring(0, 5)}...${account.substring(account.length - 4)}`;
}

async function getWalletBalance() {
    if (!currentAccount) return;
    try {
        const balance = await web3.eth.getBalance(currentAccount);
        const ethBalance = web3.utils.fromWei(balance, 'ether');
        document.getElementById('walletBalance').textContent = parseFloat(ethBalance).toFixed(4) + ' NEX';
    } catch (error) {
        console.error("Error getting wallet balance:", error);
    }
}

connectButton.addEventListener('click', async function () {
    try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });

        currentAccount = accounts[0];
        await getWalletBalance();

        await checkNetwork();
    } catch (error) {
        console.error("Error connecting wallet:", error);
        Swal.fire({
            icon: 'error',
            title: 'Failed to Connect Wallet',
            text: 'Failed to connect wallet: ' + error.message,
            confirmButtonColor: '#d33'
        });

    }
});

function shortenAddress(address) {
    if (!address) return '';
    return address.substring(0, 6) + '...' + address.substring(38);
}

async function openBetModal(selection, odds, match, betFunction) {
    if (!currentAccount) {
        Swal.fire({
            icon: 'error',
            title: 'Wallet Not Connected',
            text: 'Please connect your wallet first!',
            confirmButtonColor: '#d33'
        });

        return;
    }

    currentSelection = selection;
    currentOdds = parseFloat(odds);
    currentMatch = match;
    currentBetFunction = betFunction;

    currentContract = new web3.eth.Contract(CONTRACT_ABI, CONTRACTS[match]);

    document.getElementById('modalMatchInfo').textContent = match;
    document.getElementById('modalSelection').textContent = selection + ' @ ' + odds;
    document.getElementById('contractAddress').innerHTML = `
  Contract: 
  <a href="https://testnet3.explorer.nexus.xyz/address/${CONTRACTS[match]}" 
     target="_blank" 
     rel="noopener noreferrer" 
     class="underline text-white font-mono">
    ${shortenAddress(CONTRACTS[match])}
  </a>
`;

    document.getElementById('betAmount').value = '';
    document.getElementById('potentialWin').textContent = '0 NEX';

    await updateGasInfo();

    document.getElementById('modalOverlay').style.display = 'block';
    document.getElementById('betModal').style.display = 'block';
}

async function updateGasInfo() {
    try {
        const amountWei = web3.utils.toWei('0.1', 'ether');
        const gasEstimate = await currentContract.methods[currentBetFunction]()
            .estimateGas({ from: currentAccount, value: amountWei });

        const gasPrice = await web3.eth.getGasPrice();
        const gasPriceGwei = web3.utils.fromWei(gasPrice, 'gwei');

        const safeGasLimit = gasEstimate * 2;
        const estimatedCostWei = safeGasLimit * gasPrice;
        const estimatedCostEth = web3.utils.fromWei(estimatedCostWei.toString(), 'ether');

        document.getElementById('estimatedGas').textContent = safeGasLimit;
        document.getElementById('estimatedGasCost').textContent = parseFloat(estimatedCostEth).toFixed(6) + ' NEX';

    } catch (error) {
        console.error("Error estimating gas:", error);
        document.getElementById('estimatedGas').textContent = 'Error';
        document.getElementById('estimatedGasCost').textContent = 'Error';
    }
}

function calculateWin() {
    const amount = parseFloat(document.getElementById('betAmount').value) || 0;
    const winAmount = (amount * currentOdds).toFixed(2);
    document.getElementById('potentialWin').textContent = winAmount + ' NEX';
}

function closeBetModal() {
    document.getElementById('modalOverlay').style.display = 'none';
    document.getElementById('betModal').style.display = 'none';
}

document.getElementById('modalOverlay').addEventListener('click', closeBetModal);

document.querySelector('#betModal button[onclick="closeBetModal()"]').addEventListener('click', closeBetModal);

document.getElementById('confirmBet').addEventListener('click', async function () {
    const amount = parseFloat(document.getElementById('betAmount').value);

    if (isNaN(amount)) {
        Swal.fire({
            icon: 'error',
            title: 'Invalid Amount',
            text: 'Please enter a valid bet amount.',
            confirmButtonColor: '#d33'
        });

        return;
    }

    if (amount < 0.1 || amount > 10) {
        Swal.fire({
            icon: 'error',
            title: 'Invalid Bet Range',
            text: 'Bet amount must be between 0.1 and 100 NEX.',
            confirmButtonColor: '#d33'
        });

        return;
    }

    try {
        document.getElementById('confirmText').textContent = 'Processing...';
        document.getElementById('confirmBet').disabled = true;

        const amountWei = web3.utils.toWei(amount.toString(), 'ether');

        const gasPrice = await web3.eth.getGasPrice();

        const gasEstimate = await currentContract.methods[currentBetFunction]()
            .estimateGas({ from: currentAccount, value: amountWei });

        const tx = await currentContract.methods[currentBetFunction]()
            .send({
                from: currentAccount,
                value: amountWei,
                gas: gasEstimate * 2,
                gasPrice: gasPrice
            });

        await getWalletBalance();

        Swal.fire({
            icon: 'success',
            title: 'Bet Placed Successfully!',
            html: `
    <div style="text-align:center">
      <p><strong>Match:</strong> ${currentMatch}</p>
      <p><strong>Selection:</strong> ${currentSelection}</p>
      <p><strong>Amount:</strong> ${amount} NEX</p>
      <p><strong>Tx Hash:</strong> 
        <a href="https://testnet3.explorer.nexus.xyz/tx/${tx.transactionHash}" 
           target="_blank" 
           style="color:#3b82f6; text-decoration:underline;">
          ${tx.transactionHash.slice(0, 10)}...
        </a>
      </p>
    </div>
  `,
            confirmButtonText: 'Close',
            confirmButtonColor: '#10b981'
        });



        closeBetModal();

    } catch (error) {
        console.error("Error placing bet:", error);
        Swal.fire({
            icon: 'error',
            title: 'Failed to Place Bet',
            text: 'Failed to Place Bet: ' + error.message,
            confirmButtonColor: '#d33'
        });

    } finally {
        document.getElementById('confirmText').textContent = 'Confirm Bet';
        document.getElementById('confirmBet').disabled = false;
    }
});

window.addEventListener('load', function () {
    document.getElementById('tampilanReward').addEventListener('click', openRewardModal);

    document.querySelector('.close').addEventListener('click', closeRewardModal);

    window.addEventListener('click', function (event) {
        if (event.target == document.getElementById('rewardModal')) {
            closeRewardModal();
        }
    });
});

async function updateRewardDisplay() {
    if (!currentAccount || !web3) return;

    try {
        let totalReward = 0;
        for (const [match, address] of Object.entries(CONTRACTS)) {
            const contract = new web3.eth.Contract(CONTRACT_ABI, address);
            const reward = await contract.methods.getPendingReward(currentAccount).call();
            totalReward += parseFloat(web3.utils.fromWei(reward, 'ether'));
        }
    } catch (error) {
        console.error("Error updating reward:", error);
    }
}

async function openRewardModal() {
    if (!currentAccount) {
        Swal.fire({
            icon: 'error',
            title: 'Wallet Not Connected',
            text: 'Please connect your wallet first!',
            confirmButtonColor: '#d33'
        });

        return;
    }

    const rewardsContainer = document.getElementById('rewardsContainer');
    rewardsContainer.innerHTML = '<p>Loading rewards...</p>';

    try {
        let rewardsHtml = '';
        let hasRewards = false;

        for (const [match, address] of Object.entries(CONTRACTS)) {
            try {
                const contract = new web3.eth.Contract(CONTRACT_ABI, address);
                const reward = await contract.methods.getPendingReward(currentAccount).call();
                const ethReward = parseFloat(web3.utils.fromWei(reward, 'ether'));

                if (ethReward > 0) {
                    hasRewards = true;
                    rewardsHtml += `
  <div class="reward-item bg-[#121829] text-white rounded-xl p-4 mb-4 space-y-3 w-full flex justify-between">
    <div class="reward-info text-white">
      <p>Contract: <a href="https://testnet3.explorer.nexus.xyz/address/${(CONTRACTS[match])}" target="_blank" rel="noopener noreferrer" class="underline text-white font-mono">${shortenAddress(address)}</a></p>
      <p class="modal-text">Reward: ${ethReward.toFixed(2)} NEX</p>
    </div>
    <div class="flex justify-center items-center">
        <button class="claim-btn px-4 py-2 bg-gradient-to-r from-sky-500 to-sky-700 text-sm text-white rounded transition flex items-center justify-center cursor-pointer" data-address="${address}">Claim</button>        
    </div>
  </div>
                    `;
                }
            } catch (error) {
                console.error(`Error checking reward for ${address}:`, error);
            }
        }

        rewardsContainer.innerHTML = hasRewards ? rewardsHtml : '<p class="text-white">No rewards available</p>';

        document.querySelectorAll('.claim-btn').forEach(btn => {
            btn.addEventListener('click', async function () {
                await claimReward(this.getAttribute('data-address'));
            });
        });

        document.getElementById('rewardModal').style.display = 'block';

    } catch (error) {
        console.error("Failed to load rewards:", error);
        rewardsContainer.innerHTML = '<p>Error loading rewards. Please try again.</p>';
    }
}

function closeRewardModal() {
    document.getElementById('rewardModal').style.display = 'none';
}

async function claimReward(contractAddress) {
    if (!currentAccount || !web3) {
        Swal.fire({
            icon: 'error',
            title: 'Wallet Not Connected',
            text: 'Please connect your wallet first!',
            confirmButtonColor: '#d33'
        });

        return;
    }

    try {
        const contract = new web3.eth.Contract(CONTRACT_ABI, contractAddress);

        const gasEstimate = await contract.methods.claimReward()
            .estimateGas({ from: currentAccount });

        const gasPrice = await web3.eth.getGasPrice();

        const tx = await contract.methods.claimReward()
            .send({
                from: currentAccount,
                gas: gasEstimate,
                gasPrice: gasPrice
            });

        Swal.fire({
            icon: 'success',
            title: 'Transaction Successful!',
            html: `
    <p>Your transaction has been submitted.</p>
    <p><strong>Tx Hash:</strong> 
      <a href="https://testnet3.explorer.nexus.xyz/tx/${tx.transactionHash}" 
         target="_blank" 
         class="text-blue-500 underline">
        ${tx.transactionHash.slice(0, 10)}...
      </a>
    </p>
  `,
            confirmButtonText: 'Close',
            confirmButtonColor: '#10b981'
        });


        await updateRewardDisplay();
        await openRewardModal();

    } catch (error) {
        console.error("Claim error:", error);

        let errorMsg = 'Failed to claim reward';
        if (error.message.includes('not a function')) {
            errorMsg = 'Claim function not found in contract';
        } else if (error.message.includes('User denied')) {
            errorMsg = 'Transaction was cancelled';
        } else {
            errorMsg = error.message;
        }

        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: errorMsg,
            confirmButtonText: 'OK',
            confirmButtonColor: '#ef4444'
        });

    }
}

async function updateStatusUI(contractAddress, statusDotId, textId) {
    const contract = new web3.eth.Contract(CONTRACT_ABI, contractAddress);
    try {
        const isOpen = await contract.methods.bettingOpen().call();
        const dot = document.getElementById(statusDotId);
        const text = document.getElementById(textId);

        if (isOpen) {
            dot.classList.remove('bg-yellow-500');
            dot.classList.add('bg-green-500');
            text.classList.remove('text-yellow-500');
            text.classList.add('text-green-500');
            text.textContent = '';
        } else {
            dot.classList.remove('bg-green-500');
            dot.classList.add('bg-yellow-500');
            text.classList.remove('text-green-500');
            text.classList.add('text-yellow-500');
            text.textContent = '';
        }
    } catch (err) {
        console.error('Gagal memuat status betting:', err);
    }
}

window.addEventListener('load', () => {
    if (typeof window.ethereum !== 'undefined') {
        window.web3 = new Web3(window.ethereum);

        updateStatusUI(CONTRACTS['M. Cilic vs F. Cobolli'], 'status-contract-satu', 'text-contract-satu', 'M. Cilic vs F. Cobolli');
        updateStatusUI(CONTRACTS['A. de Minaur vs N. Djokovic'], 'status-contract-dua', 'text-contract-dua', 'A. de Minaur vs N. Djokovic');
        updateStatusUI(CONTRACTS['B. Shelton vs L. Sonego'], 'status-contract-tiga', 'text-contract-tiga', 'B. Shelton vs L. Sonego');
        updateStatusUI(CONTRACTS['J. Sinner vs G. Dimitrov'], 'status-contract-empat', 'text-contract-empat', 'J. Sinner vs G. Dimitrov');
        updateStatusUI(CONTRACTS['L. Samsonova vs J. Bouzas Maneiro'], 'status-contract-lima', 'text-contract-lima', 'L. Samsonova vs J. Bouzas Maneiro');
        updateStatusUI(CONTRACTS['E. Alexandrova vs B. Bencic'], 'status-contract-enam', 'text-contract-enam', 'E. Alexandrova vs B. Bencic');
        updateStatusUI(CONTRACTS['M. Andreeva vs N. Navarro'], 'status-contract-tujuh', 'text-contract-tujuh', 'M. Andreeva vs N. Navarro');
        updateStatusUI(CONTRACTS['I. Swiatek vs C. Tauson'], 'status-contract-delapan', 'text-contract-delapan', 'I. Swiatek vs C. Tauson');
        updateStatusUI(CONTRACTS['Fluminense vs Chelsea'], 'status-contract-sembilan', 'text-contract-sembilan', 'Fluminense vs Chelsea');
        updateStatusUI(CONTRACTS['PSG vs Real Madrid'], 'status-contract-sepuluh', 'text-contract-sepuluh', 'PSG vs Real Madrid');
        updateStatusUI(CONTRACTS['M. Andreeva vs H. Baptiste'], 'status-contract-sebelas', 'text-contract-sebelas', 'M. Andreeva vs H. Baptiste');
        updateStatusUI(CONTRACTS['B. Krejcikova vs E. Navarro'], 'status-contract-duabelas', 'text-contract-duabelas', 'B. Krejcikova vs E. Navarro');

        setInterval(() => {
            updateStatusUI(CONTRACTS['M. Cilic vs F. Cobolli'], 'status-contract-satu', 'text-contract-satu', 'M. Cilic vs F. Cobolli');
            updateStatusUI(CONTRACTS['A. de Minaur vs N. Djokovic'], 'status-contract-dua', 'text-contract-dua', 'A. de Minaur vs N. Djokovic');
            updateStatusUI(CONTRACTS['B. Shelton vs L. Sonego'], 'status-contract-tiga', 'text-contract-tiga', 'B. Shelton vs L. Sonego');
            updateStatusUI(CONTRACTS['J. Sinner vs G. Dimitrov'], 'status-contract-empat', 'text-contract-empat', 'J. Sinner vs G. Dimitrov');
            updateStatusUI(CONTRACTS['L. Samsonova vs J. Bouzas Maneiro'], 'status-contract-lima', 'text-contract-lima', 'L. Samsonova vs J. Bouzas Maneiro');
            updateStatusUI(CONTRACTS['E. Alexandrova vs B. Bencic'], 'status-contract-enam', 'text-contract-enam', 'E. Alexandrova vs B. Bencic');
            updateStatusUI(CONTRACTS['M. Andreeva vs N. Navarro'], 'status-contract-tujuh', 'text-contract-tujuh', 'M. Andreeva vs N. Navarro');
            updateStatusUI(CONTRACTS['I. Swiatek vs C. Tauson'], 'status-contract-delapan', 'text-contract-delapan', 'I. Swiatek vs C. Tauson');
            updateStatusUI(CONTRACTS['Fluminense vs Chelsea'], 'status-contract-sembilan', 'text-contract-sembilan', 'Fluminense vs Chelsea');
            updateStatusUI(CONTRACTS['PSG vs Real Madrid'], 'status-contract-sepuluh', 'text-contract-sepuluh', 'PSG vs Real Madrid');
            updateStatusUI(CONTRACTS['M. Andreeva vs H. Baptiste'], 'status-contract-sebelas', 'text-contract-sebelas', 'M. Andreeva vs H. Baptiste');
            updateStatusUI(CONTRACTS['B. Krejcikova vs E. Navarro'], 'status-contract-duabelas', 'text-contract-duabelas', 'B. Krejcikova vs E. Navarro');
        }, 1000); // 1000ms = 1 detik
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Web3 Provider Not Found',
            text: 'Please install MetaMask or another Web3 wallet to continue.',
            confirmButtonColor: '#d33'
        });

    }
});

function shortenAddress(address) {
    return address.slice(0, 6) + "..." + address.slice(-4);
}

document.getElementById("showHistoryBtn").addEventListener("click", async () => {
    if (typeof window.ethereum === 'undefined') {
        Swal.fire({
            icon: 'error',
            title: 'Wallet Not Connected',
            text: 'Please connect your wallet first!',
            confirmButtonColor: '#d33'
        });
        return;
    }

    try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const userAddress = accounts[0].toLowerCase();

        const history = matches.filter(match =>
            Object.values(match.bets).some(teamBets =>
                teamBets.some(b => b.address.toLowerCase() === userAddress)
            )
        );

        const historyContent = document.getElementById("historyContent");

        if (history.length === 0) {
            historyContent.innerHTML = `<p class="text-gray-400">No match history found for your address.</p>`;
        } else {
            historyContent.innerHTML = history.map(match => {
                const [userTeam, teamBets] = Object.entries(match.bets).find(([team, bettors]) =>
                    bettors.some(b => b.address.toLowerCase() === userAddress)
                ) || [];

                const userBet = teamBets.find(b => b.address.toLowerCase() === userAddress);
                const status = userTeam === match.winner ? "Win" : "Lost";
                const statusColor = status === "Win" ? "bg-green-600" : "bg-red-600";

                const odds = parseFloat(match.odds[userTeam]);
                const betAmount = parseFloat(userBet.bet);
                const payout = status === "Win" ? (betAmount * odds).toFixed(2) : "0.00";

                return `
          <div class="bg-[#121829] text-white rounded-xl py-2 px-4 w-full">
            <!-- Contract & Date -->
            <div class="text-sm text-gray-400 flex justify-between items-center">
              <a href="https://testnet3.explorer.nexus.xyz/address/${match.contract}" target="_blank" rel="noopener noreferrer" class="underline text-white font-mono">
                ${shortenAddress(match.contract)}
              </a>
              <div>${match.date}</div>
            </div>

            <!-- Match Info -->
            <div class="flex justify-between items-center mb-1 mt-1">
              <div class="flex items-center space-x-2 text-md">
                <span>${match.teamA} - ${match.teamB}</span>
              </div>
            </div>

            <!-- Type & Status -->
            <div class="flex justify-between items-center">
              <div>
                <div class="text-sm text-gray-400">${match.type}</div>
                <div class="text-sm font-bold">${match.winner}</div>
              </div>
              <div class="${statusColor} text-white text-sm px-2 py-1 rounded-full font-semibold">${status}</div>
            </div>

            <!-- Bet Info: Kiri dan Kanan -->
            <div class="flex justify-between text-sm pt-1">
              <!-- Kiri: Team & Bet -->
              <div>
                <div class="text-gray-400">Team</div>
                <div class="text-white font-semibold">${userTeam}</div>

                <div class="text-gray-400 mt-1">Bet</div>
                <div class="text-white font-semibold">${userBet.bet}</div>
              </div>

              <!-- Kanan: Odd & Payout -->
              <div class="text-right">
                <div class="text-gray-400">Odd</div>
                <div class="text-white font-semibold">${match.odds[userTeam]}</div>

                <div class="text-gray-400 mt-1">Payout</div>
                <div class="text-blue-400 font-semibold">${payout} NEX</div>
              </div>
            </div>
          </div>
        `;
            }).join('');
        }

        document.getElementById("historyModal").classList.remove("hidden");
    } catch (error) {
        Swal.fire({
            icon: 'error',
            title: 'Failed to Load History',
            text: error.message || 'An unexpected error occurred.',
            confirmButtonColor: '#d33'
        });
    }
});

document.getElementById("closeModal").addEventListener("click", () => {
    document.getElementById("historyModal").classList.add("hidden");
});

const modal = document.getElementById("historyModal");
const modalContent = document.getElementById("historyModalContent");
const closeModalBtn = document.getElementById("closeModal");

modal.addEventListener("click", (e) => {
    if (!modalContent.contains(e.target)) {
        modal.classList.add("hidden");
    }
});

closeModalBtn.addEventListener("click", () => {
    modal.classList.add("hidden");
});

document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        closeBetModal();
    }
});

window.addEventListener('load', async () => {
    if (window.ethereum) {
        ethereum.on('chainChanged', (chainId) => {
            window.location.reload();
        });

        try {
            await initWeb3();
            updateConnectButton(currentAccount);
        } catch (error) {
            console.error('Initialization error:', error);
        }
    }
});