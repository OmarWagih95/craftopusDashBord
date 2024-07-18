import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import DashboardPanel from "./components/DashboardPanel";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Craftopus Dashboard",
  description: "1st Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="relative flex">
      <body className={`${inter.className} flex` }>
      <DashboardPanel></DashboardPanel >
<div className="lg:w-[75vw] w-[85vw]">

        {children}
</div>
        
        </body>
    </html>
  );
}
