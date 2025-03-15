import { BlogFooterContent } from "../../types/types";

export interface BlogFooterProps {
  data: BlogFooterContent;
}

const BlogFooter = ({ data }: BlogFooterProps) => (
  <footer className="blog-footer">
    <p className="bloog-footer-text">{data.text}</p>
  </footer>
);

export default BlogFooter;
