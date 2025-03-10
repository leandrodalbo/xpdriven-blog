import { ArticleSectionData } from "../types";

export interface ArticleSectionProps {
  data: ArticleSectionData;
}

export const ArticleSection = ({ data }: ArticleSectionProps) => {
  return (
    <section>
      <h4
        data-testid="section-header"
        className={data.h4class || "blog-article-h4"}
      >
        {data.h4}
      </h4>

      {data.p1 && (
        <p
          data-testid="section-text"
          className={data.p1class || "blog-article-p"}
        >
          {data.p1}
        </p>
      )}

      {data.linkText && data.linkURL && (
        <a
          data-testid="section-link-resource"
          href={data.linkURL}
          target="_blank"
          rel="noopener noreferrer"
          className={data.linkclass || "blog-article-a"}
        >
          {data.linkText}
        </a>
      )}

      {data.img && (
        <img
          data-testid="section-image"
          src={data.img}
          alt="article-section-image"
          className={data.imgclass || "blog-article-img"}
        />
      )}

      {data.ul && (
        <ul
          data-testid="section-ul"
          className={data.ulclass || "blog-article-ul"}
        >
          {data.ul.map((it) => (
            <li key={it.h6}>
              <h6
                data-testid="section-ul-subheader"
                className={it.h6class || "blog-article-h6"}
              >
                {it.h6}
              </h6>
              {it.p1 && (
                <p
                  data-testid="section-ul-text"
                  className={it.p1class || "blog-article-p"}
                >
                  {it.p1}
                </p>
              )}

              {it.preRedCode && (
                <pre data-testid="section-pre-red" className="blog-article-pre">
                  <code className="blog-article-red-code">{it.preRedCode}</code>
                </pre>
              )}

              {it.preGreenCode && (
                <pre
                  data-testid="section-pre-green"
                  className="blog-article-pre"
                >
                  <code className="blog-article-green-code">
                    {it.preGreenCode}
                  </code>
                </pre>
              )}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};
