import { FaSyncAlt } from "react-icons/fa";

const CodingMonkeys = () => (
  <article className="p-4 md:p-6 lg:p-8 bg-gray-800 text-gray-300 rounded-lg shadow-lg text-center">
    <h1 className="text-3xl md:text-4xl font-semibold mb-6 text-gray-100">
      CodingMonkeys
    </h1>

    <p className="text-lg sm:text-xl leading-relaxed text-gray-300">
      This article is just about to be added...
    </p>

    <div className="mt-6 p-4 bg-gray-700 rounded-lg text-gray-400">
      <FaSyncAlt className="animate-spin-color inline-block text-green-400 animate-spin-slow mr-2" />
    </div>

    <p className="mt-6 text-gray-400 text-sm">🚀 Coming soon</p>
  </article>
);

export default CodingMonkeys;
