import { Route, Routes } from "react-router";
import BlogPage from "../pages/Blog";
import Elaqe from "../pages/Elaqe/Elaqe";
import HomePage from "../pages/Home";
import SingleBlog from "../pages/SingleBlog";
import Texnikalar from "../pages/Texnikalar";


function WebRouting() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<div>I'm about page</div>} />
      <Route path="/texnikalar" element={<Texnikalar />} />
      <Route path="/contact" element={<Elaqe />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/blog/:id" element={<SingleBlog />} />
    </Routes>
  );
}
export default WebRouting;
