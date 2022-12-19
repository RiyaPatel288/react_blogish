import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Bloglist from './pages/blogList/bloglist';
import Blog from './pages/blog/blog';
import { Link, BrowserRouter, Route, Routes } from "react-router-dom";
import Searchcom from './component/searchcom/searchcom';
import Tags from './component/tags/tags';
import BlogList from './component/blogList/blogList';
import Tagsearch from './component/tags/tagsearch';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
            <Routes>
              
                <Route path="/" element={<Bloglist />} />
                <Route path="/search/:query" element={<Searchcom/>} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:blogTitle" element={<Blog />} />
                <Route path="/tag/:tagTitle" element={<Tagsearch/>} />
                
                <Route path="*" element={<h1>Sorry! I guess we lost somewhere [404]</h1>} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
