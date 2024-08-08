export default function Header() {
  return (
    <header className="max-w-6xl mx-auto w-full layout flex items-center justify-between h-20 border-b-2 px-4 md:px-8">
      <div className="text-lg md:text-xl text-black font-light">
        Alexandru Răchită
      </div>
      <nav className="flex space-x-2 md:space-x-4">
        <a href="#" className="text-black">
          Home
        </a>
        <a href="#" className="text-black">
          About
        </a>
        <a href="#" className="text-black">
          Projects
        </a>
        <a href="#" className="text-black">
          Contact
        </a>
      </nav>
    </header>
  );
}
