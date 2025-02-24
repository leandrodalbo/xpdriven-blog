import Intro from "../blog-article/Intro";
import WhatIsCleanCode from "../blog-article/WhatIsCleanCode";
import CodingMonkeys from "../blog-article/CodingMonkeys";
import WhatIsTDD from "../blog-article/WhatIsTDD";

const articleSelector: Record<number, () => JSX.Element> = {
  0: () => <Intro />,
  1: () => <WhatIsTDD />,
  2: () => <WhatIsCleanCode />,
  3: () => <CodingMonkeys />,
};

export default articleSelector;
