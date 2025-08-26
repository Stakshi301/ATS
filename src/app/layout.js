"use client";
import "../styles/globals.css";
import "../styles/theme.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
