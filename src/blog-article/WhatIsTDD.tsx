import { ArticleHeader } from "../article-header/ArticleHeader";

import { ArticleData } from "../types";

export interface WhatIsTDDProps {
  data: ArticleData;
}

const WhatIsTDD = ({ data }: WhatIsTDDProps) => (
  <article className="blog-article">
    <ArticleHeader data={data.headerData} />

    <h4 className="blog-article-h4">The TDD Cycle</h4>

    <ul className="blog-article-ul">
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

    <h4 className="blog-article-h4">🛠 Benefits of TDD</h4>
    <ul className="blog-article-ul">
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

    <p className="blog-article-p">
      Let's see TDD in action with Python and Kotlin examples! 🐍 + ☕
    </p>

    <h4 className="blog-article-h4">📝 Example 1: TDD in Python</h4>
    <p className="blog-article-p">Step 1: Write a failing test.</p>
    <pre className="blog-article-pre">
      {`
import pytest

def test_add():
    assert add(2, 3) == 5  # This test will fail since 'add' is undefined
`}
    </pre>

    <p className="blog-article-p">Step 2: Implement the function.</p>
    <pre className="blog-article-pre">
      {`
def add(a, b):
    return a + b
`}
    </pre>

    <h4 className="blog-article-h4">📝 Example 2: TDD in Kotlin</h4>
    <p className="blog-article-p">Step 1: Write a failing test using JUnit.</p>
    <pre className="blog-article-pre">
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

    <p className="blog-article-p">Step 2: Implement the function.</p>
    <pre className="blog-article-pre">
      {`
fun add(a: Int, b: Int): Int {
    return a + b
}
`}
    </pre>

    <h4 className="blog-article-h4">🤔 Common TDD Concerns</h4>
    <ul className="blog-article-ul">
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

    <h4 className="blog-article-h4">🔗 Learn More About TDD</h4>
    <ul className="blog-article-ul">
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
