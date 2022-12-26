import "./App.css";
import Dashboard from "./Components/dashboard";
import Courses from "./Components/courses";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Components/login";

function App() {
  return (
    <div  >
    <Router >
    
       <Routes>
        <Route exact path="/" element={<Login/>} />
      <Route exact path="/dashboard" element={<Dashboard/>} /> 
      <Route exact path="/courses" element={<Courses/>} /> 
      </Routes> 
     
    </Router>
    </div>
  );
}

export default App;
