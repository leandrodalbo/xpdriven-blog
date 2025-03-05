import { ArticleHeaderData } from "../types";

export interface ArticleHeaderProps {
  data: ArticleHeaderData;
}

export const ArticleHeader = ({ data }: ArticleHeaderProps) => {
  return (
    <header>
      <h1 className="blog-article-h1">{data.h1}</h1>

      {data.h2 && (
        <h2 data-testid="h2-element" className="blog-article-h2">
          {data.h2}
        </h2>
      )}

      {data.img && (
        <img
          data-testid="header-image"
          src={data.img}
          alt="article-header-image"
          className="blog-article-img"
        />
      )}

      <p data-testid="main-text" className="blog-article-p">
        {data.p1}
      </p>

      {data.p2 && (
        <p data-testid="second-text" className="blog-article-p">
          {data.p2}
        </p>
      )}
    </header>
  );
};
