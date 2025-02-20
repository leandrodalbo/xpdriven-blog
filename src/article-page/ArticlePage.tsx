import { useParams } from "react-router-dom";
import articleSelector from "../article-selector/ArticleSelector";
import { articles } from "../blog-article/blog-articles";

const ArticlePage = () => {
    const { id } = useParams();

    const articleId = () => {
        const selectedId = Number(id)

        if (isNaN(selectedId) || selectedId >= articles.length)
            return 0;

        return selectedId;

    }

    return (articleSelector[articleId()]())

};

export default ArticlePage;