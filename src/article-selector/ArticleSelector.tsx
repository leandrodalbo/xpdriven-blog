import Intro from "../blog-article/Intro";
import WhatIsCleanCode from "../blog-article/WhatIsCleanCode";
import CodingMonkeys from "../blog-article/CodingMonkeys";
import WhatIsTDD from "../blog-article/WhatIsTDD";
import AgileManifesto from "../blog-article/AgileManifesto";
import CodeReadabilityMatters from "../blog-article/CodeReadabilityMatters";
import ScrumOrKanban from "../blog-article/ScrumOrKanban";
import { codingMonkeysContent } from "../articles-content/CodingMonkeys";
import { agileManifestoContent } from "../articles-content/AgileManifesto";
import { codeReadabilityMatters } from "../articles-content/CodeReadabilityMatters";
import { introContent } from "../articles-content/Intro";
import { whatistdd } from "../articles-content/WhatIsTDD";
import { whatiscleancode } from "../articles-content/WhatIsCleanCode";

const articleSelector: Record<number, () => JSX.Element> = {
  0: () => <CodingMonkeys data={codingMonkeysContent} />,
  1: () => <Intro data={introContent} />,
  2: () => <WhatIsTDD data={whatistdd} />,
  3: () => <WhatIsCleanCode data={whatiscleancode} />,
  4: () => <AgileManifesto data={agileManifestoContent} />,
  5: () => <CodeReadabilityMatters data={codeReadabilityMatters} />,
  6: () => <ScrumOrKanban />,
};

export default articleSelector;
