import React from "react";
const Loader = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="relative inline-block h-[35px] w-[35px] animate-spin-custom">
        <div className="absolute h-full w-[30%] bottom-[5%] left-0 transform rotate-[60deg] origin-[50%_85%]">
          <div className="absolute bottom-0 left-0 h-0 w-full pt-[100%] bg-[#5D3FD3] rounded-full animate-wobble1"></div>
        </div>
        <div className="absolute h-full w-[30%] bottom-[5%] right-0 transform rotate-[-60deg] origin-[50%_85%]">
          <div className="absolute bottom-0 left-0 h-0 w-full pt-[100%] bg-[#5D3FD3] rounded-full animate-wobble1"></div>
        </div>
        <div className="absolute h-full w-[30%] bottom-[-5%] left-0 translate-x-[116.666%]">
          <div className="absolute top-0 left-0 h-0 w-full pt-[100%] bg-[#5D3FD3] rounded-full animate-wobble2"></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
