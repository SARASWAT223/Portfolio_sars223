import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        
        {/* Left side: Name / Copyright */}
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <p className="text-lg font-semibold">Your Name</p>
          <p className="text-sm text-gray-400">© {new Date().getFullYear()} All Rights Reserved</p>
        </div>

        {/* Center: Navigation Links */}
        <div className="flex space-x-6 mb-6 md:mb-0">
          <a href="#about" className="hover:text-blue-400 transition">About</a>
          <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
          <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
        </div>

        {/* Right side: Social Icons */}
        <div className="flex space-x-4">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition text-2xl"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition text-2xl"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:youremail@gmail.com"
            className="hover:text-blue-400 transition text-2xl"
          >
            <FaEnvelope />
          </a>
        </div>

      </div>
    </footer>
  );
}
