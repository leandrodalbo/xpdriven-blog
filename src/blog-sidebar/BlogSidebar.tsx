import { Link } from "react-router-dom";
import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { BlogArticle } from "../types";

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

  return (
    <aside
      className={`${isDisplayed ? "w-full md:w-1/4 lg:w-1/5" : "w-12"} 
                        max-w-xs border-r border-yellow-400 p-2 
                        transition-all duration-300`}
    >
      {!isDisplayed && (
        <FaArrowRight
          className="text-yellow-300 hover:text-orange-400 text-lg ml-2 cursor-pointer transition duration-300"
          onClick={() => setIsDisplayed(true)}
          data-testid="arrow-right"
        />
      )}

      {isDisplayed && (
        <div>
          <div className="flex items-center rounded w-full mb-4">
            <FaArrowLeft
              className="text-yellow-300 hover:text-orange-400 text-lg ml-2 cursor-pointer transition duration-300"
              onClick={() => setIsDisplayed(false)}
              data-testid="arrow-left"
            />

            <input
              type="text"
              placeholder="search"
              className="p-1 text-pink-300 placeholder-pink-400 bg-gray-700 rounded w-full ml-2 focus:outline-none"
              onChange={(e) => filterArticles(e.target.value)}
            />
          </div>

          <ul>
            {articlesList.map((article) => (
              <li key={article.id} className="mb-4">
                <Link
                  to={`/article/${article.id}`}
                  className="text-yellow-300 hover:text-orange-400 transition duration-300"
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
