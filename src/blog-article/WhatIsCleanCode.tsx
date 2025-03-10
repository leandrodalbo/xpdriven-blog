import { ArticleHeader } from "../article-header/ArticleHeader";

import { ArticleData } from "../types";
import monkeys from "../assets/monkeyeating.gif";
import { ArticleSection } from "../article-section/ArticleSection";

export interface WhatIsCleanCodeProps {
  data: ArticleData;
}

const WhatIsCleanCode = ({ data }: WhatIsCleanCodeProps) => (
  <article className="blog-article">
    <ArticleHeader data={data.headerData} />

    {data.sectionsData.map((it) => (
      <ArticleSection key={it.h4} data={it} />
    ))}

    <h4 className="blog-article-h4">Uncle Bob's Definition of Clean Code</h4>
    <a
      href="https://www.youtube.com/watch?v=RSrn_6TeeUQ"
      target="_blank"
      className="blog-article-a"
    >
      What is Clean Code?
    </a>
    <img src={monkeys} alt="monkeyeating" className="blog-article-img" />
  </article>
);

export default WhatIsCleanCode;
