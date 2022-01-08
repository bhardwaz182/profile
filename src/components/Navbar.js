import React from 'react';
import '../styles/Navbar.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
const NavbarCustom = () =>{
    return(
        <>
        <div className='sidebar'>
            <ul>
                <li><a href='#profile'>Profile</a></li>
                <li><a href='#experience'>Experience</a></li>
                <li><a href='#abilities'>Abilities</a></li>
                <li><a href='#projects'>Projects</a></li>
                <li><a href='#contact'>Contact</a></li>
            </ul>
        </div>
        <div className='small-nav'>
        <Navbar expand='lg' >
            <Container>
                <Navbar.Brand href="#home">Bhardwaz Reddy</Navbar.Brand>
                <Navbar.Toggle style={{background:'white'}}/>
                <Navbar.Collapse>
                    <Nav>
                        <Nav.Link href="#profile" >Profile</Nav.Link>
                        <Nav.Link href="#experience">Experience</Nav.Link>
                        <Nav.Link href="#abilities">Abilities</Nav.Link>
                        <Nav.Link href="#projects">Projects</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </div>
        </>
    );
}

export default NavbarCustom;