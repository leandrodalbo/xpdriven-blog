import { ArticleData } from "../../types/types";

export const whySoftwareDesignMatters: ArticleData = {
  headerData: {
    h1: "Why Software Design Matters",
    p1: `
      A well-structured design ensures maintainability, scalability, and long-term success. Poor design choices can lead to increased costs, inefficiency, and technical debt.
    `,
    p2: `
      Understanding the impact of software design on cost, productivity, and long-term maintenance is crucial for any organization.
    `,
  },
  sectionsData: [
    {
      h4: "The Cost of Bad Design",
      p1: `
    A poorly designed system becomes harder to work with or modify, and every line of code to be added is always more expensive. Developers need to spend more time fixing bugs, refactoring messy code, and struggling with unclear architecture instead of delivering user value.
      `,
    },
    {
      h4: "The Design Affects Productivity",
      p1: `
    A Good design reduces complexity, and it is easier for developers to implement new features.
      `,
    },
    {
      h4: "Low-Level Details Affect High-Level Decisions",
      p1: `
    Every small decision influences the overall system. 
    Ignoring best practices at a low level results in unmanageable codebases that hinder business growth.
      `,
    },
    {
      h4: "More Developers or AI Won’t Fix it",
      ul: [
        {
          h6: "More Developers Won't Help:",
          h6class: "blog-article-h6-red",
          p1: `
        Adding more developers to contribute to a poorly designed system increases the cost and confusion, leading to slower and less productive teams.
          `,
        },
        {
          h6: "AI Will Make It Worse:",
          h6class: "blog-article-h6-red",
          p1: `
          AI can generate code quickly, but if the problem is our mindset and how we work, writing more code faster won't actually help us meet the customer's needs.
          `,
        },
      ],
    },
    {
      h4: "The Goal of Good Software Design",
      p1: `
      Our purpose must be to create a well-structured system that adapts to change, allows developers to meet customer needs with minimal friction, and remains sustainable over time.
      `,
    },
    {
      h4: "Key Takeaways",
      ul: [
        {
          h6: "Design Quality Impacts Cost:",
          h6class: "blog-article-h6-green",
          p1: "The more complex, the higher the cost of maintenance.",
        },
        {
          h6: "Clean Code and Architecture Matter:",
          h6class: "blog-article-h6-green",
          p1: "A well-designed codebase reduces technical debt and increases productivity",
        },
        {
          h6: "More Developers ≠ More Productivity:",
          h6class: "blog-article-h6-red",
          p1: "Without a solid design, increasing team size leads to inefficiency rather than improvement.",
        },
      ],
    },
  ],
  footerData: {
    h4: "Conclusion",
    ul: [
      {
        linkText: "When is software more expensive?",
        linkURL: "https://youtu.be/dVNEw3MuCuw",
      },
    ],
  },
};
