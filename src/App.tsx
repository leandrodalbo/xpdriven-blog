
import BlogHeader from './blog-header/BlogHeader';
import BlogSidebar from './blog-sidebar/BlogSidebar';
import ArticlePage from './article-page/ArticlePage';
import BlogFooter from './blog-footer/BlogFooter';
import { articles } from './data/blog-articles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export const App = () => {
    return (
        <Router>
            <div className="flex flex-col min-h-screen">
                <BlogHeader />
                <div className="flex flex-1">
                    <BlogSidebar articles={articles} />
                    <main className="flex-1 p-4 bg-gray-800">
                        <Routes>
                            <Route path="/" element={<ArticlePage articles={articles} />} />
                            <Route path="/article/:id" element={<ArticlePage articles={articles} />} />
                        </Routes>
                    </main>
                </div>
                <BlogFooter />
            </div>
        </Router>
    )
}
