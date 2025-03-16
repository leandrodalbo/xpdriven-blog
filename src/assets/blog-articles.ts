import { codingMonkeysContent } from "./articles-content/CodingMonkeys";
import { agileManifestoContent } from "./articles-content/AgileManifesto";
import { codeReadabilityMatters } from "./articles-content/CodeReadabilityMatters";
import { introContent } from "./articles-content/Intro";
import { whatistdd } from "./articles-content/WhatIsTDD";
import { whatiscleancode } from "./articles-content/WhatIsCleanCode";
import { BlogArticle } from "../types/types";
import { nextArticleContent } from "./articles-content/NextArticle";

export const articles: BlogArticle[] = [
  {
    id: 0,
    title: "Welcome to the XPDriven Blog",
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
    data: nextArticleContent,
  },
];
