import { useParams } from "react-router-dom";
import articleSelector from "../article-selector/ArticleSelector";
import { articles } from "../blog-articles";

const ArticlePage = () => {
  const { id } = useParams();

  const articleId = () => {
    const selectedId = Number(id);

    return isNaN(selectedId) || selectedId >= articles.length ? 0 : selectedId;
  };

  return articleSelector[articleId()]();
};

export default ArticlePage;
