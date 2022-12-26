import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import JSONDATA from '../MOCK_DATA1.json'
import '../App.css';
import StarRating from "./rating";


import {  useNavigate } from 'react-router-dom';

function Dashboard() {
    let navigate = useNavigate();
  return (
    <div  style={{ display: 'flex', flexWrap: 'wrap' }} >
      {JSONDATA.map((val) => {
      return (
        
      <Card className="pos" style={{ width: "26rem" ,  flex: '1 1 1  33%' }}>
       
        <Card.Body>
          <h4>{val.title}</h4>
          <Card.Text>Start Date :{val.startDate}</Card.Text>
          <Card.Text>End Date :{val.endDate}</Card.Text>

          <h5>Description</h5>
          <p>
           {val.description}
          </p>
          <StarRating />
          <Button className="colorrr" onClick={()=> {navigate("/courses", { state: {text: val.title } })}}>start</Button>
        </Card.Body>
        
      </Card>
      
      )
})}
    </div>
  );
}

export default Dashboard;

// 