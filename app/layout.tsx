import type { Metadata } from "next";
import { Oswald, Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  display: 'swap',
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: 'swap',
});

const metalLord = localFont({
  src: "../public/fonts/metal-lord/metal lord.ttf",
  variable: "--font-metal-lord",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "MONSTER Energy | Unleash The Motion",
  description: "Premium energy drink for those who refuse to compromise.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${oswald.variable} ${inter.variable} ${metalLord.variable} antialiased bg-background text-foreground overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
