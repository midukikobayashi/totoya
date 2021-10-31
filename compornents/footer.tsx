import React, { FC } from "react";

const Footer: FC = (props) => {
  return (
    <footer className="bg-gray-200">
      <div className="p-2 text-center text-xs">
        <div>top</div>
        <div>menu</div>
        <div>contact</div>
        <div>
          <div>住所：青森県青森市本町1-7-6 煉瓦館ビル 203</div>
          <div>TEL：017-723-7555</div>
          <div>営業時間：18:00~24:00（感染拡大防止のため、時短営業中)</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
