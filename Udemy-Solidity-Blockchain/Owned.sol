// SPDX-License-Identifier: UNLICENSE
pragma solidity ^0.5.13;

contract Owned {
    address owner;

    constructor() public {
        owner = msg.sender;
    }
    modifier onlyOwner() {
        require(msg.sender == owner, "You are not allowed");
        _;
    }
}