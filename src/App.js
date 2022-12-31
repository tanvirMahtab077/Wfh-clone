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
import Contact from "./pages/Contact/Contact";


const router = createBrowserRouter(
  createRoutesFromElements(
    //routes
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />}></Route>
      <Route path="/wfh-blogs" element={<Blog />}></Route>
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
      <Route path='/contact-us' element={<Contact />}></Route>
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
