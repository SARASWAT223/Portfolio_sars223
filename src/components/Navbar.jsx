import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-6 bg-white shadow-md sticky top-0 z-50">
      <div className="text-xl font-bold">YourName</div>
      <div className="space-x-6">
        <Link href="#about">About</Link>
        <Link href="#projects">Projects</Link>
        <Link href="#contact">Contact</Link>
      </div>
    </nav>
  );
}
