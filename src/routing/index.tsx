import { Route, Routes } from "react-router";
import HomePage from "../pages/Home";
import Texnikalar from "../pages/Texnikalar";
import Elaqe from "../pages/Elaqe/Elaqe";


function WebRouting() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<div>I'm about page</div>} />
      <Route path="/texnikalar" element={<Texnikalar />} />
      <Route path="/Elaqe" element={<Elaqe/>} />
    </Routes>
  );
}
export default WebRouting;
