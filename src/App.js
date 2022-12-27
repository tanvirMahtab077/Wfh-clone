import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./components/rootLayout/RootLayout";
import Home from "./pages/home/Home";
import AllProjects from "./pages/Program/AllProjects";
import EducationProgram from "./pages/Program/EducationProgram";

const router = createBrowserRouter(
  createRoutesFromElements(
    //routes
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />}></Route>
      <Route path='/all-projects' element={<AllProjects />} />
      <Route path='/education-program' element={<EducationProgram />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;