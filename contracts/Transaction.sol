// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Transaction {
    uint256 transactionCounter;

    event Transfer(
        address provider,
        address receiver,
        uint amount,
        uint256 timestamp,
        string keyword,
        string message
    );
    struct TransferStruct {
        address provider;
        address receiver;
        uint amount;
        uint256 timestamp;
        string keyword;
        string message;
    }

    TransferStruct[] transactions;

    function addToBlockchain(
        address payable receiver,
        uint amount,
        uint256 timestamp,
        string memory keyword,
        string memory message
    ) public {
        transactionCounter += 1;
        transactions.push(
            TransferStruct(
                msg.sender,
                receiver,
                amount,
                timestamp,
                keyword,
                message
            )
        );
        emit Transfer(
            msg.sender,
            receiver,
            amount,
            timestamp,
            keyword,
            message
        );
    }

    function getAllTransactions()
        public
        view
        returns (TransferStruct[] memory)
    {
        return transactions;
    }

    function getTransactionCount() public view returns (uint256) {
        return transactionCounter;
    }
}
