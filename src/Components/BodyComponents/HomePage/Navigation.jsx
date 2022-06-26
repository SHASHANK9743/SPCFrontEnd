import React from 'react';
import { Navbar, NavDropdown, Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';

export default function 
() {
  return (
    <div style={{alignItems:'stretch'}}>
        <Navbar bg="light" expand="lg" className='mb-3'>
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="flex-grow-1 justify-content-evenly">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">About Us</Nav.Link>
                    <NavDropdown title="E-Learning">
                        <NavDropdown.Item>IIT-JEE/NEET</NavDropdown.Item>
                        <NavDropdown.Item>School Exam Preparation</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#link">Results</Nav.Link>
                    <Nav.Link href="#link">Gallery</Nav.Link>
                    <NavDropdown title="Courses">
                        <NavDropdown.Item>Class VI</NavDropdown.Item>
                        <NavDropdown.Item>Class VII</NavDropdown.Item>
                        <NavDropdown.Item>Class VII</NavDropdown.Item>
                        <NavDropdown.Item>Class VIII</NavDropdown.Item>
                        <NavDropdown.Item>Class IX</NavDropdown.Item>
                        <NavDropdown.Item>Class X</NavDropdown.Item>
                        <NavDropdown.Item>Class XI</NavDropdown.Item>
                        <NavDropdown.Item>Class XII</NavDropdown.Item>
                        <NavDropdown.Item>Yoga & Music</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#link">Downloads</Nav.Link>
                    <Nav.Link href="#link">Contact Us</Nav.Link>
                    <NavDropdown title="Login">
                        <NavDropdown.Item>Student</NavDropdown.Item>
                        <NavDropdown.Item>Faculty</NavDropdown.Item>
                    </NavDropdown>
                    
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
  )
}
