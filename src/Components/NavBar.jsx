import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { URL } from '../Redux/Constants';
import axios from 'axios';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { fetchMusic } from '../Redux/Action/fetchMusic';
import { useNavigate } from 'react-router';
import { fetchGenre } from '../Redux/Action/fetchGenre';



const initialValues = {
    song: "",
}
export const NavBar = () => {
    const dispatch=useDispatch();
    const navigate= useNavigate();
    const { values, error, handleSubmit, handleChange, resetForm } = useFormik({
        initialValues,
        onSubmit: (values, { resetForm }) => {
            // console.log(values);
            dispatch(fetchMusic(values.song));
            navigate(`/song`);
            resetForm();
        },
    });
    const handleExplore=()=>{
        const genre='country';
        navigate(`/explore`);
        dispatch(fetchGenre(genre));
    }

  return (
    <Navbar className='navbar'  expand="lg" style={{'paddingTop':'0px','paddingBottom':'0px'}}>
                <Container fluid className='navbar-container'>
                    <Navbar.Brand href="/" className='col-lg-2'><img src="https://upload.wikimedia.org/wikipedia/commons/d/db/Deezer_logo.svg" alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link><h4 className='navbar-option' onClick={handleExplore}>Explore</h4></Nav.Link>
                        </Nav>
                        <Form className="d-flex" onSubmit={handleSubmit}>
                            <FormControl
                                type="search"
                                name='song'
                                placeholder="Artist or Genre"
                                className="me-2 rounded-pill"
                                aria-label="Search"
                                value={values.song}
                                onChange={handleChange}
                                required
                            />
                            <Button type='submit' variant="outline-success" className='rounded-pill'>Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
  )
}
