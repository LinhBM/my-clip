import logo from "./logo.svg";

function Login() {
  return (
    <div className="absolute w-[480px] h-[716px] left-[720px] top-[182px] bg-[#000000] border border-solid border-[#141414] rounded-2xl">
      <div className="absolute w-6 h-6 left-[440px] top-4">
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-1/4 right-1/4 bottom-1/4 left-1/4 border-solid border-[#B0B0B8]"
        >
          <path
            d="M1 1L13 13"
            stroke="#B0B0B8"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-1/4 right-1/4 bottom-1/4 left-1/4 border-solid border-[#B0B0B8]"
        >
          <path
            d="M13 1L1 13"
            stroke="#B0B0B8"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}

export default Login;
