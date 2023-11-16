import Script from "next/script";

const Head = () => {
  return (
    <head>
      <meta name="viewport" content="width=device-width" />
      <title>프레쉬 팟푸리</title>
      {process.env.NODE_ENV === "production" && (
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4742398425941120"
          crossOrigin="anonymous"
        ></Script>
      )}
    </head>
  );
};

export default Head;
