import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Freudy - bot discord",
  description:
    "Freudy est un bot discord qui propose un quiz et des anecdotes sur la psychologie.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="business">
      <body>{children}</body>
    </html>
  );
}
