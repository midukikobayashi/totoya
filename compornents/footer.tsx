import React, { FC } from "react";

const Footer: FC = (props) => {
  return (
    <footer className="bg-yellow-900 text-white font-serif">
      <div className="p-2 text-center">
        <div>top</div>
        <div>menu</div>
        <div>contact</div>
        <div className="m-8 text-xs">
          <div>住所：青森県青森市本町1-7-6 煉瓦館ビル 203</div>
          <div>TEL：017-723-7555</div>
          <div>営業時間：18:00~24:00（感染拡大防止のため、時短営業中)</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
