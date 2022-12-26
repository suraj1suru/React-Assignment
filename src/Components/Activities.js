import React from "react";
import logo1 from "../Assests/exclamation-circle-fill.svg";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useState } from "react";

function Activities({ val }) {
  const [over, setOver] = useState(true);

  return (
    <div className="course">
      <img className="logo" src={logo1} alt="" />
      <Card>
        <h3>{val.title}</h3>
        <Card.Body>
          <Card.Text>{val.description}</Card.Text>
        </Card.Body>
        <Button
          className="btn-large"
          onClick={() => {
            setOver(false);
          }}
        >
          {over ? "start" : "course is completed"}
        </Button>
      </Card>
    </div>
  );
}

export default Activities;
