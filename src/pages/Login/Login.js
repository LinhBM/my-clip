import { useState } from "react";
import Svg from "./Svg";
import InternetStatus from "./InternetStatus";
import { useDispatch, useSelector } from "react-redux";
import { captcha } from "../../features/Captcha";

function Login() {
  const storeCaptcha = useSelector((state) => state.storeCaptcha);
  const storeLogin = useSelector((state) => state.storeLogin);
  const dispatch = useDispatch();
  const [phoneState, setphoneState] = useState([]);
  const [passState, setpassState] = useState();
  const props = { name: phoneState, password: passState };

  return (
    <div className="font-inter absolute w-[480px] h-[716px] bg-[#000000] border border-solid border-[#141414] rounded-2xl m-auto top-0 right-0 bottom-0 left-0">
      <div className="absolute top-[22px] right-[22px]">
        <Svg.Close />
      </div>
      <h2 className="h-10 not-italic font-bold text-xl leading-6 flex items-center text-center tracking-[-0.26px] text-[#ffffff] mt-12 justify-center">
        Đăng nhập
      </h2>
      <div className="flex flex-col items-center w-[369px] h-[565px] absolute mt-8 left-[55.5px] gap-10">
        <form
          className="w-full flex flex-col gap-10"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="text"
            placeholder="Số điện thoại"
            className="phoneState w-full px-4 py-[9.5px] h-10 rounded-[10px] bg-[#141414] placeholder-[#8A8B93] text-[#8A8B93] text-base font-normal outline-none"
            onChange={(e) => setphoneState(e.target.value)}
          />
          <div className="relative">
            <input
              type="password"
              placeholder="********"
              className="w-full px-4 py-[9.5px] h-10 rounded-[10px] bg-[#141414] placeholder-[#8A8B93] text-[#8A8B93] text-base font-normal pr-16 outline-none after:content-['sdf'] after"
              onChange={(e) => setpassState(e.target.value)}
            />
            <div className="absolute bottom-0 right-0 w-16 h-10 flex justify-center items-center">
              <Svg.ShowPass />
            </div>
          </div>
          {storeLogin.map((get, index, event) => {
            if (get.check === false) {
              window.location.reload(false);

              return (
                <p
                  key={index}
                  className="text-[#FF3B30] font-normal text-xs leading-[18px] text-center -mt-6"
                >
                  Số điện thoại hoặc mật khẩu chưa chính xác.
                </p>
              );
            }
          })}

          <div className="flex w-full gap-3">
            <input
              className="w-[177px] px-4 py-[9.5px] h-10 rounded-[10px] bg-[#141414] placeholder-[#8A8B93] text-[#8A8B93] text-base font-normal outline-none"
              placeholder="Mã captcha"
            />
            <div className="bg-white w-[132px] h-10 rounded-[10px] flex justify-center items-center">
              <span className="tracking-[6px] text-[21px] font-badscript font-bold">
                {storeCaptcha}
              </span>
            </div>
            <button
              className="flex-1 flex justify-center items-center"
              onClick={() => dispatch(captcha())}
            >
              <Svg.Reset />
            </button>
          </div>
          <InternetStatus props={props} />
        </form>
        <span className="text-[#B0B0B8] not-italic font-normal text-base tracking-[-0.408px]">
          Hoặc đăng nhập bằng
        </span>
        <div className="flex gap-6">
          <a href="#">
            <Svg.Facebook />
          </a>
          <a href="#">
            <Svg.Google />
          </a>
        </div>
        <div className="flex gap-x-4 not-italic font-bold text-sm text-[#00CDB4] tracking-[-0.5px] leading-5">
          <a href="#" className="">
            Đăng ký
          </a>
          <span className="">/</span>
          <a href="#" className="">
            Quên mật khẩu
          </a>
        </div>
        <p className="not-italic font-normal text-[11px] leading-[18px] text-center tracking-[0.066px]">
          <span className="text-[#8A8B93]">
            Bằng việc đăng nhập, bạn đã đồng ý với
          </span>
          <br />
          <span className="text-[#FFD130]">Điều khoản sử dụng của Myclip</span>
        </p>
      </div>
    </div>
  );
}

export default Login;
