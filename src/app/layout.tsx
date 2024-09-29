import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Head from "next/head";



export const metadata: Metadata = {
  title: "Jablicko",
  description: "Generated by create next app",
  icons: {
    icon: ['/favicon.ico']
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body>
        {children}
      </body>
    </html>
  );
}
