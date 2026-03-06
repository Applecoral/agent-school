import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: {
    template: '%s | Agent School',
    default: 'Agent School | The Dual-Audience AI Directory',
  },
  description: 'A high-fidelity directory of AI resources designed for both humans and autonomous agents.',
  keywords: ['AI', 'Agents', 'LLM', 'Machine Learning', 'Directory', 'Education'],
  authors: [{ name: 'CommitFlow' }],
  openGraph: {
    title: 'Agent Bchool',
    description: 'Learn and discover AI resources for humans and agents.',
    url: 'https://applecoral.github.io/agent-school',
    siteName: 'Agent School',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans bg-slate-950 text-slate-50 antialiased`}>
        <Navbar />
        <main id="main-content" className="relative">
          {children}
        </main>
      </body>
    </html>
  );
}
