import { ArticleData } from "../../types/types";

export const sfparadigms: ArticleData = {
  headerData: {
    h1: "AI an Software Paradigms",
    h2: "Using AI may confuse young software engineers",
    p1: `
    Automated code generation with lack of proof makes us loose discipline and
    our products unrelaible.
    `,
    p1class: "blog-article-p-center",
  },

  sectionsData: [
    {
      h4: `
        Paradigms
        `,
      p1: `
        Paradigms shifts reshape how we structure applications,
        build abstractions, and approach problem-solving.
         
        These paradigms continue to influence modern software,
        shaping the tools and techniques developers rely on today.
        `,

      ul: [
        {
          h6: "1960s",
          h6class: "blog-article-h6-green",
          p1: `
            Structured programming promoted the elimination of the GOTO statement
            in favor of clarity and disciplined control flow.
          `,
        },
        {
          h6: "OOP",
          h6class: "blog-article-h6-green",
          p1: `
            Object-oriented programming began to take shape with the introduction of constructor methods,
            laying the groundwork for encapsulation and reusability.
          `,
        },
        {
          h6: "Functional programming",
          h6class: "blog-article-h6-green",
          p1: `
          Found its roots in Lisp, one of the earliest languages to treat functions as first-class citizens.
          `,
        },
      ],
    },
  ],
  footerData: {
    h4: "footer here",
  },
};
