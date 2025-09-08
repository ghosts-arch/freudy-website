import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Providers } from "./provider";
import { auth } from "@/auth";

export const metadata: Metadata = {
  title: "Freudy - bot discord",
  description:
    "Freudy est un bot discord qui propose un quiz et des anecdotes sur la psychologie.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  return (
    <html lang="en" data-theme="business">
      <body>
        <Providers session={session}>{children}</Providers>
      </body>
    </html>
  );
}
