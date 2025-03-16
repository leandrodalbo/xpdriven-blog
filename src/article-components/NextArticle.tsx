import monkeydriving from "../assets/images/monkeydriving.gif";
import { ArticleData } from "../types/types";
import { ArticleHeader } from "./article-header/ArticleHeader";

export interface NextArticleProps {
  data: ArticleData;
}
const NextArticle = ({ data }: NextArticleProps) => (
  <article className="blog-article">
    <ArticleHeader data={data.headerData} />

    <img
      src={monkeydriving}
      alt="monkey-driving"
      className="blog-article-img"
    />
  </article>
);

export default NextArticle;
