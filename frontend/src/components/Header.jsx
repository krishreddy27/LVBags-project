import React from 'react'
import { useState } from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import Home from './Home.jsx';
import Mobile from './Mobile';
import '../index.css'
import mainLogo from '../images/mainLogo.png'

const Header = () => {
    const [dropdown, setDrpDown] = useState("");
    if (dropdown.length === 0) {
        setDrpDown("Electronics")
    }

    const handleChange = e => {
        setDrpDown(e.target.value)
        console.log(dropdown);
        console.log("Sending to Home Page");
    }
    return (
        <>
            <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
                <Container>
                    <Navbar.Brand href="/"><img src={mainLogo} alt="Logo" style={{ width: '50px', height: '50px', position: 'absolute', top: '10px', left: '10px' }}/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/seller">Become a Seller</Nav.Link>
                            <NavDropdown onChange={handleChange} id="basic-nav-dropdown" >
                                <NavDropdown.Item href="/furniture" value="Furniture">Furniture</NavDropdown.Item>
                                <NavDropdown.Item value="Mobiles">Mobiles</NavDropdown.Item>
                                <NavDropdown.Item href="watches" value = "Watches">Watches</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="">
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav className='mr-auto'>
                            <Nav.Link href='/cart'><i className='fas fa-shopping-cart'></i>Cart</Nav.Link>
                            <Nav.Link href="/login"><i className='fas fa-user'></i>Signin</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header