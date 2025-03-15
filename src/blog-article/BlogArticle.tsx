import { ArticleFooter } from "../article-components/article-footer/ArticleFooter";
import { ArticleHeader } from "../article-components/article-header/ArticleHeader";
import { ArticleSection } from "../article-components/article-section/ArticleSection";
import { ArticleData } from "../types/types";

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
