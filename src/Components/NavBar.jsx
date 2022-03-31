import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';


export const NavBar = () => {
    
  return (
    <Navbar className='navbar'  expand="lg">
                <Container fluid className='navbar-container'>
                    <Navbar.Brand href="#" className='col-lg-2'><img src="https://upload.wikimedia.org/wikipedia/commons/d/db/Deezer_logo.svg" alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="#action1" ><h4 className='navbar-option'>Now Playing</h4></Nav.Link>
                            <Nav.Link href="#action2"><h4 className='navbar-option'>Explore</h4></Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Artist or Genre"
                                className="me-2 rounded-pill"
                                aria-label="Search"
                            />
                            <Button variant="outline-success" className='rounded-pill'>Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
  )
}
