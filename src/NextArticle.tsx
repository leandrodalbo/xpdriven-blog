import monkeydriving from "./assets/monkeydriving.gif";

const NextArticle = () => (
  <article className="blog-article">
    <h1 className="blog-article-h1">Next Article: Scrum vs. Kanban</h1>

    <p className="blog-article-p-center">
      This article is just about to be added...
    </p>

    <img
      src={monkeydriving}
      alt="monkey-driving"
      className="blog-article-img"
    />
  </article>
);

export default NextArticle;
