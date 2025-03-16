import { useState } from "react";
import { BlogArticle } from "../../types/types";
import { FaSyncAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

export interface BlogMenuProps {
  articles: BlogArticle[];
}

export const BlogMenu = ({ articles }: BlogMenuProps) => {
  const [articlesList, setArticlesList] = useState(articles);
  const [isDisplayed, setIsDisplayed] = useState(false);

  const filterArticles = (value: string) => {
    const withTitle = articles.filter((it) =>
      it.title.toLowerCase().includes(value.toLowerCase())
    );

    setArticlesList(withTitle);
  };

  const onCycleClick = (isDisplayedValue: boolean) => {
    setIsDisplayed(isDisplayedValue);
    setArticlesList(articles);
  };

  return (
    <div data-testid="blog-menu">
      <FaSyncAlt
        className="animate-spin-color menu "
        onClick={() => onCycleClick(!isDisplayed)}
        data-testid="tdd-cycle"
      />

      {isDisplayed && (
        <div className="menu-displayed" data-testid="articles-menu">
          <div className="menu-search-box">
            <input
              type="text"
              placeholder="search"
              className="menu-search-box-input"
              onChange={(e) => filterArticles(e.target.value)}
            />
          </div>

          <ul className="mt-8 overflow-auto">
            {articlesList.map((article) => (
              <li key={article.id} className="mb-4">
                <Link
                  data-testid={`article-${article.id}`}
                  to={`/article/${article.id}`}
                  className="menu-article-link"
                  onClick={() => onCycleClick(!isDisplayed)}
                >
                  {article.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
