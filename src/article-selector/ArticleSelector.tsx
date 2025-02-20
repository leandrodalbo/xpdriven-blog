import Article1 from "../blog-article/article-1/Article1";
import Intro from "../blog-article/intro/Intro";

const articleSelector: Record<number, () => JSX.Element> = {
  0: () => <Intro />,
  1: () => <Article1 />
};

export default articleSelector;
