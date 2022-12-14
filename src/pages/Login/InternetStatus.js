import { useDispatch } from "react-redux";
import { stateAdd, stateReceived } from "../../features/Users/state";

function InternetStatus(propsLogin) {
  const dispatch = useDispatch();

  const funBtn = () => {
    dispatch(stateReceived([]));
    dispatch(stateAdd(propsLogin.propsLogin));
  };

  if (window.navigator.onLine) {
    return (
      <button
        onClick={() => funBtn()}
        type="submit"
        className="bg-[#00B6A0] text-[#ffffff] w-full h-10 rounded-[10px] text-base font-bold tracking-[-0.408px]"
      >
        Đăng nhập
      </button>
    );
  } else {
    return (
      <button
        type="submit"
        className="bg-[#272728] text-[#47474D] w-full h-10 rounded-[10px] text-base font-bold tracking-[-0.408px]"
      >
        Đăng nhập
      </button>
    );
  }
}

export default InternetStatus;
