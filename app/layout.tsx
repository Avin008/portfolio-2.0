import "./globals.css";
import { Inter } from "next/font/google";
import { Navbar } from "@/components";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Home | Avinash Mahananda",
  description: "avinash mahananda portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-sans bg-background w-[60%] mx-auto`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
