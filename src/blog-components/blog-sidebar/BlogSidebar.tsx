import { Link } from "react-router-dom";
import { useState } from "react";
import { FaSyncAlt } from "react-icons/fa";
import { BlogArticle } from "../../types/types";

interface BlogSidebarProps {
  articles: BlogArticle[];
}

const BlogSidebar = ({ articles }: BlogSidebarProps) => {
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
    <aside
      className={`${
        isDisplayed ? "sidebar-displayed" : "sidebar-not-displayed"
      } sidebar`}
    >
      {!isDisplayed && (
        <FaSyncAlt
          className="animate-spin-color"
          onClick={() => onCycleClick(true)}
          data-testid="tdd-cycle"
        />
      )}

      {isDisplayed && (
        <div>
          <div className="sidebar-search-box">
            <input
              type="text"
              placeholder="search"
              className="sidebar-search-box-input"
              onChange={(e) => filterArticles(e.target.value)}
            />
            <FaSyncAlt
              className="animate-spin-color"
              onClick={() => onCycleClick(false)}
              data-testid="tdd-cycle"
            />
          </div>

          <ul>
            {articlesList.map((article) => (
              <li key={article.id} className="mb-4">
                <Link
                  to={`/article/${article.id}`}
                  className="sidebar-article-link"
                >
                  {article.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </aside>
  );
};

export default BlogSidebar;
