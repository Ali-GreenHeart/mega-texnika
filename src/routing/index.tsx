import { Route, Routes } from "react-router";

function WebRouting() {
    return (
        <Routes>
            <Route path="/" element={<div>I'm Home page</div>} />
            <Route path="/about" element={<div>I'm about page</div>} />
        </Routes>
    )
}
export default WebRouting;
