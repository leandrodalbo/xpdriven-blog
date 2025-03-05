import readability from "../assets/readability.jpg";

const CodeReadabilityMatters = () => (
  <article className="blog-article">
    <h1 className="blog-article-h1">
      Why Code Readability Matters More Than You Think
    </h1>

    <img
      src={readability}
      alt="code-readability"
      className="blog-article-img"
    />

    <h2 className="blog-article-h2">The Importance of Writing Readable Code</h2>
    <p className="blog-article-p">
      Code readability impacts maintainability, collaboration, and the overall
      quality of software systems. Writing clean and readable code is the key to
      keeping productivity and team velocity at a considerable rate.
    </p>

    <h4 className="blog-article-h4">Maintainability</h4>
    <p className="blog-article-p">
      If our code is easy to follow, we can identify and fix problems more
      efficiently, making your product more reliable.
    </p>

    <h4 className="blog-article-h4">Collaboration</h4>
    <p className="blog-article-p">
      Readable code ensures that all team members can comprehend and contribute
      to the codebase, reducing the learning curve for new team members.
    </p>

    <h4 className="blog-article-h4">Scalability</h4>
    <p className="blog-article-p">
      Keeping your codebase clean makes it easier to implement new features and
      adapt to changing requirements without introducing errors.
    </p>

    <h4 className="blog-article-h4">Useful practices</h4>
    <p className="blog-article-p">
      Refactoring, consistent coding standards, and automated testing will help.
    </p>

    <h4 className="blog-article-h4">Why do we need Code Reviews?</h4>
    <p className="blog-article-p">
      Everybody sees a different part of the elephant, and that is useful to
      avoid sending bugs to production. It is a way to enforce consistency, and
      it is also a learning opportunity.
    </p>

    <h4 className="blog-article-h4">Pair Programming with Juniors</h4>
    <p className="blog-article-p">
      Pair programming helps junior developers learn best practices, improving
      their problem-solving skills while also benefiting senior developers with
      fresh perspectives.
    </p>

    <h2 className="blog-article-h2">Useful links</h2>
    <ul className="blog-article-ul">
      <li>
        <a
          href="https://martinfowler.com/articles/on-pair-programming.html"
          target="_blank"
          rel="noopener noreferrer"
          className="blog-article-a"
        >
          Martin Fowler on Pair Programming
        </a>
      </li>
      <li>
        <a
          href="https://youtu.be/MFsbcQmMJyM"
          target="_blank"
          className="blog-article-a"
        >
          Why are programmers slow?
        </a>
      </li>
    </ul>
  </article>
);

export default CodeReadabilityMatters;
