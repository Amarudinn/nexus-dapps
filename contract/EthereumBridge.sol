// SPDX-License-Identifier: MIT
pragma solidity ^0.8.23;

interface IsNEX {
    function transfer(address to, uint256 amount) external returns (bool);
    function balanceOf(address account) external view returns (uint256);
}

contract EthereumBridge {
    IsNEX public immutable SNEX;
    address public immutable SOLVER;

    constructor(address solver, address existingSNEX) {
        require(solver != address(0), "Invalid solver address");
        require(existingSNEX != address(0), "Invalid sNEX address");
        
        SOLVER = solver;
        SNEX = IsNEX(existingSNEX);
    }

    function issueSPOL(address recipient, uint256 amount) external {
        require(msg.sender == SOLVER, "Unauthorized");
        require(SNEX.balanceOf(address(this)) >= amount, "Insufficient sNEX balance");
        
        bool success = SNEX.transfer(recipient, amount);
        require(success, "Transfer failed");
    }

}