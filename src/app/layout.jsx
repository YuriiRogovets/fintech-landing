
import React from "react";
import { Inter } from 'next/font/google'
import "../assets/styles/globals.css";

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter', // додає як CSS змінну
})

export const metadata = {
  title: "Fintech Landing",
  description: "Your modern banking experience",
  icons: {
    icon: "/favicon.svg", 
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
