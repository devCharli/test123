import Image from "next/image";
import type { Metadata } from "next";
import { Nanum_Gothic } from "next/font/google";
import "./globals.css";
import Head from "./head";
import Link from "next/link";

const inter = Nanum_Gothic({
  weight: ["400", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "성혜진 블로그",
  description: "열심히 해 봅시다",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const header = (
    <header>
      <div className="text-center bg-slate-800 p-8 my-6 rounded-md">
        <Image
          src="/logo.png"
          width={40}
          height={40}
          className="mx-auto"
          alt={"logo"}
        />
        <Link href="/">
          <h1 className="text-2xl text-white font-bold mt-4">Charli's Blog</h1>
        </Link>
        <p className="text-slate-300">🤟 Welcome to my blog. 💻</p>
      </div>
    </header>
  );

  const footer = (
    <footer>
      <div className="border-t border-slate-400 mt-12 py-6 text-center text-slate-400">
        <h3>Designed by Charli</h3>
      </div>
    </footer>
  );

  return (
    <html lang="ko">
      <Head />
      <body className={`${inter.className} bg-slate-100`}>
        <div className="mx-auto max-w-3xl p-6 leading-loose bg-slate-50">
          {header}
          {children}
          {footer}
        </div>
      </body>
    </html>
  );
}
