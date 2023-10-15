import React from "react";
import { AiFillHeart } from "react-icons/ai";

function Footer() {
  return (
    <div className="bg-black flex flex-col md:flex-row text-center items-center p-3 justify-center text-xl text-gray-400 gap-3 w-screen h-1/2">
      Designed and developed with{" "}
      <span className="text-red-500">
        <AiFillHeart />
      </span>{" "}
    Aalekh Karhadkar
    </div>
  );
}

export default Footer;
