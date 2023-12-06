import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { PageContextProvider } from "@/app//context/page";
import ecgData from "@/app/features/ecg/utils/ecgData";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <PageContextProvider context={ecgData}>{children}</PageContextProvider>
      </body>
    </html>
  );
}
