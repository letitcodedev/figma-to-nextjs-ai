import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#F9FAFF]/80 backdrop-blur-md">
      <div className="max-w-[1200px] mx-auto px-6 h-[80px] flex items-center justify-between">
        <Link href="/" className="font-['Comfortaa'] font-bold text-lg text-[#25282B]">
          Madelyn Torff
        </Link>
        <div className="flex items-center space-x-12 font-['Raleway'] font-medium text-[#25282B]">
          <Link href="/about" className="hover:opacity-70 transition-opacity">About</Link>
          <Link href="#projects" className="hover:opacity-70 transition-opacity">Projects</Link>
          <Link href="/contact" className="hover:opacity-70 transition-opacity">Contacts</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;