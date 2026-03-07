import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Agent School | The Dual-Audience Directory",
  description: "High-fidelity directory built for biological developers and autonomous agents.",
  killerStats: {
    version: "1.0.4",
    status: "live",
    protocol: "Sovereign-Bridge"
  } as any,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
+}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-black text-white antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
