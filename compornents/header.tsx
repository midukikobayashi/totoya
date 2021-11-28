import React, { FC } from "react";

const Header: FC = (props) => {
  return (
    <header className="bg-cover bg-header h-60 backdrop-opacity-25 ">
      <div className="font-extrabold tracking-widest text-center py-10">
        <p className="">居酒屋</p>
        <p className="text-5xl">魚ゞ家</p>
        
      </div>
    </header>
  );
};

export default Header;
