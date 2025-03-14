import { BlogHeaderContent } from "../types";

export interface BlogHeaderProps {
  data: BlogHeaderContent;
}

const BlogHeader = ({ data }: BlogHeaderProps) => {
  return (
    <header className="blog-header">
      <a href="/" className="header-logo">
        {<data.blogIcon className="animate-spin-color" />}

        <span>{data.blogName}</span>
      </a>

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
    </header>
  );
};

export default BlogHeader;
