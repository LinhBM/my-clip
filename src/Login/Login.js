import Form from "./LoginFormSvg";
import Close from "./LoginCloseSvg";
import Icon from "./LoginIconSvg";

function Login() {
  return (
    <div className="font-sans relative w-[480px] h-[716px] bg-[#000000] border border-solid border-[#141414] rounded-2xl mx-auto top-0 right-0 bottom-0 left-0">
      <Close />
      <h2 className="h-10 not-italic font-bold text-xl leading-6 flex items-center text-center tracking-[-0.26px] text-[#ffffff] mt-12 justify-center">
        Đăng nhập
      </h2>
      <div className="flex flex-col items-center w-[369px] h-[565px] absolute mt-8 left-[55.5px] gap-10">
        <Form />
        <span className="text-[#B0B0B8] not-italic font-normal text-base tracking-[-0.408px]">
          Hoặc đăng nhập bằng
        </span>
        <Icon />
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
