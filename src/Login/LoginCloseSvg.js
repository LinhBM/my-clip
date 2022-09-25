function Close() {
  return (
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
  );
}

export default Close;
