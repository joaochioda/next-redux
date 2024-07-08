import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../theme/globals.css";
import AppWrapper from "@/wrappers/appWrapper";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
        <AppWrapper>{children}</AppWrapper>
      </body>
    </html>
  );
}
