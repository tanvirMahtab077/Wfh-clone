import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./components/rootLayout/RootLayout";
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
import AboutUs from "./pages/AboutUs/AboutUs";
import Vision from "./pages/Vision/Vision";

const router = createBrowserRouter(
  createRoutesFromElements(
    //routes
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />}></Route>
      <Route path='/all-projects' element={<AllProjects />} />
      <Route path='/education-program' element={<EducationProgram />} />
      <Route path='/health-program' element={<HealthProgram />} />
      <Route path='/awareness-program' element={<AwarenessProgram />} />
      <Route path='/emergency-response' element={<EmergencyResponse />} />
      <Route path='/project-tribeni' element={<ProjectTribeni />} />
      <Route path='/dlsh' element={<Dlsh />} />
      <Route path="/about-us" element={<AboutUs/>}></Route>
      <Route path="/our-awards" element={<Awards />}></Route>
      <Route path="/media-coverage" element={<MediaCoverage />}></Route>
      <Route path='/make-a-donation' element={<MakeDonation />} />
      <Route path='/be-a-volunteer' element={<BeAVolunteer />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;