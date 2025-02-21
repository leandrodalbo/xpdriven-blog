import { FaSyncAlt } from "react-icons/fa";

const WhatIsTDD = () => (
    <article className="p-4 sm:p-6 md:p-8 bg-gray-800 text-gray-300 rounded-lg shadow-lg w-full mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-6 text-gray-100 text-center">
            What is Test-Driven Development?
        </h1>

        <p className="text-lg sm:text-xl leading-relaxed text-gray-300 mb-4">
            Test-Driven Development (TDD) is a software development approach where tests are written before the implementation itself. This process encourages you to consider and design the interface of your solution first, ensuring that your code is both functional and aligned with its intended behaviour even before you start writing it.
        </p>

        <h2 className="text-2xl sm:text-3xl font-semibold mt-8 text-gray-100">👨‍💻 Kent Beck: The Creator of TDD</h2>
        <p className="text-gray-300 mt-2">
            Kent Beck, the creator of Test-Driven Development (TDD), developed the practice as part of the Extreme Programming (XP) methodology. His goal was to encourage developers to think critically about their code, improve design, and write reliable software. Beck often emphasizes that TDD is not just about testing, but about improving design and ensuring that the code meets the desired functionality before it is implemented.
        </p>

        <p className="text-gray-300 mt-4">
            Beck has always advocated for the idea that TDD helps developers write cleaner, more understandable code. It forces developers to focus on the behaviour of their code upfront and leads to better communication of intent. In his view, TDD isn’t just a practice—it’s a mindset for becoming a better software engineer.
        </p>

        <h2 className="flex items-center space-x-3 text-2xl sm:text-3xl font-semibold mt-6 text-gray-100">
            <FaSyncAlt className="animate-spin-color" />
            <span>The TDD Cycle</span>
        </h2>

        <p className="text-gray-300 mt-1">TDD core steps:</p>

        <ul className="list-disc list-inside text-gray-400 mt-3 space-y-2">
            <li>
                <strong className="text-red-400">Red:</strong> A failing test is written for non-existing functionality.
            </li>
            <li>
                <strong className="text-green-400">Green:</strong> Just enough code is added to make the test pass.
            </li>
            <li>
                <strong className="text-blue-400">Refactor:</strong> The implementation is optimized ensuring tests still pass.
            </li>
        </ul>

        <h2 className="text-2xl sm:text-3xl font-semibold mt-8 text-gray-100">🛠 What are the Benefits of TDD?</h2>
        <ul className="list-disc list-inside text-gray-400 mt-3 space-y-2">
            <li>🔍 <strong>Fewer Bugs:</strong> Tests catch issues early.</li>
            <li>⚡ <strong>Faster Debugging:</strong> Do you need to debug when you can execute your tests?</li>
            <li>📏 <strong>Better Design:</strong> Encourages modular and less rigid code easier to change over time.</li>
            <li>🚀 <strong>Confidence Increased:</strong> Having good coverage lets you change your code without fear.</li>
        </ul>

        <div className="mt-6 p-4 bg-gray-700 rounded-lg">
            <p className="text-gray-400">
                Let's see TDD in action with Python and Kotlin examples! 🐍 + ☕
            </p>
        </div>

        <h2 className="text-2xl sm:text-3xl font-semibold mt-8 text-gray-100">📝 Example 1: TDD in Python</h2>
        <p className="text-gray-300 mt-2">Step 1: Write a test before the function exists.</p>
        <pre className="bg-gray-900 text-green-300 p-3 rounded-md mt-3 text-sm">
            {`
import pytest

def test_add():
    assert add(2, 3) == 5  # This test will fail since 'add' is undefined
      `}
        </pre>

        <p className="text-gray-300 mt-4">Step 2: Implement the function.</p>
        <pre className="bg-gray-900 text-green-300 p-3 rounded-md mt-3 text-sm">
            {`
def add(a, b):
    return a + b
      `}
        </pre>

        <p className="text-gray-300 mt-4">Now, the test will pass ✅.</p>

        <h2 className="text-2xl sm:text-3xl font-semibold mt-8 text-gray-100">📝 Example 2: TDD in Kotlin</h2>
        <p className="text-gray-300 mt-2">Step 1: Write a failing test using JUnit.</p>
        <pre className="bg-gray-900 text-yellow-300 p-3 rounded-md mt-3 text-sm">
            {`
import org.junit.Test
import kotlin.test.assertEquals

class CalculatorTest {

    @Test
    fun testAddition() {
        assertEquals(5, add(2, 3))  // This test will fail initially
    }
}
      `}
        </pre>

        <p className="text-gray-300 mt-4">Step 2: Implement the function.</p>
        <pre className="bg-gray-900 text-yellow-300 p-3 rounded-md mt-3 text-sm">
            {`
fun add(a: Int, b: Int): Int {
    return a + b
}
      `}
        </pre>

        <p className="text-gray-300 mt-4">Now the test will pass! 🎉</p>

        <h2 className="text-2xl sm:text-3xl font-semibold mt-8 text-gray-100">🤔 What do we often hear about TDD?</h2>
        <ul className="list-disc list-inside text-gray-400 mt-3 space-y-2">
            <li>
                <strong>“Writing tests first feels weird.”</strong><br />Reliability is key in a professional environment. Our goal is to ship a product that is safe, stable, and free of defects.
            </li>
            <li>
                <strong>“TDD slows me down.”</strong><br />Always remember Robert C. Martin's quote, "The only way to go fast is to go well".
            </li>
            <li>
                <strong>“Not all code is testable.”</strong><br />If your code is hard to test, it’s usually a sign that it’s tightly coupled or overly complex.

            </li>
        </ul>

        <h2 className="text-2xl sm:text-3xl font-semibold mt-8 text-gray-100">🔗 Learn More About TDD</h2>

        <ul className="list-disc list-inside text-gray-400 mt-3 space-y-2">
            <li>
                <a href="https://www.youtube.com/watch?v=x1O5cKCAgdk" className="text-blue-400" target="_blank" rel="noopener noreferrer">
                    Did Kent Beck REALLY Invent TDD?
                </a>
            </li>
            <li>
                <a href="https://martinfowler.com/bliki/TestDrivenDevelopment.html" className="text-blue-400" target="_blank" rel="noopener noreferrer">
                    Martin Fowler on TDD
                </a>
            </li>
            <li>
                <a href="https://www.jetbrains.com/help/idea/tdd-with-intellij-idea.html" className="text-blue-400" target="_blank" rel="noopener noreferrer">
                    TDD in IntelliJ IDEA
                </a>
            </li>
            <li>
                <a href="https://docs.pytest.org/en/latest/" className="text-blue-400" target="_blank" rel="noopener noreferrer">
                    pytest Documentation
                </a>
            </li>
        </ul>
    </article>
);

export default WhatIsTDD;
