import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to='/'>Shared Soft</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to='/home'>Home</Nav.Link>
                            <Nav.Link as={Link} to='/items'>Items</Nav.Link>
                            <Nav.Link as={Link} to='/manageItems'>Manage Items</Nav.Link>
                            <Nav.Link as={Link} to='/addItem'>Add Item</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">MY Items</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                login
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;