import React from 'react'
import VolunteerResults from "./components/VolunteerResults";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
} from "react-router-dom";
import Home from './pages/Home'
import Survey from './pages/Survey'
import Chart from './pages/Chart'

function App() {
  return <Router>
    <Routes>    
      <Route path="/" element={<Home/>} />
      <Route path="/survey" element={<Survey/>} />
      <Route path="/admin/charts" element={<Chart/>} />
    </Routes>
  </Router>;
}

export default App;
