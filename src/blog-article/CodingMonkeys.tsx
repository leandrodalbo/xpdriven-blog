import codingMonkeys from "../assets/codingmonkeys.jpg";

const CodingMonkeys = () => (
  <article className="blog-article">
    <h1 className="blog-article-h1">Coding Monkeys</h1>

    <p className="blog-article-p">This article is just about to be added...</p>

    <img
      src={codingMonkeys}
      alt="coding-monkeys"
      className="blog-article-img"
    />
  </article>
);

export default CodingMonkeys;
