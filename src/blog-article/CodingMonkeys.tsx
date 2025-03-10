import { ArticleHeader } from "../article-header/ArticleHeader";

import { ArticleData } from "../types";
import monkeys from "../assets/monkeyeating.gif";
import { ArticleSection } from "../article-section/ArticleSection";

export interface CodingMonkeysProps {
  data: ArticleData;
}

const CodingMonkeys = ({ data }: CodingMonkeysProps) => (
  <article className="blog-article">
    <ArticleHeader data={data.headerData} />

    {data.sectionsData.map((it) => (
      <ArticleSection key={it.h4} data={it} />
    ))}

    <h4 className="blog-article-h4">Take a look</h4>
    <ul className="blog-article-ul">
      <li>
        <a
          href="https://www.youtube.com/watch?v=WubVswYg2CE"
          target="_blank"
          rel="noopener noreferrer"
          className="blog-article-a"
        >
          The end of programmers
        </a>
      </li>
      <li>
        <a
          href="https://www.youtube.com/watch?v=S_5nl1uJ8bg"
          target="_blank"
          rel="noopener noreferrer"
          className="blog-article-a"
        >
          Coding Monkeys (Martin Fowler)
        </a>
      </li>
    </ul>
    <img src={monkeys} alt="monkeyeating" className="blog-article-img" />
  </article>
);

export default CodingMonkeys;
