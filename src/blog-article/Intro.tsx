import { ArticleHeader } from "../article-header/ArticleHeader";
import { ArticleSection } from "../article-section/ArticleSection";
import { ArticleData } from "../types";
import monkeys from "../assets/monkeyeating.gif";

export interface IntroProps {
  data: ArticleData;
}

const Intro = ({ data }: IntroProps) => (
  <article className="blog-article">
    <ArticleHeader data={data.headerData} />

    {data.sectionsData.map((it) => (
      <ArticleSection key={it.h4} data={it} />
    ))}

    <h4 className="blog-article-h4">Conclusion</h4>
    <p className="blog-article-p">
      By following these practices, you'll become a better developer, creating
      software that is more scalable, maintainable, and easier to improve over
      time.
    </p>
    <img src={monkeys} alt="monkeyeating" className="blog-article-img" />
  </article>
);

export default Intro;
