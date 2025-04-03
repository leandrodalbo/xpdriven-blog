import { ArticleData } from "../../types/types";
import readability from "../images/readability.jpg";

export const codeReadabilityMatters: ArticleData = {
  headerData: {
    h1: "Code Readability Matters More Than You Think",
    img: readability,
    h2: `What is The Importance of Writing Readable Code?`,
    p1: `Code readability impacts maintainability, collaboration, and the overall quality of software systems.`,
    p1class: "blog-article-p-center",
    p2: "Writing clean and readable code is the key to keeping productivity and team velocity at a considerable rate.",
    p2class: "blog-article-p-center",
  },
  sectionsData: [
    {
      h4: "Maintainability",
      p1: `
      If our code is easy to follow, we can identify and fix problems more
      efficiently, making your product more reliable.
      `,
    },
    {
      h4: "Collaboration",
      p1: `
      Readable code ensures that all team members can comprehend and contribute
      to the codebase, reducing the learning curve for new team members.
      `,
    },
    {
      h4: "Scalability",
      p1: `
      Keeping your codebase clean makes it easier to implement new features and
      adapt to changing requirements without introducing errors.
      `,
    },
    {
      h4: "Useful practices",
      p1: `
      Refactoring, consistent coding standards, and automated testing will help.
      `,
    },
    {
      h4: "Why do we need Code Reviews?",
      p1: `
      Everybody sees a different part of the elephant, and that is useful to
      avoid sending bugs to production. It is a way to enforce consistency, and
      it is also a learning opportunity.
      `,
    },
    {
      h4: "Pair Programming with Juniors",
      p1: `
      Pair programming helps junior developers learn best practices, improving
      their problem-solving skills while also benefiting senior developers with
      fresh perspectives.
      `,
    },
  ],

  footerData: {
    h4: "Useful links",
    ul: [
      {
        linkText: "Martin Fowler on Pair Programming",
        linkURL: "https://martinfowler.com/articles/on-pair-programming.html",
      },
    ],
  },
};
