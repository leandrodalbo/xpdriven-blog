import { FaGithub, FaLinkedin } from "react-icons/fa";

const BlogHeader = () => {
    return (
        <header className="bg-gray-900 p-4 flex justify-between items-center shadow-md">

            <a
                href="/"
                className="text-2xl md:text-3xl text-gray-200 hover:text-blue-400 font-bold transition duration-300"
            >
                XPDriven Blog
            </a>


            <nav className="flex space-x-6">
                <a
                    href="https://www.linkedin.com/in/leandrodlb/"
                    className="text-gray-200 hover:text-blue-400 transform hover:scale-110 transition duration-300 text-2xl"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaLinkedin />
                </a>

                <a
                    href="https://github.com/leandrodalbo"
                    className="text-gray-200 hover:text-blue-400 transform hover:scale-110 transition duration-300 text-2xl"
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
