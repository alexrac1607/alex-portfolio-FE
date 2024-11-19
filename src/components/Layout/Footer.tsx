import Image from "next/image";
import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();

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
          className="text-black border-2 link border-black p-1 rounded hover:bg-black hover:text-white transition github-link logo-container flex items-center"
        >
          <div className="image-hover" />
        </a>
        <a
          href="https://www.linkedin.com/in/alexandru-r%C4%83chit%C4%83-976138186/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black border-2 link border-black px-3 py-1 rounded hover:bg-black hover:text-white transition flex items-center"
        >
          <Image
            priority
            src={`${publicRuntimeConfig.basePath}/LI-Logo.png`}
            alt="LinkedIn logo"
            height={50}
            width={120}
          />
        </a>
      </div>
    </footer>
  );
}
