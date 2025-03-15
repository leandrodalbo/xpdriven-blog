import { ArticleFooter } from "../article-footer/ArticleFooter";
import { ArticleHeader } from "../article-header/ArticleHeader";
import { ArticleSection } from "../article-section/ArticleSection";
import { ArticleData } from "../types";

export interface BlogArticleProps {
  data: ArticleData;
}

export const BlogArticle = ({ data }: BlogArticleProps) => (
  <article className="blog-article">
    <ArticleHeader data={data.headerData} />

    <div data-testid="article-sections">
      {data.sectionsData.map((it) => (
        <ArticleSection key={it.h4} data={it} />
      ))}
    </div>

    <ArticleFooter data-testId="article-footer" data={data.footerData} />
  </article>
);
