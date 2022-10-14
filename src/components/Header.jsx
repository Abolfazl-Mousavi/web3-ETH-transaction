import React, { useContext } from "react";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";
import { AiFillPlayCircle } from "react-icons/ai";
import { TransactionContext } from "../context/TransactionContext";
import { shortenAddress } from "../utils/utils";

const Header = () => {
  const { connectWallet,currentAccount } = useContext(TransactionContext);

  return (
    <div className="flex flex-col items-center">
      <div className="my-4">
        <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1">
          Send ETH across the world
        </h1>
        <div className="p-3 mt-4 mx-auto flex justify-end items-start flex-col rounded-xl md:h-56 h-44 w-9/12  eth-card .white-glassmorphism ">
          <div className="flex justify-between flex-col w-full h-full">
            <div className="flex justify-between items-start">
              <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                <SiEthereum fontSize={21} color="#fff" />
              </div>
              <BsInfoCircle fontSize={17} color="#fff" />
            </div>
            <div>
              <p className="text-white font-light text-sm">
                 {shortenAddress(currentAccount)} 
              </p>
              <p className="text-white font-semibold text-2xl mt-1">Ethereum</p>
            </div>
          </div>
        </div>
      </div>
      {!currentAccount && (
        <button
          type="button"
          onClick={connectWallet}
          className="flex flex-row w-6/12 md:w-1/6 justify-center items-center mb-3 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
        >
          <p className="text-white text-base font-semibold">Connect Wallet</p>
        </button>
      )}
    </div>
  );
};

export default Header;
