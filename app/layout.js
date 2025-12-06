import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SessionProviderWrapper from "@/app/providers/SessionProviderWrapper";
import LayoutWrapper from "@/components/Layout/LayoutWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Rojgar Updates - ASRS",
  description: "Daily Sarkari Naukri Updates in Hindi and English",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SessionProviderWrapper>
          <LayoutWrapper>{children}</LayoutWrapper>
        </SessionProviderWrapper>
      </body>
    </html>
  );
}
