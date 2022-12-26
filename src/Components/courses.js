import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "../App.css";
import logo1 from "../Assests/exclamation-circle-fill.svg";
import JOSNDATA1 from "../MOCK_DATA2.json";
import Navbarr from "../navbar";



function Courses() {


  return (
  <>
  <Navbarr/>
    <div  style={{ display: "flex", flexWrap: "wrap" }}>
      
      {JOSNDATA1.map((val) => {
        return (
          <div className="course" style={{  width: "26rem", flex: "1 1 1 33%" }}>
            <img className="logo" src={logo1} />
            <Card
              
            >
              <h3>{val.title}</h3>
              <Card.Body>
                <Card.Text>{val.description}</Card.Text>
              </Card.Body>
              <Button className="btn">Start</Button>
            </Card>
          </div>
        );
      })}
    </div>
    </>
  );
}

export default Courses;
