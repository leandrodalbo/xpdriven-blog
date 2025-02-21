import WhatIsTDD from "../blog-article/WhatIsTDD";
import Intro from "../blog-article/Intro";
import WhatIsCleanCode from "../blog-article/WhatIsCleanCode";

const articleSelector: Record<number, () => JSX.Element> = {
  0: () => <Intro />,
  1: () => <WhatIsTDD />,
  2: () => <WhatIsCleanCode />
};

export default articleSelector;
