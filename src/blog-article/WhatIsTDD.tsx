import { FaSyncAlt } from "react-icons/fa";

const WhatIsTDD = () => (
  <article className="p-3 sm:p-4 md:p-6 bg-gray-800 text-gray-300 rounded-lg shadow-lg w-full max-w-none mx-auto overflow-hidden">
    <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-gray-100 text-center break-words">
      What is Test-Driven Development?
    </h1>

    <p className="text-base sm:text-lg leading-relaxed text-gray-300 mb-4">
      Test-Driven Development (TDD) is a software development approach where
      tests are written before implementation. This process ensures
      functionality and design integrity.
    </p>

    <h2 className="text-lg sm:text-xl font-semibold mt-6 text-gray-100 break-words">
      👨‍💻 Kent Beck: The Creator of TDD
    </h2>
    <p className="text-gray-300 mt-2">
      Kent Beck developed TDD as part of Extreme Programming (XP) to improve
      software design, reliability, and maintainability.
    </p>

    <h2 className="flex flex-wrap items-center space-x-2 text-lg sm:text-xl font-semibold mt-6 text-gray-100">
      <FaSyncAlt className="animate-spin-color" />
      <span>The TDD Cycle</span>
    </h2>

    <ul className="list-disc list-inside text-gray-400 mt-3 space-y-2">
      <li>
        <strong className="text-red-400">Red:</strong> Write a failing test.
      </li>
      <li>
        <strong className="text-green-400">Green:</strong> Implement just enough
        code to pass.
      </li>
      <li>
        <strong className="text-blue-400">Refactor:</strong> Improve the code
        while keeping tests passing.
      </li>
    </ul>

    <h2 className="text-lg sm:text-xl font-semibold mt-6 text-gray-100">
      🛠 Benefits of TDD
    </h2>
    <ul className="list-disc list-inside text-gray-400 mt-3 space-y-2">
      <li>
        🔍 <strong>Fewer Bugs:</strong> Catch issues early.
      </li>
      <li>
        ⚡ <strong>Faster Debugging:</strong> Reduce debugging time.
      </li>
      <li>
        📏 <strong>Better Design:</strong> Encourages modular and flexible code.
      </li>
      <li>
        🚀 <strong>More Confidence:</strong> Refactor code without fear of
        breaking it.
      </li>
    </ul>

    <div className="mt-6 p-3 bg-gray-700 rounded-lg">
      <p className="text-gray-400">
        Let's see TDD in action with Python and Kotlin examples! 🐍 + ☕
      </p>
    </div>

    <h2 className="text-lg sm:text-xl font-semibold mt-6 text-gray-100">
      📝 Example 1: TDD in Python
    </h2>
    <p className="text-gray-300 mt-2">Step 1: Write a failing test.</p>
    <pre className="bg-gray-900 text-green-300 p-3 rounded-md mt-3 text-xs sm:text-sm overflow-x-auto whitespace-pre-wrap">
      {`
import pytest

def test_add():
    assert add(2, 3) == 5  # This test will fail since 'add' is undefined
`}
    </pre>

    <p className="text-gray-300 mt-4">Step 2: Implement the function.</p>
    <pre className="bg-gray-900 text-green-300 p-3 rounded-md mt-3 text-xs sm:text-sm overflow-x-auto whitespace-pre-wrap">
      {`
def add(a, b):
    return a + b
`}
    </pre>

    <h2 className="text-lg sm:text-xl font-semibold mt-6 text-gray-100">
      📝 Example 2: TDD in Kotlin
    </h2>
    <p className="text-gray-300 mt-2">
      Step 1: Write a failing test using JUnit.
    </p>
    <pre className="bg-gray-900 text-yellow-300 p-3 rounded-md mt-3 text-xs sm:text-sm overflow-x-auto whitespace-pre-wrap">
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
    <pre className="bg-gray-900 text-yellow-300 p-3 rounded-md mt-3 text-xs sm:text-sm overflow-x-auto whitespace-pre-wrap">
      {`
fun add(a: Int, b: Int): Int {
    return a + b
}
`}
    </pre>

    <h2 className="text-lg sm:text-xl font-semibold mt-6 text-gray-100">
      🤔 Common TDD Concerns
    </h2>
    <ul className="list-disc list-inside text-gray-400 mt-3 space-y-2">
      <li>
        <strong>“Writing tests first feels weird.”</strong> 🚀 Reliable software
        is the goal.
      </li>
      <li>
        <strong>“TDD slows me down.”</strong> ⚡ “The only way to go fast is to
        go well.” – Robert C. Martin
      </li>
      <li>
        <strong>“Not all code is testable.”</strong> 🛠 If it's hard to test,
        it's often too complex.
      </li>
    </ul>

    <h2 className="text-lg sm:text-xl font-semibold mt-6 text-gray-100">
      🔗 Learn More About TDD
    </h2>
    <ul className="list-disc list-inside text-gray-400 mt-3 space-y-2">
      <li>
        <a
          href="https://www.youtube.com/watch?v=x1O5cKCAgdk"
          className="text-blue-400"
          target="_blank"
          rel="noopener noreferrer"
        >
          Did Kent Beck REALLY Invent TDD?
        </a>
      </li>
      <li>
        <a
          href="https://martinfowler.com/bliki/TestDrivenDevelopment.html"
          className="text-blue-400"
          target="_blank"
          rel="noopener noreferrer"
        >
          Martin Fowler on TDD
        </a>
      </li>
      <li>
        <a
          href="https://www.jetbrains.com/help/idea/tdd-with-intellij-idea.html"
          className="text-blue-400"
          target="_blank"
          rel="noopener noreferrer"
        >
          TDD in IntelliJ IDEA
        </a>
      </li>
      <li>
        <a
          href="https://docs.pytest.org/en/latest/"
          className="text-blue-400"
          target="_blank"
          rel="noopener noreferrer"
        >
          pytest Documentation
        </a>
      </li>
    </ul>
  </article>
);

export default WhatIsTDD;
