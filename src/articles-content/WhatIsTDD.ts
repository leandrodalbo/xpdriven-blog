import { ArticleData } from "../types";

export const whatistdd: ArticleData = {
  headerData: {
    h1: "What is Test-Driven Development?",
    p1: `Test-Driven Development is a software development approach where tests are written before the implementation. 
   This process ensures functionality and design integrity.`,
    p2: `It was created as part of Extreme Programming to improve software design, reliability, and maintainability.`,
    linkText: "Kent Beck: The Creator of TDD",
    linkURL: "https://en.wikipedia.org/wiki/Kent_Beck",
  },
  sectionsData: [
    {
      h4: "The TDD Cycle",
      ul: [
        {
          h6: "1. Red: Detect the Fire",
          h6class: "blog-article-h6-red",
          p1: "Write a failing test.",
        },
        {
          h6: "2. Green: Extinguish the Fire",
          h6class: "blog-article-h6-green",
          p1: "Implement just enough code to pass.",
        },
        {
          h6: "3. Refactor: Fireproof the Code",
          p1: "Clean & Improve without fear of breaking it.",
        },
      ],
    },
    {
      h4: "🛠 Benefits of TDD",
      ul: [
        {
          h6: "1. Fewer Bugs",
          p1: "Catch issues early, or maybe there just won't be any.",
        },
        {
          h6: "2. Faster Debugging",
          p1: "Reduce debugging time. You won't need to.",
        },
        {
          h6: "3. Better Design",
          p1: "Encourages modular and flexible code that is easy to change over time.",
        },
        {
          h6: "4. More Confidence",
          p1: "Refactoring code without fear of breaking it will help you to do a better job.",
        },
      ],
    },

    {
      h4: "📝 TDD Example in Kotlin",
      p1: "Let's see TDD in action with a Kotlin example! 🐍 + ☕",
      ul: [
        {
          h6: "Step 1: Write a failing test using JUnit",
          preRedCode: `
import org.junit.Test
import kotlin.test.assertEquals

class CalculatorTest {
    @Test
    fun testAddition() {
        assertEquals(5, add(2, 3))  // This test will fail initially
    }
}
`,
        },
        {
          h6: "Step 2: Implement the function",
          preGreenCode: `
fun add(a: Int, b: Int): Int {
    return a + b
}
`,
        },
      ],
    },

    {
      h4: "🤔 Common TDD Concerns",
      ul: [
        {
          h6: "1. Writing tests first feels weird",
          p1: "🚀 Your goal is to deliver reliable software that keeps your customers happy.",
        },
        {
          h6: "2. TDD slows me down",
          p1: "⚡ A wise guy called Robert C. Martin once said: The only way to go fast is to go well.",
        },
        {
          h6: "3. Not all code is testable",
          p1: "🛠 If it's hard to test, it's often complex and rigid code that needs to be refactored.",
        },
      ],
    },
  ],

  footerData: {
    h4: "🔗 Learn More About TDD",
    ul: [
      {
        linkText: "Did Kent Beck REALLY Invent TDD?",
        linkURL: "https://www.youtube.com/watch?v=x1O5cKCAgdk",
      },
      {
        linkText: "Coding Monkeys (Martin Fowler)",
        linkURL: "https://martinfowler.com/bliki/TestDrivenDevelopment.html",
      },
      {
        linkText: "TDD in IntelliJ IDEA",
        linkURL:
          "https://www.jetbrains.com/help/idea/tdd-with-intellij-idea.html",
      },
    ],
  },
};
