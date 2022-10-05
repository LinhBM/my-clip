import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import Svg from "./Svg";

function LoginOtp() {
  return (
    <div className="absolute w-[480px] h-[660px] top-0 right-0 bottom-0 left-0 m-auto bg-[#000000] border border-solid border-[#141414] rounded-2xl flex flex-col items-center">
      <h2 className="relative font-inter not-italic font-bold text-xl leading-6 tracking-[-0.26px] text-[#ffffff] mt-5 w-full flex justify-center items-center">
        Liên kết tài khoản
        <button className="w-6 h-6 absolute left-5">
          <FontAwesomeIcon icon={faAngleLeft} className="text-[#ffffff]" />
        </button>
      </h2>
      <div className="w-[218px] h-[218px]"></div>
    </div>
  );
}

export default LoginOtp;
