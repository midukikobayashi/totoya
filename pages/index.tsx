import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import React from "react";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>居酒屋　魚ゞ家-青森市本町-</title>
        <meta name="description" content="Sizakaya totoya Official Website" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          property="og:title"
          content="青森市本町、煉瓦館２Fにある隠れ家的居酒屋。"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://totoya.vercel.app/" />
        <meta property="og:image" content="images/simple.jpg" />
        <meta
          property="og:description"
          content="青森市本町にある居酒屋「魚ゞ家」。煉瓦館2Fにある隠れ家的居酒屋です。"
        />
        <meta property="og:site_name" content="居酒屋魚ゞ家" />
        <meta name="twitter:card" content="Summary Card" />
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.css"
        />
      </Head>

      <main className="w-screen overflow-hidden bg-black font-serif text-white text-center p-10 text-sm leading-relaxed">
        <div className="text-2xl">居酒屋</div>
        <div className="text-4xl mb-8">魚ゞ家</div>
        <Image
          src="/images/sasimi.jpg"
          height={176}
          width={265}
          alt="sasimi"
        ></Image>
        <div className="animate-pulse z-40">
          <div className="rounded-sm opacity-50 bg-yellow-900 h-28 w-20 mb-8"></div>
        </div>

        <div className="border border-yellow-900 p-7">
          ちょこっとクセの強い大将が
          <br />
          最高の料理を提供してくれる、
          <br />
          隠れ家的、居酒屋。
        </div>
        <div className="text-yellow-600 font-bold text-2xl opacity-75 m-8">
          about
        </div>
        <Image
          src="/images/tennai.png"
          height={260}
          width={195}
          alt="tennai"
        ></Image>
        <div className="animate-pulse z-40">
          <div className="rounded-sm opacity-50 bg-yellow-900 h-28 w-24 mb-8"></div>
        </div>

        <div>
          当店は「おまかせ」料理がメインとなります。
          <br />
          来店されたお客様のお口に合わせた お料理を提供。
          <br />
          <p className="m-4">だから、長く通いたくなる。</p>
          当店はちょこっとクセの強い大将と、
          馴染みの常連様が集う、小さな居酒屋。
          <p className="m-4">
            グループでのご利用も、
            <br />
            おひとり様でも、
            <br />
            ふらっと立ち寄りやすい
            <br />
            アットホームな雰囲気です。
          </p>
          一度訪れると、常連になりたくなる、
          <br />
          そんなお店です。
        </div>
        <div className="text-yellow-600 font-bold text-2xl opacity-75 m-8">
          menu
        </div>
        <Image src="/images/ebi.png" height={262} width={195} alt="ebi"></Image>
        <div className="animate-pulse z-40">
          <div className="rounded-sm opacity-50 bg-yellow-900 h-28 w-24 mb-8"></div>
        </div>
        <div>
          当日仕入れた新鮮なお魚を 最高の状態で提供いたします。
          <p className="m-4">
            そのほか、リクエストにお答えしてお作りいたします。
          </p>
          「ガッツリした料理が食べたい！」
          <br />
          「このお酒に合う、つまみがほしい」
          <br />
          など。
          <br />
          アバウトなもので構いません。
          <br />
          <p className="m-4">あなたの知らないお料理に出会えるかも？</p>
        </div>
        <button className="bg-gradient-to-r from-yellow-800 box-content h-4 w-7 p-3">
          more
        </button>
        <Image
          src="/images/gray01.png"
          height={20}
          width={19}
          alt="sankaku01"
        ></Image>
        <Image
          src="/images/gray02.png"
          height={20}
          width={19}
          alt="sankaku02"
        ></Image>


        <div className="text-yellow-600 font-bold text-2xl opacity-75 m-8">
          contact
        </div>
        <div>おひとりさま〜少人数でのご利用には カウンター席が おすすめ。</div>
        <div>
          最大10名様掛けの お座敷席、テーブル席もございます。 大人数でのご利用も
          応相談いたします。
        </div>
        <div>
          まずはお気軽にお問い合わせくださいませ。
          下記お問い合わせフォームまたは、 TEL：017-723-7555 まで。
          （お問い合わせの際はHPを見た とお伝えいただけますとスムーズです）
        </div>
        
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
      </main>
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
    </div>
  );
};

export default Home;
function togglemenu() {
  throw new Error("Function not implemented.");
}
