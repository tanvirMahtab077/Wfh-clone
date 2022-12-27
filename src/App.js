import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './Pages/Home/Home';
import AllProjects from './Pages/Program/AllProjects';
import EducationProgram from './Pages/Program/EducationProgram';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/all-projects' element={<AllProjects />} />
        <Route path='/education-program' element={<EducationProgram />} />
      </Routes>
    </>
  );
}

export default App;
