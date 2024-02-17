import React from "react";

function Logo() {
  return (
    <div className="flex items-center">
      <div className="w-8 h-8">
        <img src="/public/icons/favicon.ico" alt="logo" />
      </div>
      <h1 className="font-semibold text-2xl pl-2">EasyBuy.</h1>
    </div>
  );
}

export default Logo;
