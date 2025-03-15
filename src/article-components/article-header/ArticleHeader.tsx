import { ArticleHeaderData } from "../../types/types";

export interface ArticleHeaderProps {
  data: ArticleHeaderData;
}

export const ArticleHeader = ({ data }: ArticleHeaderProps) => {
  return (
    <header data-testid="article-header">
      <h1 className={data.h1class || "blog-article-h1"}>{data.h1}</h1>

      {data.h2 && (
        <h2
          data-testid="h2-element"
          className={data.h2class || "blog-article-h2"}
        >
          {data.h2}
        </h2>
      )}

      {data.img && (
        <img
          data-testid="header-image"
          src={data.img}
          alt="article-header-image"
          className={data.imgclass || "blog-article-img"}
        />
      )}

      <p data-testid="main-text" className={data.p1class || "blog-article-p"}>
        {data.p1}
      </p>

      {data.p2 && (
        <p
          data-testid="second-text"
          className={data.p2class || "blog-article-p"}
        >
          {data.p2}
        </p>
      )}

      {data.linkText && data.linkURL && (
        <a
          data-testid="link-resource"
          href={data.linkURL}
          target="_blank"
          rel="noopener noreferrer"
          className={data.linkclass || "blog-article-a"}
        >
          {data.linkText}
        </a>
      )}
    </header>
  );
};
