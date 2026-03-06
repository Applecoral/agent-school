'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
export default function Navbar() {
  const pathname = usePathname();
  const items = [
    { href: '/library', label: 'Library' },
    { href: '/submit', label: 'Submit' },
  ];
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-900/80 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <Link href="/" className="font-bold text-slate-100">Agent School</Link>
        <div className="flex gap-4">
          {items.map(i => (
            <Link key={i.href} href={i.href} className={pathname === i.href ? 'text-white font-medium' : 'text-slate-400 hover:text-slate-200'}>
              {i.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
