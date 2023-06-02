import { Route, Routes } from "react-router";
import HomePage from "../pages/Home";

function WebRouting() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<div>I'm about page</div>} />
        </Routes>
    )
}
export default WebRouting;
