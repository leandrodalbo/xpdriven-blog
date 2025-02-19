import { useParams } from "react-router-dom";
import BlogArticleComponent from "../blog-article/BlogArticleComponent";
import { BlogArticle } from "../types";


interface ArticlePageProps {
    articles: BlogArticle[];
}

const ArticlePage = ({ articles }: ArticlePageProps) => {
    const { id } = useParams();
    const articleById = articles.filter((it) => it.id === Number(id));

    return (

        articleById.length === 1 ? <BlogArticleComponent id={Number(id)} title={articleById[0].title} paragraphs={articleById[0].paragraphs} /> :
            <BlogArticleComponent id={0} title={articles[0].title} paragraphs={articles[0].paragraphs} />

    )


};

export default ArticlePage;
