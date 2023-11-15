import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "./head";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const header = (
    <header>
      <div>
        <Link href="/">
          <h1>Charli&apos; Blog</h1>
        </Link>
        <p>My Nextjs tech blog</p>
      </div>
    </header>
  );

  const footer = (
    <footer>
      <div>
        <h3>Developed by Charli</h3>
      </div>
    </footer>
  );
  return (
    <html lang="en">
      <Head />
      <body className={inter.className}>
        {header}
        {children}
        {footer}
      </body>
    </html>
  );
}
