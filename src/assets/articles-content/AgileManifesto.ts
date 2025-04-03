import agileImage from "../images/agile-manifesto.png";
import agileWaters from "../images/agilewaterfall.png";
import { ArticleData } from "../../types/types";

export const agileManifestoContent: ArticleData = {
  headerData: {
    h1: "About the Agile Manifesto",
    h2: "What does Agile really mean today? has it been misused?",
    p1: `In 2001, seventeen software developers gathered at a ski resort in Utah to explore a more effective approach to software development.`,
    p2: `Their collaboration led to a set of values and principles that revolutionized the industry.`,
  },

  sectionsData: [
    {
      h4: "The Four Core Values of Agile",
      p1: `
      These values embrace the dynamic nature of software, emphasizing
      flexibility, collaboration, and continuous improvement. By prioritizing
      adaptability over rigid planning and heavy processes, they ensure teams
      can effectively respond to constantly changing environments.
      `,
      img: agileImage,
    },

    {
      h4: "Agile vs. Waterfall: Key Differences",
      p1: `
      Being Agile is about delivering value, not just following a process
      `,
      img: agileWaters,
    },

    {
      h4: "Agile Is Often Misused",
      ul: [
        {
          h6: "1. Fake Agile (Agile in Name Only)",
          p1: "Some teams say they’re Agile but still follow rigid processes.",
        },
        {
          h6: "2. Over-Focus on Tools",
          p1: "Using Jira doesn't make you agile.",
        },
        {
          h6: "3. Agile as an Excuse for No Planning",
          p1: "Some teams misunderstand Agile as no planning, leading to chaos.",
        },
      ],
    },
  ],

  footerData: {
    h4: "Conclusion",
    p1: `
    Should we go back to 1990s and start writing large documentation that nobody reads or understand?
    `,
  },
};
