import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../theme/globals.css";
import AppWrapper from "@/wrappers/appWrapper";

import { Roboto } from "next/font/google";
const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Qikserve",
  description: "Qikserve restaurant app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <AppWrapper>{children}</AppWrapper>
      </body>
    </html>
  );
}
