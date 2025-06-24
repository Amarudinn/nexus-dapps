// SPDX-License-Identifier: MIT
pragma solidity ^0.8.23;

interface IsNEX {
    function mint(address to, uint256 amount) external;
}

contract NexusBridge {
    address public immutable SOLVER;
    address public immutable SNEX_ETHEREUM;
    
    event POLDeposited(address indexed sender, uint256 amount);

    constructor(address solver, address snexEthereum) {
        SOLVER = solver;
        SNEX_ETHEREUM = snexEthereum;
    }

    function bridge() external payable {
        emit POLDeposited(msg.sender, msg.value);
    }

    function withdrawForSolver() external {
        require(msg.sender == SOLVER, "Unauthorized");
        payable(SOLVER).transfer(address(this).balance);
    }
}