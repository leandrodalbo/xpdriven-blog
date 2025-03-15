import BlogHeader from "../blog-header/BlogHeader";
import BlogSidebar from "../blog-sidebar/BlogSidebar";
import ArticlePage from "../article-page/ArticlePage";
import BlogFooter from "../blog-footer/BlogFooter";
import { articles } from "../blog-articles";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { headerContent } from "../general-content/header-content";
import { footerContent } from "../general-content/footer-content";

export const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-[#121826]">
        <BlogHeader data={headerContent} />
        <div className="flex flex-1">
          <BlogSidebar articles={articles} />
          <main className="flex-1 p-6">
            <Routes>
              <Route path="/" element={<ArticlePage />} />
              <Route path="/article/:id" element={<ArticlePage />} />
            </Routes>
          </main>
        </div>
        <BlogFooter data={footerContent} />
      </div>
    </Router>
  );
};
