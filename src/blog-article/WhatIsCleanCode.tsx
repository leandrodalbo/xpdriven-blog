import quickdirty from "../assets/quickdirty.png";

const WhatIsCleanCode = () => (
  <article className="p-3 sm:p-4 md:p-6 bg-gray-800 text-gray-300 rounded-lg shadow-lg w-full max-w-screen-sm mx-auto overflow-hidden">
    <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-gray-100 text-center break-words">
      What Is Clean Code? A Beginner’s Guide
    </h1>

    <p className="text-base sm:text-lg leading-relaxed text-gray-300 mb-4 mt-2">
      Ever struggled with messy, confusing code?{" "}
      <span>
        Clean code makes software engineering easier, whether you're a beginner
        or have many years of experience in the industry.
      </span>
    </p>

    <p className="text-base sm:text-lg leading-relaxed text-gray-300 mb-4 mt-2">
      But what exactly is <strong>clean code</strong>, and why does it matter?
      Let's try to understand its principles and write better and more
      maintainable code.
    </p>

    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mt-6 text-gray-100 break-words">
      What Is Clean Code?
    </h2>
    <p className="text-base sm:text-lg leading-relaxed text-gray-300 mb-4 mt-2">
      Clean code is software that’s easy to{" "}
      <strong>read, understand, and maintain</strong>. It follows best
      practices, making life simpler for you and your team. Software is dynamic,
      so clean code ensures it stays adaptable to changing requirements.
    </p>

    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mt-6 text-gray-100 break-words">
      Why Is Clean Code Important?
    </h2>
    <ul className="list-disc list-inside text-gray-400 mt-3 space-y-2">
      <li>
        <strong>Easy to add new features</strong> – Well-designed and structured
        code is not rigid and easier to adapt.
      </li>
      <li>
        <strong>Less Defects</strong> – A safer product goes to production and
        you keep customers happy.
      </li>
      <li>
        <strong>Improves teamwork</strong> – Everyone can work efficiently on
        the same project.
      </li>
    </ul>

    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mt-6 text-gray-100 break-words">
      Popular Principles
    </h2>

    <h4 className="text-md sm:text-xl font-semibold mt-6 text-gray-100 break-words">
      1. Keep It Simple (KISS)
    </h4>
    <p className="text-base sm:text-lg leading-relaxed text-gray-300 mb-4 mt-2">
      Avoid unnecessary complexity. Code should be as straightforward as
      possible while solving the problem effectively.
    </p>

    <h4 className="text-md sm:text-xl font-semibold mt-6 text-gray-100 break-words">
      2. Meaningful Names
    </h4>
    <pre className="bg-gray-900 p-3 rounded mt-2 overflow-x-auto">
      <code className="text-green-400">
        {`// Bad
function calc(a: number, b: number): number {
    return a * b * 0.05;
}

// Good
function calculateTax(price: number, taxRate: number): number {
    return price * taxRate;
}`}
      </code>
    </pre>

    <h4 className="text-md sm:text-xl font-semibold mt-6 text-gray-100 break-words">
      3. Write small, focused routines that produce no side effects.
    </h4>
    <p className="text-base sm:text-lg leading-relaxed text-gray-300 mb-4 mt-2">
      Each routine should do <strong>one thing only</strong> and do it well.
    </p>

    <h2 className="text-xl sm:text-2xl font-semibold text-white mt-4">
      Clean Code vs. Quick and Dirty Solutions
    </h2>

    <blockquote className="border-l-4 border-blue-500 pl-3 italic mt-2">
      "Even bad code can function but if it isn’t clean, it can bring a
      development organization to its knees..."
    </blockquote>

    <img
      src={quickdirty}
      alt="Clean Code vs Dirty Code Chart"
      className="mt-3 w-full max-w-full sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] rounded-lg mx-auto object-contain"
    />

    <h2 className="text-xl sm:text-2xl font-semibold text-white mt-4">
      Uncle Bob's Definition of Clean Code
    </h2>
    <a
      href="https://www.youtube.com/watch?v=RSrn_6TeeUQ"
      target="_blank"
      className="text-blue-400 underline mt-2 inline-block"
    >
      What is Clean Code?
    </a>
  </article>
);

export default WhatIsCleanCode;
