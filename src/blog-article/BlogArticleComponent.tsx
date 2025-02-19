import { BlogArticle } from "../types";

const BlogArticleComponent = ({ title, paragraphs }: BlogArticle) => (
    <article className="p-2 md:p-4 lg:p-6 sm:p-0 bg-gray-900 text-gray-200 rounded-lg shadow">
        <h1 className="text-2xl  md:text-3xl font-bold mb-6">{title}</h1>
        {paragraphs.map((it, index) => (
            <p key={index} className="mt-4 text-gray-300 leading-relaxed">
                {it}
            </p>
        ))}
    </article>
);

export default BlogArticleComponent;
