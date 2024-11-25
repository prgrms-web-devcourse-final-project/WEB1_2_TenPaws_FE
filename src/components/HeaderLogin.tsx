import React from "react";

const HeaderLogin = () => {
  return (
    <header className="flex items-center justify-between px-10 py-6 bg-white shadow-md">
      {/* TENPAWS */}
      <div className="text-4xl font-bold" style={{ color: "#7F5546" }}>
        TenPaws
      </div>

      {/* 매칭, 안내, 내정보 */}
      <nav className="hidden md:flex flex-1 justify-center items-center gap-16 lg:gap-32 xl:gap-60 text-3xl font-medium">
        <span className="hover:text-gray-700">매칭</span>
        <span className="hover:text-gray-700">안내</span>
        <span className="hover:text-gray-700">내정보</span>
      </nav>

      {/* 회원가입 버튼 */}
      <div className="hidden md:block text-2xl font-medium">
        <span className="hover:text-gray-700">회원가입</span>
      </div>

      {/* 모바일 헤더 */}
      <div className="md:hidden flex flex-1 justify-end">
        <img
          src="/side.svg"
          alt="Side menu"
          className="w-12 h-12 cursor-pointer"
        />
      </div>
    </header>
  );
};

export default HeaderLogin;
