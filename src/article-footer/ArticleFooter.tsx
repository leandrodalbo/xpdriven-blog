import monkeys from "../assets/monkeyeating.gif";
import { ArticleFooterData } from "../types";

export interface ArticleFooterProps {
  data: ArticleFooterData;
}

export const ArticleFooter = ({ data }: ArticleFooterProps) => {
  return (
    <footer>
      <h4 className={data.h4class || "blog-article-h4"}>{data.h4}</h4>

      {data.p1 && (
        <p data-testid="main-text" className={data.p1class || "blog-article-p"}>
          {data.p1}
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

      {data.ul && (
        <ul
          data-testid="section-ul"
          className={data.ulclass || "blog-article-ul"}
        >
          {data.ul.map((it) => (
            <li key={it.linkURL}>
              <a
                href={it.linkURL}
                target="_blank"
                className={it.linkclass || "blog-article-a"}
              >
                {it.linkText}
              </a>
            </li>
          ))}
        </ul>
      )}

      <img src={monkeys} alt="monkeyeating" className="blog-article-img" />
    </footer>
  );
};
