export interface BlogArticle {
  id: number;
  title: string;
}

export interface ArticleHeaderData {
  h1: string;
  p1: string;
  h2?: string;
  img?: string;
  p2?: string;
  linkText?: string;
  linkURL?: string;
}

export interface ArticleSectionData {
  h4: string;
  p1?: string;
  h6?: string;
  img?: string;
  linkText?: string;
  linkURL?: string;
  ul?: ArticleLIData[];
}

export interface ArticleLIData {
  h6: string;
  p1?: string;
}

export interface ArticleData {
  headerData: ArticleHeaderData;
  sectionsData: ArticleSectionData[];
}
