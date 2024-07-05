import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
function Head({ details }) {
  return (
    <>
      <Navbar style={{ backgroundColor: "#afc5ff" ,color:"black"}}>
        <Container>
          <Navbar.Brand href="#home">SharyFi</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Consumer</Nav.Link>
            <Nav.Link href="#pricing">Business</Nav.Link>
            <Nav.Link href="#features">Company</Nav.Link>
            <Nav.Link href="#pricing">Career</Nav.Link>
          </Nav>
        </Container>
          {details.employeename ? (
            <>
            <AccountCircleIcon/>
            <Nav>
              <Nav.Link href="#profile">{details.employeename}</Nav.Link>
            </Nav>
            </>
          ) : (
            <></>
          )}
      </Navbar>
    </>
  );
}

export default Head;
