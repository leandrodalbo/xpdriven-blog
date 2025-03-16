import { BlogHeaderContent } from "../../types/types";
import { BlogMenu } from "../blog-menu/BlogMenu";

export interface BlogHeaderProps {
  data: BlogHeaderContent;
}

const BlogHeader = ({ data }: BlogHeaderProps) => {
  return (
    <header className="blog-header">
      <a href="/" className="header-logo">
        <span>{data.blogName}</span>
      </a>

      <BlogMenu articles={data.articles} />
    </header>
  );
};

export default BlogHeader;
