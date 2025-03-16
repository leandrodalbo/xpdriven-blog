import { articles } from "../../assets/blog-articles";
import { BlogArticle } from "../../blog-components/blog-article/BlogArticle";

const articleSelector = (articleId: number) => (
  <BlogArticle data={articles[articleId].data} />
);

export default articleSelector;
