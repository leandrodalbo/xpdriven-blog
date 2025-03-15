import NextArticle from "../NextArticle";
import { codingMonkeysContent } from "../../assets/articles-content/CodingMonkeys";
import { agileManifestoContent } from "../../assets/articles-content/AgileManifesto";
import { codeReadabilityMatters } from "../../assets/articles-content/CodeReadabilityMatters";
import { introContent } from "../../assets/articles-content/Intro";
import { whatistdd } from "../../assets/articles-content/WhatIsTDD";
import { whatiscleancode } from "../../assets/articles-content/WhatIsCleanCode";
import { BlogArticle } from "../../blog-components/blog-article/BlogArticle";

const articleSelector: Record<number, () => JSX.Element> = {
  0: () => <BlogArticle data={codingMonkeysContent} />,
  1: () => <BlogArticle data={introContent} />,
  2: () => <BlogArticle data={whatistdd} />,
  3: () => <BlogArticle data={whatiscleancode} />,
  4: () => <BlogArticle data={agileManifestoContent} />,
  5: () => <BlogArticle data={codeReadabilityMatters} />,
  6: () => <NextArticle />,
};

export default articleSelector;
