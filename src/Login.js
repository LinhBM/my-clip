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
      <h2 className="h-10 font-inter not-italic font-bold text-xl leading-6 flex items-center text-center tracking-tight[0.26px] text-[#ffffff] mt-12 justify-center">
        Đăng nhập
      </h2>
      <div className="flex flex-col items-center w-[369px] h-[565px] absolute top-[120px] left-[55.5px]">
        <form className="w-full relative">
          <input
            type="text"
            placeholder="Số điện thoại"
            className="w-full px-4 py-[9.5px] h-10 rounded-[10px] bg-[#141414] mt-10 placeholder-[#8A8B93] text-[#8A8B93]"
          />
          <input
            type="text"
            placeholder="********"
            className="w-full px-4 py-[9.5px] h-10 rounded-[10px] bg-[#141414] mt-10 placeholder-[#8A8B93] text-[#8A8B93] pr-16"
          />
          <div className="absolute bottom-0 right-0 w-16 h-10 flex justify-center items-center">
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.5 12.0005C3.5 12.0005 6.77273 5.45508 12.5 5.45508C18.2273 5.45508 21.5 12.0005 21.5 12.0005C21.5 12.0005 18.2273 18.546 12.5 18.546C6.77273 18.546 3.5 12.0005 3.5 12.0005Z"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12.5 14.456C13.8556 14.456 14.9545 13.357 14.9545 12.0014C14.9545 10.6458 13.8556 9.54688 12.5 9.54688C11.1443 9.54688 10.0454 10.6458 10.0454 12.0014C10.0454 13.357 11.1443 14.456 12.5 14.456Z"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </form>
        <div className="mt-10 flex w-full">
          <input
            className="w-[177px] px-4 py-[9.5px] h-10 rounded-[10px] bg-[#141414] placeholder-[#8A8B93] text-[#8A8B93] mr-3"
            placeholder="Mã captcha"
          />
          <div className="bg-white w-[132px] h-10 rounded-[10px]"></div>
          <div className="flex-1 flex justify-center items-center">
            <svg
              width="22"
              height="18"
              viewBox="0 0 22 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.9358 0.221945C11.4942 -0.113642 9.99344 -0.0680407 8.57357 0.354492C7.15821 0.775683 5.86923 1.55773 4.82608 2.62802L4.10061 3.32936L2.43122 1.61186C2.19115 1.36486 1.83387 1.28305 1.51463 1.40196C1.19539 1.52087 0.971835 1.81904 0.941097 2.1669L0.504027 7.11321C0.502453 7.13008 0.50134 7.147 0.500688 7.16393C0.500314 7.17368 0.500092 7.18342 0.500023 7.19317C0.499985 7.19864 0.499994 7.20411 0.500052 7.20958C0.502348 7.42732 0.580981 7.64482 0.737343 7.81602C0.891816 7.98515 1.09484 8.07919 1.30326 8.09676C1.32893 8.09893 1.35469 8.09993 1.38045 8.09977C1.40801 8.0996 1.43556 8.0981 1.46302 8.09527L6.26672 7.64598C6.60484 7.61436 6.89465 7.38436 7.01023 7.05592C7.12581 6.72749 7.04629 6.35991 6.80621 6.11292L5.33865 4.60307L6.03417 3.93068C6.04084 3.92424 6.0474 3.91769 6.05387 3.91103C6.88978 3.0506 7.92393 2.42205 9.05983 2.08402C10.1957 1.74599 11.3963 1.70951 12.5496 1.97798C13.7029 2.24645 14.7713 2.81112 15.6552 3.6193C16.539 4.42748 17.2094 5.45282 17.6039 6.59967C17.7651 7.06836 18.2651 7.31386 18.7206 7.14801C19.1762 6.98215 19.4148 6.46775 19.2536 5.99905C18.7605 4.5655 17.9225 3.28381 16.8177 2.27359C15.713 1.26337 14.3775 0.557531 12.9358 0.221945Z"
                fill="white"
              />
              <path
                d="M21.237 10.1571C21.2393 10.1593 21.2415 10.1616 21.2437 10.1639C21.2602 10.1808 21.2759 10.1983 21.2908 10.2164C21.416 10.3671 21.4846 10.5495 21.4977 10.7349C21.5011 10.7835 21.5008 10.8326 21.4964 10.8819L21.0589 15.8331C21.0282 16.181 20.8046 16.4791 20.4854 16.598C20.1661 16.717 19.8089 16.6351 19.5688 16.3881L17.8994 14.6706L17.1739 15.372C16.1307 16.4423 14.8418 17.2243 13.4264 17.6455C12.0065 18.068 10.5058 18.1136 9.06414 17.7781C7.62251 17.4425 6.28701 16.7366 5.18224 15.7264C4.07747 14.7162 3.23945 13.4345 2.74637 12.0009C2.58516 11.5323 2.82379 11.0178 3.27935 10.852C3.73492 10.6861 4.23491 10.9316 4.39612 11.4003C4.79059 12.5472 5.461 13.5725 6.34482 14.3807C7.22863 15.1889 8.29704 15.7535 9.45034 16.022C10.6036 16.2905 11.8043 16.254 12.9401 15.916C14.076 15.578 15.1102 14.9494 15.9461 14.089L15.9579 14.0771L15.9658 14.0693L16.6613 13.3969L15.1938 11.8871C14.9537 11.6401 14.8742 11.2725 14.9898 10.9441C15.1053 10.6156 15.3952 10.3856 15.7333 10.354L20.5366 9.90477C20.5661 9.90172 20.5956 9.9002 20.6252 9.90021C20.6494 9.90022 20.6737 9.90126 20.6979 9.90334C20.8946 9.92019 21.0864 10.0052 21.237 10.1571Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
        <button className="bg-[#272728] text-[#47474D] w-full h-10 mt-10 rounded-[10px]">
          Đăng nhập
        </button>
      </div>
    </div>
  );
}

export default Login;
