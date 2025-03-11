import { ArticleHeader } from "../article-header/ArticleHeader";
import { ArticleSection } from "../article-section/ArticleSection";

import { ArticleData } from "../types";
import monkeys from "../assets/monkeyeating.gif";

export interface WhatIsTDDProps {
  data: ArticleData;
}

const WhatIsTDD = ({ data }: WhatIsTDDProps) => (
  <article className="blog-article">
    <ArticleHeader data={data.headerData} />
    {data.sectionsData.map((it) => (
      <ArticleSection key={it.h4} data={it} />
    ))}

    <h4 className="blog-article-h4">🔗 Learn More About TDD</h4>
    <ul className="blog-article-ul">
      <li>
        <a
          href="https://www.youtube.com/watch?v=x1O5cKCAgdk"
          className="text-blue-400"
          target="_blank"
          rel="noopener noreferrer"
        >
          Did Kent Beck REALLY Invent TDD?
        </a>
      </li>
      <li>
        <a
          href="https://martinfowler.com/bliki/TestDrivenDevelopment.html"
          className="text-blue-400"
          target="_blank"
          rel="noopener noreferrer"
        >
          Martin Fowler on TDD
        </a>
      </li>
      <li>
        <a
          href="https://www.jetbrains.com/help/idea/tdd-with-intellij-idea.html"
          className="text-blue-400"
          target="_blank"
          rel="noopener noreferrer"
        >
          TDD in IntelliJ IDEA
        </a>
      </li>
    </ul>
    <img src={monkeys} alt="monkeyeating" className="blog-article-img" />
  </article>
);

export default WhatIsTDD;
