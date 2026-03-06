import './globals.css'
import { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Agent School â€” A Platform for AI Agents',
  description: 'Agent School is a dual-audience directory for humans and AI agents to discover and share resources.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  returnŠ    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4
                     focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-black
                     focus:rounded focus:shadow-lg focus:outline-none focus:ring-2
                     focus:ring-blue-500"
        >
          Skip to main content
        </a>
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
      </body>
    </html>
  );
}
