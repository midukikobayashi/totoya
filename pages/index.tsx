import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'


const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>居酒屋　魚ゞ家-青森市本町-</title>
        <meta name="description" content="Sizakaya totoya Official Website" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="青森市本町、煉瓦館２Fにある隠れ家的居酒屋。" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://totoya.vercel.app/" />
        <meta property="og:image" content="images/simple.jpg" />
        <meta property="og:description" content="青森市本町にある居酒屋「魚ゞ家」。煉瓦館2Fにある隠れ家的居酒屋です。" />
        <meta property="og:site_name" content="居酒屋魚ゞ家" />
        <meta name="twitter:card" content="Summary Card" />
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.css" />

      </Head>

      <main className="w-screen overflow-hidden bg-black font-serif text-white text-center p-16">

        <div className="text-2xl">居酒屋</div>
        <div className="text-4xl">魚ゞ家</div>

        <div className="border border-yellow-900">ちょこっとクセの強い大将が最高の料理を提供してくれる、隠れ家的、居酒屋。</div>
        <div>about</div>
        <div>当店は「おまかせ」料理がメインとなります。
          来店されたお客様のお口に合わせた
          お料理を提供。

          だから、長く通いたくなる。

          当店はちょこっとクセの強い大将と、
          馴染みの常連様が集う、小さな居酒屋。

          グループでのご利用も、
          おひとり様でも、ふらっと立ち寄りやすい
          アットホームな雰囲気です。

          一度訪れると、常連になりたくなる、
          そんなお店です。
        </div>
        <div>menu</div>
        <div>当日仕入れた新鮮なお魚を
          最高の状態で提供いたします。

          そのほか、リクエストにお答えしてお作りいたします。

          「ガッツリした料理が食べたい！」
          「このお酒に合う、つまみがほしい」
          など。
          アバウトなもので構いません。
          あなたの知らないお料理に出会えるかも？
        </div>
        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Button</button>

        <div>contact</div>
        <div>おひとりさま〜少人数でのご利用には
          カウンター席が
          おすすめ。
        </div>
        <div>最大10名様掛けの
          お座敷席、テーブル席もございます。

          大人数でのご利用も
          応相談いたします。</div>
        <div>まずはお気軽にお問い合わせくださいませ。

          下記お問い合わせフォームまたは、
          TEL：017-723-7555
          まで。

          （お問い合わせの際はHPを見た
          とお伝えいただけますとスムーズです）</div>

        
        <footer>
          <div>top</div>
          <div>menu</div>
          <div>contact</div>
          <div>

          <div>住所：青森県青森市本町1-7-6 煉瓦館ビル 203</div>
          <div>TEL：017-723-7555</div>
          <div>営業時間：18:00~24:00（感染拡大防止のため、時短営業中)</div>

          </div>
        </footer>



      </main>
    </div>
  )
}

export default Home
function togglemenu() {
  throw new Error('Function not implemented.')
}

