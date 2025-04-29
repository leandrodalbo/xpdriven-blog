import { ArticleData } from "../../types/types";
import paradigms from "../images/paradigms.jpg";
export const sfparadigms: ArticleData = {
  headerData: {
    h1: "AI and Software Paradigms",
    h2: "Using AI May Confuse Young Software Engineers",
    p1: `
      Automated code generation without formal proof may lead to a loss of discipline and
      the creation of unreliable products.
    `,
    p1class: "blog-article-p-center",
  },

  sectionsData: [
    {
      h4: "Paradigm Shifts",
      p1: `
        Paradigm shifts continually reshape how we structure applications, build abstractions, and approach problem-solving.
        These paradigms influence modern software profoundly, shaping the tools and techniques we rely on.
      `,
      img: paradigms,
      ul: [
        {
          h6: "1960s - Structured Programming",
          h6class: "blog-article-h6-green",
          p1: `
            Structured programming promoted the elimination of the GOTO statement in favour of clarity, modularity, and disciplined control flow.
          `,
        },
        {
          h6: "Object-Oriented Programming (OOP)",
          h6class: "blog-article-h6-green",
          p1: `
            Object-oriented programming emerged with the introduction of constructor methods,
            laying the groundwork for encapsulation, modularity, and reusability.
          `,
        },
        {
          h6: "Functional Programming",
          h6class: "blog-article-h6-green",
          p1: `
            Rooted in Lisp, one of the earliest languages to treat functions as first-class citizens,
            functional programming emphasized immutability and pure functions.
          `,
        },
      ],
    },
    {
      h4: "Structured Programming",
      p1: `
        Edsger W. Dijkstra recognised the immense difficulty of programming and the tendency of programmers to struggle with complex systems.
        He emphasized that humans cannot handle too much detail simultaneously. 
        Structured programming offered a way to decompose problems into smaller, provable units.
        
      `,
      sectionFooter: `
      Formal proofs remain a critical method to ensure software quality.
      Similarly, while AI can automate code generation, machines still struggle to grasp nuanced context and interconnected details the way human developers do.`,
    },
    {
      h4: "Object-Oriented Programming (OOP)",

      ul: [
        {
          h6: "Abstraction and Encapsulation",
          p1: `
            Object-oriented languages provide effective ways to encapsulate data and functions together. 
            Users of abstractions need not know the implementation details or underlying data structures, promoting modular and maintainable codebases.
          `,
        },
        {
          h6: "Polymorphism",
          p1: `
          Polymorphism is really important for object-oriented languages.
          It enables the plugin architecture and allows components to be interchangeable without altering client code.
          `,
        },
        {
          h6: "Dependency Inversion",
          p1: `
          By relying on abstractions rather than concrete implementations, dependency inversion decouples components,
          enabling flexible and resilient systems. Polymorphism plays a crucial role in achieving this.
          `,
        },
      ],
      sectionFooter:
        "Can AI perceive real-world problems with the same depth and abstraction capabilities as the human brain?",
    },
    {
      h4: "Functional Programming",
      p1: `
        Functional programming is based on λ-calculus, developed in the 1930s by Alonzo Church.
        It emphasizes immutability, pure functions, and stateless computation,
        significantly reducing complexity in concurrent and distributed applications.
        
        Variables in functional programming are immutable by default, eliminating many classes of bugs
        that arise in mutable state systems and making reasoning about code behavior much simpler.
      `,
      sectionFooter: `
        While AI can generate functional-style code, understanding and reasoning about 
        immutability, side-effect management, and composition still require human insight and critical thinking.
      `,
    },
  ],
  footerData: {
    h4: "AI, Paradigms, and the Future of Software Engineering",
    p1: `
    As AI continues to advance, it will become a powerful tool in assisting software creation.
    However, true mastery over software paradigms — structured programming, OOP, functional programming, and others — will remain a uniquely human responsibility.
    If we exclusively depend on AI, it could put at risk the disciplined approach necessary for producing reliable, high-quality software.
    `,
  },
};
