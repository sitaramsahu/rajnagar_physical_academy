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
  title: "Rajnagar Physical Academy - Learn Physical Education Online",
  description:
    "Join Rajnagar Physical Academy to excel in physical education with expert-led courses, practical training, and career support.",

  openGraph: {
    title: "Rajnagar Physical Academy - Learn Physical Education Online",
    description:
      "Join Rajnagar Physical Academy to excel in physical education with expert-led courses, practical training, and career support.",
    url: "https://rpa.coadies.in",
    siteName: "Rajnagar Physical Academy",
    images: [
      {
        url: "/हर_कदम_सफलता_की_ओर.png",
        width: 1200,
        height: 630,
        alt: "Rajnagar Physical Academy - Physical Education and Training",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
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
