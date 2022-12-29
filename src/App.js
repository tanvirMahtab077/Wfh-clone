import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./components/rootLayout/RootLayout";
import Blog from "./pages/blogs/Blog";
import MakeDonation from "./pages/getInvolved/makeDonation/MakeDonation";
import Home from "./pages/home/Home";
import AllProjects from "./pages/Program/AllProjects";
import AwarenessProgram from "./pages/Program/AwarenessProgram";
import Dlsh from "./pages/Program/Dlsh";
import EducationProgram from "./pages/Program/EducationProgram";
import EmergencyResponse from "./pages/Program/EmergencyResponse";
import HealthProgram from "./pages/Program/HealthProgram";
import ProjectTribeni from "./pages/Program/ProjectTribeni";

const router = createBrowserRouter(
  createRoutesFromElements(
    //routes
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />}></Route>
      <Route path="/wfh-blogs" element={<Blog />}></Route>
      <Route path='/all-projects' element={<AllProjects />} />
      <Route path='/education-program' element={<EducationProgram />} />
      <Route path='/health-program' element={<HealthProgram />} />
      <Route path='/awareness-program' element={<AwarenessProgram />} />
      <Route path='/emergency-response' element={<EmergencyResponse />} />
      <Route path='/project-tribeni' element={<ProjectTribeni />} />
      <Route path='/dlsh' element={<Dlsh />} />
      <Route path='/make-a-donation' element={<MakeDonation />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;