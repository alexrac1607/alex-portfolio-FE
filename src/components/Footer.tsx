export default function Footer() {
    return (
      <footer className="flex justify-between items-center h-20 border-t-2 mt-8">
        <div className="text-lg text-black ml-24 font-light">&copy; 2024 Alexandru Răchită</div>
        <div className="flex space-x-4 mr-12">
          <a href="https://github.com/your-github-username" target="_blank" rel="noopener noreferrer" className="text-black border-2 border-black px-3 py-1 rounded hover:bg-black hover:text-white transition">
            GitHub
          </a>
          <a href="https://linkedin.com/in/your-linkedin-username" target="_blank" rel="noopener noreferrer" className="text-black border-2 border-black px-3 py-1 rounded hover:bg-black hover:text-white transition">
            LinkedIn
          </a>
        </div>
      </footer>
    );
  }
  