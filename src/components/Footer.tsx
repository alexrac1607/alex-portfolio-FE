export default function Footer() {
  return (
    <footer className="flex flex-col md:flex-row justify-between items-center h-auto md:h-20 border-t-2 mt-8 px-4 md:px-8 py-4 md:py-0">
      <div className="text-base md:text-lg text-black font-light mb-4 md:mb-0">
        &copy; 2024 Alexandru Răchită
      </div>
      <div className="flex space-x-4">
        <a
          href="https://github.com/alexrac1607"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black border-2 border-black p-1 rounded hover:bg-black hover:text-white transition github-link logo-container"
        >
          <div className="image-hover" />
        </a>
        <a
          href="https://linkedin.com/in/your-linkedin-username"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black border-2 border-black px-3 py-1 rounded hover:bg-black hover:text-white transition"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
}
