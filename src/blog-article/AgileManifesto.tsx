import agileImage from "../assets/agile-manifesto.png";
import agileWaters from "../assets/agilewaterfall.png";

const AgileManifesto = () => (
  <article className="blog-article">
    <h1 className="blog-article-h1">
      The Agile Manifesto: What It Means Today
    </h1>

    <p className="blog-article-p">
      In 2001, seventeen software developers gathered at a ski resort in Utah to
      explore a more effective approach to software development. Their
      collaboration led to a set of values and principles that revolutionized
      the industry.
    </p>

    <p className="blog-article-p">
      But <strong>what does Agile really mean today?</strong> has it been
      misused?
    </p>

    <h2 className="blog-article-h2">The Four Core Values of Agile</h2>

    <img src={agileImage} alt="agile-values" className="blog-article-img" />

    <p className="blog-article-p">
      These values embrace the dynamic nature of software, emphasizing
      flexibility, collaboration, and continuous improvement. By prioritizing
      adaptability over rigid planning and heavy processes, they ensure teams
      can effectively respond to constantly changing environments.
    </p>

    <h2 className="blog-article-h2">Agile vs. Waterfall: Key Differences</h2>

    <p className="blog-article-p">
      Being Agile is about delivering value—not just following a process
    </p>

    <img
      src={agileWaters}
      alt="Agile vs. Waterfall Comparison"
      className="blog-article-img"
    />

    <h2 className="blog-article-h2">Why Agile Is Often Misused</h2>

    <h4 className="blog-article-h4">1. "Fake Agile" (Agile in Name Only)</h4>
    <p className="blog-article-p">
      Some teams say they’re Agile but still follow rigid processes.
    </p>

    <h4 className="blog-article-h4">2. Over-Focus on Tools</h4>
    <p className="blog-article-p">
      Using <strong>Jira</strong> doesn't make you agile.
    </p>

    <h4 className="blog-article-h4">3. Agile as an Excuse for No Planning</h4>
    <p className="blog-article-p">
      Some teams misunderstand Agile as <strong>"no planning"</strong>, leading
      to chaos.
    </p>

    <h2 className="blog-article-h2">Become a useful person</h2>

    <a
      href="https://youtu.be/tedpry-czHw"
      target="_blank"
      rel="noopener noreferrer"
      className="blog-article-a"
    >
      Agile Frustrations (Martin Fowler)
    </a>

    <p className="blog-article-p">
      Martin Fowler gives a clear explanation about what <strong>Agile</strong>{" "}
      is about and how developers can become more useful for the business by
      understanding the domain they are working on.
    </p>

    <h2 className="blog-article-h2">Conclusion</h2>
    <p className="blog-article-p">
      Should we go back to 1990s and start writing large documentation that
      nobody reads or understand?
    </p>
  </article>
);

export default AgileManifesto;
