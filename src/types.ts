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
}

export interface ArticleData {
  headerData: ArticleHeaderData;
}
