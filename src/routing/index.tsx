import { Route, Routes } from "react-router";
import { Button } from "@mui/material"
function WebRouting() {
    return (
        <Routes>
            <Route path="/" element={<div>
                I'm Home page
                <Button variant="contained">click me</Button>

            </div>} />
            <Route path="/about" element={<div>I'm about page</div>} />
        </Routes>
    )
}
export default WebRouting;
