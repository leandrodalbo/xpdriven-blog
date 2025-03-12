import { ArticleFooter } from "../article-footer/ArticleFooter";
import { ArticleHeader } from "../article-header/ArticleHeader";
import { ArticleSection } from "../article-section/ArticleSection";
import { ArticleData } from "../types";

export interface AgileManifestoProps {
  data: ArticleData;
}

const AgileManifesto = ({ data }: AgileManifestoProps) => (
  <article className="blog-article">
    <ArticleHeader data={data.headerData} />

    {data.sectionsData.map((it) => (
      <ArticleSection key={it.h4} data={it} />
    ))}

    <ArticleFooter data={data.footerData} />
  </article>
);

export default AgileManifesto;
