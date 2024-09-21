import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import CustomCursorAnimation from "@/app/ui/customcursor";

const elType = localFont({
  src: [
    {
      path: './fonts/elegant-typewriter-reg.woff2',
      weight: '400',
      style: 'normal'
    },
    {
      path: './fonts/elegant-typewriter-light.woff2',
      weight: '100',
      style: 'light'
    },
    {
      path: './fonts/elegant-typewriter-bold.woff2',
      weight: '700',
      style: 'bold'
    },
  ]
});

export const metadata: Metadata = {
  title: "Sedikit Acak | Refa Andhika's Personal Site",
  description: "Personal website by Refa Andhika, a Full Stack Software Engineer with X+ years of experience in software development with extensive experience in building web application.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${elType.className} antialiased`}
      >
        {children}
        <CustomCursorAnimation />
      </body>
    </html>
  );
}
