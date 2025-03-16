import { BlogFooterContent } from "../../types/types";

export interface BlogFooterProps {
  data: BlogFooterContent;
}

const BlogFooter = ({ data }: BlogFooterProps) => (
  <footer className="blog-footer">
    <p className="bloog-footer-text">{data.text}</p>

    <nav className="flex space-x-6">
      {data.socialLinks.map((headerItem) => (
        <a
          key={headerItem.url}
          href={headerItem.url}
          className="header-social-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <headerItem.socialIcon />
        </a>
      ))}
    </nav>
  </footer>
);

export default BlogFooter;
