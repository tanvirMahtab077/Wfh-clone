import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./components/rootLayout/RootLayout";
import Home from "./pages/home/Home";
import Awards from "./pages/awards/Awards";
import MediaCoverage from "./pages/mediaCoverage/MediaCoverage";

const router = createBrowserRouter(
  createRoutesFromElements(
    //routes
    <Route path="/" element={<RootLayout />}>
      <Route path="/our-awards" element={<Awards />}></Route>
      <Route path="/media-coverage" element={<MediaCoverage />}></Route>
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;