import { useDispatch } from "react-redux";
import { user } from "../../features/Login/Login";

function InternetStatus(props) {
  const dispatch = useDispatch();
  if (window.navigator.onLine) {
    return (
      <button
        onClick={() => dispatch(user(props.props))}
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
