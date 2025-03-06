import introimg from "../assets/intro.png";

import { ArticleHeader } from "../article-header/ArticleHeader";
import { ArticleData } from "../types";

export interface IntroProps {
  data: ArticleData;
}

const Intro = ({ data }: IntroProps) => (
  <article className="blog-article">
    <ArticleHeader data={data.headerData} />

    <p className="blog-article-p">
      <strong>♻️ TDD</strong> helps you write better code by ensuring tests come
      first. Pioneered by <strong>Kent Beck</strong>, leads to more reliable
      software.
    </p>

    <p className="blog-article-p">
      <strong>👥 Extreme Programming</strong> emphasizes collaboration,
      continuous feedback, and rapid iterations. It’s all about delivering
      high-quality software faster.
    </p>

    <p className="blog-article-p">
      <strong>🧼 Clean Code</strong> is a core principle in software
      development.
      <strong> Robert C. Martin</strong>’s books, like
      <strong> Clean Code</strong>, teach us how to make our code more readable,
      maintainable, and flexible.
    </p>

    <p className="blog-article-p">
      <strong>📢 Agile</strong> promotes flexibility, continuous improvement,
      and close collaboration with customers. It’s a powerful way to build
      software that adapts to change.
    </p>

    <img src={introimg} alt="wtf-intro" className="blog-article-img" />

    <p className="blog-article-p">
      By following these practices, you'll become a better developer, creating
      software that is more scalable, maintainable, and easier to improve over
      time.
    </p>
  </article>
);

export default Intro;
