import { codingMonkeysContent } from "./articles-content/CodingMonkeys";
import { agileManifestoContent } from "./articles-content/AgileManifesto";
import { codeReadabilityMatters } from "./articles-content/CodeReadabilityMatters";
import { introContent } from "./articles-content/Intro";
import { whatistdd } from "./articles-content/WhatIsTDD";
import { whatiscleancode } from "./articles-content/WhatIsCleanCode";
import { BlogArticle } from "../types/types";
import { scrumVsKanban } from "./articles-content/ScrumKanban";
import { whySoftwareDesignMatters } from "./articles-content/softwaredesign";
import { sfparadigms } from "./articles-content/SFParadigms";

export const articles: BlogArticle[] = [
  {
    id: 0,
    title: "Welcome to XPDriven Blog",
    data: introContent,
  },
  {
    id: 1,
    title: "Coding Monkeys",
    data: codingMonkeysContent,
  },
  {
    id: 2,
    title: "What is TDD? A Beginner’s Guide",
    data: whatistdd,
  },
  {
    id: 3,
    title: "Clean Code: A Beginner’s Guide",
    data: whatiscleancode,
  },
  {
    id: 4,
    title: "About the Agile Manifesto",
    data: agileManifestoContent,
  },
  {
    id: 5,
    title: "Code Readability Matters More Than You Think",
    data: codeReadabilityMatters,
  },
  {
    id: 6,
    title: "Scrum vs. Kanban",
    data: scrumVsKanban,
  },
  {
    id: 7,
    title: "Why Software Design Matters",
    data: whySoftwareDesignMatters,
  },
  {
    id: 8,
    title: "AI and software paradigms",
    data: sfparadigms,
  },
];
