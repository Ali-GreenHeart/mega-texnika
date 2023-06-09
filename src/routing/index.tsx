import { Route, Routes } from "react-router";
import HomePage from "../pages/Home";
import Texnikalar from "../pages/Texnikalar";
import BlogPage from "../pages/Blog";

function WebRouting() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<div>I'm about page</div>} />
      <Route path="/texnikalar" element={<Texnikalar />} />
      <Route path="/blog" element={<BlogPage />} />
    </Routes>
  );
}
export default WebRouting;
