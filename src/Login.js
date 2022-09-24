import logo from "./logo.svg";

function Login() {
  return (
    <div className="absolute w-[480px] h-[716px] bg-[#000000] border border-solid border-[#141414] rounded-2xl mx-auto top-0 right-0 bottom-0 left-0">
      <div className="absolute w-6 h-6 top-4 right-4">
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-1/4 right-1/4 bottom-1/4 left-1/4"
        >
          <path
            d="M1 1L13 13"
            stroke="#B0B0B8"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-1/4 right-1/4 bottom-1/4 left-1/4"
        >
          <path
            d="M13 1L1 13"
            stroke="#B0B0B8"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className="w-[480px] h-14 top-10 flex justify-center items-center absolute">
        <h2 className="h-10 font-inter not-italic font-bold text-xl leading-6 flex items-center text-center tracking-tight[0.26px] text-[#ffffff]">
          Đăng nhập
        </h2>
      </div>
      <div className="flex flex-col items-center w-[369px] h-[565px] absolute top-[120px] left-[55.5px]">
        <form className="w-full">
          <input
            type="text"
            placeholder="Số điện thoại"
            className="w-full px-4 py-[9.5px] h-10 rounded-[10px] bg-[#141414] mt-10 placeholder-[#8A8B93] text-white"
          />
          <input
            type="text"
            placeholder="********"
            className="w-full px-4 py-[9.5px] h-10 rounded-[10px] bg-[#141414] mt-10 placeholder-[#8A8B93] text-white"
          ></input>
        </form>
        <svg
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#fff"
            d="M3.5 12.0005C3.5 12.0005 6.77273 5.45508 12.5 5.45508C18.2273 5.45508 21.5 12.0005 21.5 12.0005C21.5 12.0005 18.2273 18.546 12.5 18.546C6.77273 18.546 3.5 12.0005 3.5 12.0005Z"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            fill="#fff"
            d="M12.5 14.456C13.8556 14.456 14.9545 13.357 14.9545 12.0014C14.9545 10.6458 13.8556 9.54688 12.5 9.54688C11.1443 9.54688 10.0454 10.6458 10.0454 12.0014C10.0454 13.357 11.1443 14.456 12.5 14.456Z"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}

export default Login;
