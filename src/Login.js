import logo from "./logo.svg";

function Login() {
  return (
    <div className="absolute w-[480px] h-[716px] bg-[#000000] border border-solid border-[#141414] rounded-2xl mx-auto top-0 right-0 bottom-0 left-0">
      <div className="absolute w-6 h-6 left-[440px] top-4">
        <div className="absolute w-3 h-3 top-[6px] left-[6px]">
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
      </div>
    </div>
  );
}

export default Login;
