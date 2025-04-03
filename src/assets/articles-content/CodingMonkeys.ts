import codingMonkeys from "../images/codingmonkeys.jpg";

import { ArticleData } from "../../types/types";

export const codingMonkeysContent: ArticleData = {
  headerData: {
    h1: "Coding Monkeys",
    h2: "Are You a Coding Monkey? Why This Is a Problem in the Age of AI",
    img: codingMonkeys,
    p1: `A Coding Monkey is an individual who writes software without completely understanding the problem it addresses. This method has been effective thus far, but now, AI tools are capable of generating code.`,
    p2: "If you simply turn requirements into code without thinking critically, you risk being replaced.",
  },
  sectionsData: [
    {
      h4: "AI Can Generate Code",
      p1: `
      AI can now write boilerplate code faster than any human. If your job is
      just to type code without deep understanding, AI can easily replace that
      function.
      `,
    },
    {
      h4: "Lack of Problem-Solving Skills",
      p1: `
      Real programmers are problem solvers. AI is a tool to make the
      implementations easier but humans must define problems, think critically,
      and design solutions.
      `,
    },
    {
      h4: "AI Needs Supervision",
      p1: `
      AI-generated code is not efficient, vulnerable and with logical errors.
      A coding monkey might accept AI suggestions leading to serious issues.
      `,
    },
  ],
  footerData: {
    h4: "The Industry Needs Thinkers, Not Coders",
    p1: `
    Software Engineering is about designing scalable, maintainable, and
    efficient systems. Writing code is just a small part of the bigger
    picture.
    `,
  },
};
