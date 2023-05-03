import {
    createBrowserRouter,
    Route,
    createRoutesFromElements
} from "react-router-dom";
import Personal from '../pages/Personal'
import Home from "../pages/Home";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/">
                <Route index element={<Home />} />
                <Route path="/personal" element={<Personal />} />
            </Route>
        </>
    )
)
