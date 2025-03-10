import { ArticleHeader } from "../article-header/ArticleHeader";
import { ArticleSection } from "../article-section/ArticleSection";

import { ArticleData } from "../types";

import monkeys from "../assets/monkeyeating.gif";

export interface CodeReadabilityMattersProps {
  data: ArticleData;
}

const CodeReadabilityMatters = ({ data }: CodeReadabilityMattersProps) => (
  <article className="blog-article">
    <ArticleHeader data={data.headerData} />

    {data.sectionsData.map((it) => (
      <ArticleSection key={it.h4} data={it} />
    ))}

    <h4 className="blog-article-h4">Useful links</h4>
    <ul className="blog-article-ul">
      <li>
        <a
          href="https://martinfowler.com/articles/on-pair-programming.html"
          target="_blank"
          rel="noopener noreferrer"
          className="blog-article-a"
        >
          Martin Fowler on Pair Programming
        </a>
      </li>
      <li>
        <a
          href="https://youtu.be/MFsbcQmMJyM"
          target="_blank"
          className="blog-article-a"
        >
          Why are programmers slow?
        </a>
      </li>
    </ul>
    <img src={monkeys} alt="monkeyeating" className="blog-article-img" />
  </article>
);

export default CodeReadabilityMatters;
