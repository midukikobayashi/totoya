import React, { FC } from "react";

const Header: FC = (props) => {
  return (
    <header className="mx-10">
      <ol className="p-2 text-center text-xs flex">
        <li className="m-8">top</li>
        <li className="m-8">menu</li>
        <li className="m-8">contact</li>
      </ol>
    </header>
  );
};

export default Header;
