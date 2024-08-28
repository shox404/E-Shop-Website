import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ReactNode } from "react";
import Store from "./global/provider";
import "./global/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = { title: "E Shop" };

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Store>{children}</Store>
      </body>
    </html>
  );
}
