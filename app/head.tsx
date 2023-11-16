import Script from "next/script";

export default function Head() {
  return (
    <>
      <title>Charli's Blog</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <link rel="icon" href="/favicon.ico" />
      {process.env.NODE_ENV === "production" && (
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4742398425941120"
          crossOrigin="anonymous"
        ></Script>
      )}
    </>
  );
}
