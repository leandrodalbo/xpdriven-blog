import NextArticle from "../NextArticle";
import { codingMonkeysContent } from "../articles-content/CodingMonkeys";
import { agileManifestoContent } from "../articles-content/AgileManifesto";
import { codeReadabilityMatters } from "../articles-content/CodeReadabilityMatters";
import { introContent } from "../articles-content/Intro";
import { whatistdd } from "../articles-content/WhatIsTDD";
import { whatiscleancode } from "../articles-content/WhatIsCleanCode";
import { BlogArticle } from "../blog-article/BlogArticle";

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
