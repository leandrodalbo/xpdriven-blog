import { ArticleHeader } from "../article-header/ArticleHeader";
import monkeydriving from "../assets/monkeydriving.gif";
import { ArticleData } from "../types";

export interface CodingMonkeysProps {
  data: ArticleData;
}

const CodingMonkeys = ({ data }: CodingMonkeysProps) => (
  <article className="blog-article">
    <ArticleHeader data={data.headerData} />

    <h4 className="blog-article-h4">AI Can Generate Code</h4>
    <p className="blog-article-p">
      AI can now write boilerplate code faster than any human. If your job is
      just to type code without deep understanding, AI can easily replace that
      function.
    </p>

    <h4 className="blog-article-h4">Lack of Problem-Solving Skills</h4>
    <p className="blog-article-p">
      Real programmers are problem solvers. AI is a tool to make the
      implementations easier but humans must define problems, think critically,
      and design solutions.
    </p>

    <h4 className="blog-article-h4">AI Needs Supervision</h4>
    <p className="blog-article-p">
      AI-generated code is not efficient, vulnerable and with logical errors. A
      "coding monkey" might accept AI suggestions leading to serious issues.
    </p>

    <h4 className="blog-article-h4">The Industry Needs Thinkers, Not Coders</h4>
    <p className="blog-article-p">
      Software Engineering is about designing scalable, maintainable, and
      efficient systems. Writing code is just a small part of the bigger
      picture.
    </p>

    <h2 className="blog-article-h2">Conclusion</h2>
    <a
      href="https://www.youtube.com/watch?v=S_5nl1uJ8bg"
      target="_blank"
      rel="noopener noreferrer"
      className="blog-article-a"
    >
      Coding Monkeys (Martin Fowler)
    </a>

    <img
      src={monkeydriving}
      alt="monkey-driving"
      className="blog-article-img"
    />
  </article>
);

export default CodingMonkeys;
