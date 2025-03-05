import Intro from "../blog-article/Intro";
import WhatIsCleanCode from "../blog-article/WhatIsCleanCode";
import CodingMonkeys from "../blog-article/CodingMonkeys";
import WhatIsTDD from "../blog-article/WhatIsTDD";
import AgileManifesto from "../blog-article/AgileManifesto";
import CodeReadabilityMatters from "../blog-article/CodeReadabilityMatters";
import ScrumOrKanban from "../blog-article/ScrumOrKanban";
import { codingMonkeysContent } from "../articles-content/CodingMonkeys";
import { agileManifestoContent } from "../articles-content/AgileManifesto";

const articleSelector: Record<number, () => JSX.Element> = {
  0: () => <CodingMonkeys data={codingMonkeysContent} />,
  1: () => <Intro />,
  2: () => <WhatIsTDD />,
  3: () => <WhatIsCleanCode />,
  4: () => <AgileManifesto data={agileManifestoContent} />,
  5: () => <CodeReadabilityMatters />,
  6: () => <ScrumOrKanban />,
};

export default articleSelector;
