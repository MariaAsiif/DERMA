import {
    createBrowserRouter,
    Route,
    createRoutesFromElements
} from "react-router-dom";
import Personal from '../pages/Personal'
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import Services from "../pages/Services";
import ContactUs from "../pages/ContactUs";
import Booking from "../pages/Booking";
import ServiceDetail from "../pages/ServiceDetail";
import SurgeryDetail from "../components/LandingComponents/Surgeries/SurgeryDetail";
import Surgeries from "../pages/Surgeries";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/">
                <Route index element={<Home />} />
                <Route path="/personal" element={<Personal />} />
                <Route path="/aboutUs" element={<AboutUs />} />
                <Route path="/contactus" element={<ContactUs />} />
                <Route path="/booking" element={<Booking />} />
                <Route path="/services" element={<Services />} />
                <Route path="/service-detail/:id" element={<ServiceDetail />} />
                <Route path="/surgery" element={<Surgeries />} />
                <Route path="/surgery-detail/:id" element={<SurgeryDetail />} />

            </Route>
        </>
    )
)
