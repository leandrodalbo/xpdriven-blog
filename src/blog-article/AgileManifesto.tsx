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

    <h2 className="blog-article-h2">Conclusion</h2>
    <p className="blog-article-p">
      Should we go back to 1990s and start writing large documentation that
      nobody reads or understand?
    </p>
  </article>
);

export default AgileManifesto;
