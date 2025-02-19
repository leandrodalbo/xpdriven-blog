import { Link } from "react-router-dom";
import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { BlogArticle } from "../types";

interface BlogSidebarProps {
    articles: BlogArticle[];
}

const BlogSidebar = ({ articles }: BlogSidebarProps) => {
    const [articlesList, setArticlesList] = useState(articles);
    const [isDisplayed, setIsDisplayed] = useState(true)

    const filterArticles = (value: string) => {
        const withTitle = articles.filter((it) =>
            it.title.toLowerCase().includes(value.toLowerCase())
        );

        setArticlesList(withTitle);
    };



    return (
        <aside
            className={`${isDisplayed ? "w-full md:w-1/4 lg:w-1/5" : "w-12"} max-w-xs bg-gray-800 p-2 transition-all duration-300`}>
            {!isDisplayed && <FaArrowRight className="text-white text-lg ml-2" onClick={() => setIsDisplayed(true)} />}
            {isDisplayed && <div>
                <div className="flex items-center bg-gray-700 rounded w-full mb-4">

                    <FaArrowLeft className="text-white text-lg ml-2" onClick={() => setIsDisplayed(false)} />

                    <input
                        type="text"
                        placeholder="Search articles..."
                        className="p-1 text-white bg-gray-700 rounded w-full ml-2 focus:outline-none"
                        onChange={(e) => filterArticles(e.target.value)}
                    />
                </div>

                <ul>
                    {articlesList.map((article) => (
                        <li key={article.id} className="mb-4">
                            <Link
                                to={`/article/${article.id}`}
                                className="text-blue-400 hover:underline"
                            >
                                {article.title}
                            </Link>
                        </li>
                    ))}
                </ul>

            </div>
            }
        </aside>
    );
};

export default BlogSidebar;
