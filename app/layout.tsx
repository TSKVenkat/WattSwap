import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import DrawerNavbar from "./drawer-navbar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WattSwap",
  description: "P2P Energy Trading Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black`}
      >
        <DrawerNavbar />
        {children}
      </body>
    </html>
  );
}
