import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useLocation } from "react-router-dom";
import {  useNavigate } from 'react-router-dom';

function Navbarr() {
      const { state } = useLocation();
      let navigate = useNavigate();
  return (
    <Navbar bg="dark" variant="dark">
        <Container>
        
       <h2 className="btn2" onClick={()=> {navigate("/")}}>{state.text}</h2> 
      
        </Container>
      </Navbar>
  )
}

export default Navbarr