import BlogHeader from "../blog-components/blog-header/BlogHeader";
import ArticlePage from "../article-components/article-page/ArticlePage";
import BlogFooter from "../blog-components/blog-footer/BlogFooter";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { headerContent } from "../assets/general-content/header-content";
import { footerContent } from "../assets/general-content/footer-content";

export const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-[#121826]">
        <BlogHeader data={headerContent} />
        <div className="flex flex-1">
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
