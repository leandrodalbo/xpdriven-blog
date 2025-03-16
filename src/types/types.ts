import { IconType } from "react-icons";

export interface BlogArticle {
  id: number;
  title: string;
  data: ArticleData;
}

export interface ArticleHeaderData {
  h1: string;
  h1class?: string;
  p1: string;
  p1class?: string;
  h2?: string;
  h2class?: string;
  img?: string;
  imgclass?: string;
  p2?: string;
  p2class?: string;
  linkText?: string;
  linkURL?: string;
  linkclass?: string;
}

export interface ArticleSectionData {
  h4: string;
  h4class?: string;
  p1?: string;
  p1class?: string;
  h6?: string;
  h6class?: string;
  img?: string;
  imgclass?: string;
  linkText?: string;
  linkURL?: string;
  linkclass?: string;
  ul?: ArticleLIData[];
  ulclass?: string;
}

export interface ArticleFooterData {
  h4: string;
  h4class?: string;
  p1?: string;
  p1class?: string;
  img?: string;
  imgclass?: string;
  linkText?: string;
  linkURL?: string;
  linkclass?: string;
  ul?: ArticleFooterLIData[];
  ulclass?: string;
}

export interface ArticleLIData {
  h6: string;
  h6class?: string;
  p1?: string;
  p1class?: string;
  preRedCode?: string;
  preGreenCode?: string;
}

export interface ArticleFooterLIData {
  linkText: string;
  linkURL: string;
  linkclass?: string;
}

export interface ArticleData {
  headerData: ArticleHeaderData;
  sectionsData: ArticleSectionData[];
  footerData: ArticleFooterData;
}

export interface BlogHeaderContent {
  blogName: string;
  socialLinks: Social[];
}

export interface Social {
  url: string;
  socialIcon: IconType;
}

export interface BlogFooterContent {
  text: string;
}
