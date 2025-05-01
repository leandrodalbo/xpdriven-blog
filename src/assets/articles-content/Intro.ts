import { ArticleData } from "../../types/types";
import introimg from "../images/intro.png";

export const introContent: ArticleData = {
  headerData: {
    h1: "Welcome to XPDriven Blog",
    p1: "This blog is dedicated to exploring the best practices in software development.",
    p1class: "blog-article-p-center",
    p2: "The focus is on Test-Driven Development, Extreme Programming, Clean Code and Agile methodologies.",
    p2class: "blog-article-p-center",
  },
  sectionsData: [
    {
      h4: "♻️ TDD",
      p1: `
      Test-Driven Development helps you write better code by ensuring tests come first.
      Pioneered by Kent Beck, leads to more reliable software.
      `,
    },
    {
      h4: "👥 Extreme Programming",
      p1: `
      It emphasizes collaboration, continuous feedback, and rapid iterations. 
      It’s all about delivering high-quality software faster.
      `,
    },
    {
      h4: "🧼 Clean Code",
      p1: `
      It is a core principle in software development. Robert C. Martin’s books, like Clean Code,
      teach us how to make our code more readable, maintainable, and flexible.
      `,
      img: introimg,
    },
    {
      h4: "📢 Agile",
      p1: `
      It promotes flexibility, continuous improvement and close collaboration with customers. 
      It’s a powerful way to build software that adapts to change.
      `,
    },
  ],

  footerData: {
    h4: "Conclusion",
    p1: `
    By following these practices, you'll become a better developer, creating
    software that is more scalable, maintainable, and easier to improve over time.
    `,
  },
};
