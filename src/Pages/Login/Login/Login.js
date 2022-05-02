import React from 'react';
import { Button, Form, Nav } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        loginError,
    ] = useSignInWithEmailAndPassword(auth);


    const handleLogin = (event) => {
        event.preventDefault()
        const email = event.target.email.value
        const password = event.target.password.value
        const user = { email, password }
        console.log(user);
        // Login user
        signInWithEmailAndPassword(email, password)
    }

    return (
        <div>
            <div className='w-50 mx-auto'>
                <h2 className='text-center'>Please Login</h2>
                <Form onSubmit={handleLogin}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control name='email' type="email" placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control name='password' type="password" placeholder="Password" required />
                    </Form.Group>
                    <Form.Text className="text-muted">
                        {
                            loginError && <p className='text-danger'>{loginError.message}</p>
                        }
                    </Form.Text>
                    <Form.Text >
                        <Nav.Link className='text-black' as={Link} to='/register'><span>New to shared soft?</span> <span className='text-primary '>Register</span> </Nav.Link>
                    </Form.Text>
                    {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group> */}
                    <Form.Group className="d-grid gap-2">
                        <Button variant="primary" type="submit">
                            Login
                        </Button>
                    </Form.Group>
                </Form>
            </div>
        </div>
    );
};

export default Login;