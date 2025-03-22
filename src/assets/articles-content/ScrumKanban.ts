import { ArticleData } from "../../types/types";

import scrumban from "../images/scrumban.png";

export const scrumVsKanban: ArticleData = {
  headerData: {
    h1: "Scrum vs. Kanban",
    p1: `
    Software development has evolved a lot since we started using Agile methodologies, making teams more flexible, efficient, and responsive to changing requirements. Scrum and Kanban, each with unique strengths and weaknesses are the most popular Agile frameworks.
    `,
    p2: `
    Choosing between them depends on organizational needs, team dynamics, and the nature of the work being done.
    `,
  },
  sectionsData: [
    {
      h4: "Understanding Scrum",
      p1: `
    Scrum is characterized by short sprint iterations, well-defined roles, and structured ceremonies like daily stand-ups, sprint planning, reviews, and retrospectives.
    `,
    },
    {
      h4: "Understanding Kanban",
      p1: `
    Kanban emphasises continuous delivery and work visualization with a Kanban board, allowing teams to limit work in progress (WIP) to optimize efficiency.
    `,
    },

    {
      h4: "Pros and Cons of Scrum",
      ul: [
        {
          h6: "Pros:",
          h6class: "blog-article-h6-green",
          p1: "Provides structure, clear roles, iterative releases, and continuous feedback.",
        },
        {
          h6: "Cons:",
          h6class: "blog-article-h6-red",
          p1: "Rigid sprint cycles, potential overhead, resistance to structure, and possible burnout.",
        },
      ],
    },
    {
      h4: "Pros and Cons of Kanban",
      ul: [
        {
          h6: "Pros:",
          h6class: "blog-article-h6-green",
          p1: "Lightweight, flexible, continuous delivery, and work-in-progress limits enhance efficiency.",
        },
        {
          h6: "Cons:",
          h6class: "blog-article-h6-red",
          p1: "Less structured planning, unclear accountability, and difficulty measuring long-term progress.",
        },
      ],
    },
    {
      h4: "When to Choose Scrum vs. Kanban",
      linkText:
        "Jesper Boeg shares his Agile journey. Comparing XP with Scrum, Lean and Kanban agile methodologies",
      linkURL: "https://www.youtube.com/watch?v=CzeeBatEqfs",
    },

    {
      h4: "Conclusion",
      img: scrumban,
      p1: `
      Choosing between Scrum and Kanban depends on the organization’s needs, maturity, and ability to embrace change. Many teams adopt hybrid models (e.g., Scrumban) to maximize efficiency and adaptability.
      `,
    },
  ],
  footerData: {
    h4: "🔗 Learn More About Agile Frameworks",
    ul: [
      { linkText: "Scrum Guide", linkURL: "https://scrumguides.org/" },
      {
        linkText: "Kanban Explained",
        linkURL:
          "https://kanbanize.com/kanban-resources/getting-started/what-is-kanban",
      },
      {
        linkText: "Agile Alliance Resources",
        linkURL: "https://www.agilealliance.org/",
      },
    ],
  },
};
