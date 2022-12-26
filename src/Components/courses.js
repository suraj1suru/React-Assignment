import React from "react";
import "../App.css";
import JOSNDATA1 from "../MOCK_DATA2.json";
import Navbar from "../navbar";
import Activities from "./Activities";

function Courses() {
  return (
    <>
      <Navbar />
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {JOSNDATA1.map((val) => {
          return <Activities val={val} />;
        })}
      </div>
    </>
  );
}

export default Courses;
