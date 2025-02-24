import Intro from "../blog-article/Intro";
import WhatIsCleanCode from "../blog-article/WhatIsCleanCode";
import CodingMonkeys from "../blog-article/CodingMonkeys";
import WhatIsTDD from "../blog-article/WhatIsTDD";
import AgileManifesto from "../blog-article/AgileManifesto";

const articleSelector: Record<number, () => JSX.Element> = {
  0: () => <CodingMonkeys />,
  1: () => <Intro />,
  2: () => <WhatIsTDD />,
  3: () => <WhatIsCleanCode />,
  4: () => <AgileManifesto />,
};

export default articleSelector;
