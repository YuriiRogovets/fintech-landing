
import React from "react";

import "../assets/styles/globals.css";

export const metadata = {
  title: "Fintech Landing",
  description: "Your modern banking experience",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
