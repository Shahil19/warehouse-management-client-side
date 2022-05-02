import React from 'react';
import { Button, Form, Nav } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const Register = () => {

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const handleCreateUser = (event) => {
        event.preventDefault()
        const name = event.target.name.value
        const email = event.target.email.value
        const password = event.target.password.value
        const confirmPassword = event.target.confirmPassword.value

        // creates new user
        if (password === confirmPassword) {
            const user = { name, email, password, confirmPassword }
            createUserWithEmailAndPassword(email, password)
            console.log(user);
        }

    }
    if (user) {
        console.log(user);
    }
    return (
        <div>
            <h2 className='text-center'>Please Register</h2>
            <Form onSubmit={handleCreateUser} className='w-50 mx-auto'>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>User Name</Form.Label>
                    <Form.Control name='name' type="text" placeholder="User Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control name='confirmPassword' type="password" placeholder="Confirm Password" />
                </Form.Group>
                <Form.Text className="text-muted">
                    {
                        loading && <p className='text-success'>Loading...</p>
                    }
                </Form.Text>
                <Form.Text className="text-muted">
                    {
                        error && <p className='text-danger'>{error.message}</p>
                    }
                </Form.Text>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Form.Text >
                    <Nav.Link className='text-black' as={Link} to='/login'><span>Already a member of shared soft?</span> <span className='text-primary '>Login</span> </Nav.Link>
                </Form.Text>
                <Form.Group className="d-grid gap-2">
                    <Button variant="primary" type="submit">
                        Register
                    </Button>
                </Form.Group>
            </Form>
        </div>
    );
};

export default Register;