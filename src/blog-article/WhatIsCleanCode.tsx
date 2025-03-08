import quickdirty from "../assets/quickdirty.png";

import { ArticleHeader } from "../article-header/ArticleHeader";

import { ArticleData } from "../types";

export interface WhatIsCleanCodeProps {
  data: ArticleData;
}

const WhatIsCleanCode = ({ data }: WhatIsCleanCodeProps) => (
  <article className="blog-article">
    <ArticleHeader data={data.headerData} />
    <h2 className="blog-article-h2">What Is Clean Code?</h2>
    <p className="blog-article-p">
      Clean code is software that’s easy to{" "}
      <strong>read, understand, and maintain</strong>. It follows best
      practices, making life simpler for you and your team. Software is dynamic,
      so clean code ensures it stays adaptable to changing requirements.
    </p>

    <h2 className="blog-article-h2">Why Is Clean Code Important?</h2>
    <ul className="blog-article-ul">
      <li>
        <strong>Easy to add new features</strong> – Well-designed and structured
        code is not rigid and easier to adapt.
      </li>
      <li>
        <strong>Less Defects</strong> – A safer product goes to production and
        you keep customers happy.
      </li>
      <li>
        <strong>Improves teamwork</strong> – Everyone can work efficiently on
        the same project.
      </li>
    </ul>

    <h2 className="blog-article-h2">Popular Principles</h2>

    <h4 className="blog-article-h4">1. Keep It Simple (KISS)</h4>

    <p className="blog-article-p">
      Avoid unnecessary complexity. Code should be as straightforward as
      possible while solving the problem effectively.
    </p>

    <h4 className="blog-article-h4">2. Meaningful Names</h4>
    <pre className="blog-article-pre">
      <code className="blog-article-red-code">
        {`// Bad
function calc(a: number, b: number): number {
    return a * b * 0.05;
}
`}
      </code>

      <code className="blog-article-green-code">
        {`
// Good
function calculateTax(price: number, taxRate: number): number {
    return price * taxRate;
}`}
      </code>
    </pre>

    <h4 className="blog-article-h4">
      3. Write small, focused routines that produce no side effects.
    </h4>
    <p className="blog-article-p">
      Each routines should do <strong>one thing only</strong> and do it well.
    </p>

    <h2 className="blog-article-h2">
      Clean Code vs. Quick and Dirty Solutions
    </h2>

    <blockquote className="blog-article-quote">
      "Even bad code can function but if it isn’t clean, it can bring a
      development organization to its knees..."
    </blockquote>

    <img
      src={quickdirty}
      alt="Clean Code vs Dirty Code Chart"
      className="blog-article-img"
    />

    <h2 className="blog-article-h2">Uncle Bob's Definition of Clean Code</h2>
    <a
      href="https://www.youtube.com/watch?v=RSrn_6TeeUQ"
      target="_blank"
      className="blog-article-a"
    >
      What is Clean Code?
    </a>
  </article>
);

export default WhatIsCleanCode;
