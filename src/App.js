import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./components/rootLayout/RootLayout";
import Blog from "./pages/blogs/Blog";
import BeAVolunteer from "./pages/getInvolved/beAvolunteer/BeAVolunteer";
import MakeDonation from "./pages/getInvolved/makeDonation/MakeDonation";
import Home from "./pages/home/Home";
import Awards from "./pages/awards/Awards";
import MediaCoverage from "./pages/mediaCoverage/MediaCoverage";
import AllProjects from "./pages/Program/AllProjects";
import AwarenessProgram from "./pages/Program/AwarenessProgram";
import Dlsh from "./pages/Program/Dlsh";
import EducationProgram from "./pages/Program/EducationProgram";
import EmergencyResponse from "./pages/Program/EmergencyResponse";
import HealthProgram from "./pages/Program/HealthProgram";
import ProjectTribeni from "./pages/Program/ProjectTribeni";
import NotFound from "./components/notFound/NotFound";
import Contact from "./pages/Contact/Contact";
import AboutUs from "./pages/AboutUs/AboutUs";
import WinterClothes from "./pages/projectsBlogs/WinterClothes";
import CycloneRelief from "./pages/projectsBlogs/CycloneRelief";
import TheyRead from "./pages/projectsBlogs/TheyRead";
import HealthCamp from "./pages/projectsBlogs/HealthCamp";
import ApplicationPage from "./pages/projectsBlogs/ApplicationPage";
import BusinessCard from "./pages/projectsBlogs/BusinessCard";
import MobileWeatherApp from "./pages/projectsBlogs/MobileWeatherApp";
import LowPolySocial from "./pages/projectsBlogs/LowPolySocial";
import SpecialBikes from "./pages/projectsBlogs/SpecialBikes";
import ModeratsElo from "./pages/projectsBlogs/ModeratsElo";
import SingleBlogPage from "./pages/singleBlogPage/SingleBlogPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    //routes
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />}></Route>
      <Route path="/all-projects" element={<AllProjects />} />
      <Route path="/education-program" element={<EducationProgram />} />
      <Route path="/health-program" element={<HealthProgram />} />
      <Route path="/awareness-program" element={<AwarenessProgram />} />
      <Route path="/emergency-response" element={<EmergencyResponse />} />
      <Route path="/project-tribeni" element={<ProjectTribeni />} />
      <Route path="/dlsh" element={<Dlsh />} />
      <Route path="/about-us" element={<AboutUs />}></Route>
      <Route path="/wfh-blogs" element={<Blog />}></Route>
      <Route
        path="/wfh-blogs/ভালোবাসা-দিবসে-পথশিশুদের-পাশে-ওয়ার্কস-ফর-হিউমিনিটি-ফাউন্ডেশন"
        element={<SingleBlogPage blogID={"1"} />}
      ></Route>
      <Route
        path="/wfh-blogs/donate-love-spread-happiness-2022"
        element={<SingleBlogPage blogID={"2"} />}
      ></Route>
      <Route path="/all-projects" element={<AllProjects />}></Route>
      <Route path="/education-program" element={<EducationProgram />}></Route>
      <Route path="/health-program" element={<HealthProgram />}></Route>
      <Route path="/awareness-program" element={<AwarenessProgram />}></Route>
      <Route path="/emergency-response" element={<EmergencyResponse />}></Route>
      <Route path="/project-tribeni" element={<ProjectTribeni />}></Route>
      <Route path="/dlsh" element={<Dlsh />}></Route>
      <Route path="/our-awards" element={<Awards />}></Route>
      <Route path="/media-coverage" element={<MediaCoverage />}></Route>
      <Route path="/make-a-donation" element={<MakeDonation />}></Route>
      <Route path="/be-a-volunteer" element={<BeAVolunteer />}></Route>
      <Route
        path="/portfolio/winter-clothes-distribution/"
        element={<WinterClothes />}
      ></Route>
      <Route
        path="portfolio/distribute-relief-to-cyclone-roanu-affected-coastal-people/"
        element={<CycloneRelief />}
      ></Route>
      <Route
        path="/portfolio/they-read-they-build/"
        element={<TheyRead />}
      ></Route>
      <Route
        path="/portfolio/health-camp-medicine-educational-equipment-for-flood-victim-children/"
        element={<HealthCamp />}
      ></Route>
      <Route
        path="/portfolio/application-mobile/"
        element={<ApplicationPage />}
      ></Route>
      <Route
        path="/portfolio/mobile-weather-app/"
        element={<MobileWeatherApp />}
      ></Route>
      <Route
        path="/portfolio/business-card/"
        element={<BusinessCard />}
      ></Route>
      <Route
        path="/portfolio/lowpoly-social/"
        element={<LowPolySocial />}
      ></Route>
      <Route
        path="/portfolio/special-bikes/"
        element={<SpecialBikes />}
      ></Route>
      <Route
        path="/portfolio/moderats-eloquenti/"
        element={<ModeratsElo />}
      ></Route>
      <Route path="/contact-us" element={<Contact />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
