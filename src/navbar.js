import React from "react";
import Container from "react-bootstrap/Container";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const { state } = useLocation();
  let navigate = useNavigate();
  return (
    <div bg="dark" variant="dark" style={{cursor:"pointer"}}>
      <Container>
        <h2
          className="btn2"
          onClick={() => {
            navigate("/dashboard");
          }}
        >
          {state.text}
        </h2>
      </Container>
    </div>
  );
}

export default Navbar;
