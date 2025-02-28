import BlogHeader from "../blog-header/BlogHeader";
import BlogSidebar from "../blog-sidebar/BlogSidebar";
import ArticlePage from "../article-page/ArticlePage";
import BlogFooter from "../blog-footer/BlogFooter";
import { articles } from "../blog-articles";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

export const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-900 text-yellow-300">
        <BlogHeader />
        <div className="flex flex-1">
          <BlogSidebar articles={articles} />
          <main className="flex-1 p-6 bg-gray-900">
            <Routes>
              <Route path="/" element={<ArticlePage />} />
              <Route path="/article/:id" element={<ArticlePage />} />
            </Routes>
          </main>
        </div>
        <BlogFooter />
      </div>
    </Router>
  );
};
