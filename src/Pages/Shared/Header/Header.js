import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const Header = () => {
    const [currentUser] = useAuthState(auth);

    const handleLogout = () => {
        signOut(auth)
    }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to='/'>Shared Soft</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to='/home'>Home</Nav.Link>
                            <Nav.Link as={Link} to='/inventory'>Products</Nav.Link>

                            <Nav.Link as={Link} to='/manageItems'>Manage Product</Nav.Link>
                            <Nav.Link as={Link} to='/addItem'>Add Product</Nav.Link>
                        </Nav>
                        <Nav>
                            {
                                currentUser && <Nav.Link href="#deets">MY Products</Nav.Link>
                            }
                            {
                                currentUser ? <Button onClick={handleLogout}>Logout</Button> : <Nav.Link as={Link} to='/login'>login</Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;