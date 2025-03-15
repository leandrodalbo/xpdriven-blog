import { ArticleData } from "../../types/types";
import quickdirty from "../images/quickdirty.png";

export const whatiscleancode: ArticleData = {
  headerData: {
    h1: "Clean Code: A Beginner’s Guide",
    p1: `Ever struggled with messy, confusing code? Clean code makes software engineering easier,
     whether you're a beginner or have many years of experience in the industry.
    `,
    h2: `What is clean code exactly? Why is it important?`,
    p2: "Let's try to understand its principles and write better and more maintainable code.",
    linkText: "What do the people think about it?",
    linkURL:
      "https://www.reddit.com/r/cscareerquestions/comments/vrdpyu/clean_code_still_good_read/",
  },
  sectionsData: [
    {
      h4: "What Is Clean Code?",
      p1: `
    Clean code is software that is easy to read, understand, and maintain.
    Adhering to best practices simplifies the work for you and your colleagues.
    Software is dynamic, and we must ensure it remains adaptable to changing requirements.
    `,
    },
    {
      h4: "Why Is Clean Code Important?",
      ul: [
        {
          h6: "1. Easy to add new features",
          p1: "Well-designed and structured code is not rigid and easier to adapt.",
        },
        {
          h6: "2. Less Defects",
          p1: "A safer product goes to production and you keep customers happy.",
        },
        {
          h6: "3. Improves teamwork",
          p1: "Everyone can work efficiently on the same project.",
        },
      ],
    },

    {
      h4: "Popular Principles",

      ul: [
        {
          h6: "1. Keep It Simple (KISS)",
          p1: "Avoid unnecessary complexity. Code should be as straightforward as possible while solving the problem effectively.",
        },
        {
          h6: "2. Meaningful Names",
          preRedCode: `// Bad
function calc(a: number, b: number): number {
    return a * b * 0.05;
}
`,
          preGreenCode: `
// Good
function calculateTax(price: number, taxRate: number): number {
    return price * taxRate;
}`,
        },
        {
          h6: "3. Write small, focused routines without side effects.",
          p1: "Each routines should do one thing only and do it well.",
        },
      ],
    },
    {
      h4: "Clean and Slow vs. Quick and Dirty",
      p1: "Even bad code can function but if it isn’t clean, it can bring a development organization to its knees...",
      img: quickdirty,
    },
  ],
  footerData: {
    h4: "Uncle Bob's Definition of Clean Code",
    linkText: "What is Clean Code?",
    linkURL: "https://www.youtube.com/watch?v=RSrn_6TeeUQ",
  },
};
