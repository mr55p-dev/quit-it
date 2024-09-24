import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "You can Quit",
  description: "Time since date tracker",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
