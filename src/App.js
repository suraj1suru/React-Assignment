import "./App.css";
import Dashboard from "./Components/dashboard";
import Courses from "./Components/courses";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
       <Routes>
      <Route exact path="/" element={<Dashboard/>} /> 
      <Route exact path="/courses" element={<Courses/>} /> 
      </Routes> 
     
    </Router>
  );
}

export default App;
