import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="border-b p-4 flex justify-between items-center">
      <Link href="/" className="font-bold text-xl">Agent School</Link>
      <div className="space-x-4">
        <Link href="/library" className="hover:underline">Library</Link>
        <Link href="/submit" className="bg-blue-600 text-white px-3 py-1 rounded">Submit</Link>
      </div>
    </nav>
  );
}