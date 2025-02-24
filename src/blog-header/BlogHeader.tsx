import { FaGithub, FaLinkedin, FaSyncAlt, FaYoutube } from "react-icons/fa";

const BlogHeader = () => {
  return (
    <header className="bg-gray-800 p-4 flex justify-between items-center shadow-md border-b border-yellow-400">
      <a
        href="/article/3"
        className="flex space-x-6 text-2xl md:text-3xl text-yellow-300 hover:text-orange-400 font-bold transition duration-300"
      >
        <FaSyncAlt className="animate-spin-color" />
        <span>XPDriven Blog</span>
      </a>

      <nav className="flex space-x-6">
        <a
          href="https://www.youtube.com/@xpdrivenblog"
          className="text-pink-300 hover:text-yellow-300 transform hover:scale-110 transition duration-300 text-2xl"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaYoutube />
        </a>
        <a
          href="https://www.linkedin.com/in/leandrodlb/"
          className="text-pink-300 hover:text-yellow-300 transform hover:scale-110 transition duration-300 text-2xl"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://github.com/leandrodalbo"
          className="text-pink-300 hover:text-yellow-300 transform hover:scale-110 transition duration-300 text-2xl"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
      </nav>
    </header>
  );
};

export default BlogHeader;
