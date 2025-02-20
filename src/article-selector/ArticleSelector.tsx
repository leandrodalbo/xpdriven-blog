import WhatIsTDD from "../blog-article/what-is-TDD/WhatIsTDD";
import Intro from "../blog-article/intro/Intro";

const articleSelector: Record<number, () => JSX.Element> = {
  0: () => <Intro />,
  1: () => <WhatIsTDD />
};

export default articleSelector;
