// import { async } from '@firebase/util';
import React, { useState } from 'react';
import { Button, Form, Nav } from 'react-bootstrap';
import { useAuthState, useCreateUserWithEmailAndPassword, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../../firebase.init';
import GoogleLogin from '../GoogleLogin/GoogleLogin';

const Register = () => {
    const [passwordMatchError, setPasswordMatchError] = useState('')

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [currentUser, currentUserLoading, currentUserError] = useAuthState(auth);

    // const [sendEmailVerification, sending, verificationError] = useSendEmailVerification(auth);

    const handleCreateUser = async (event) => {
        event.preventDefault()
        const name = event.target.name.value
        const email = event.target.email.value
        const password = event.target.password.value
        const confirmPassword = event.target.confirmPassword.value

        // creates new user
        if (password === confirmPassword) {
            createUserWithEmailAndPassword(email, password)
            setPasswordMatchError('')
            event.target.reset()
            toast.success(`🦄 Welcome to shared soft!
            🦄 verification Email Sent
            `, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } else {
            setPasswordMatchError('two password did not match')
        }
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
                        passwordMatchError && <p className='text-danger'>{passwordMatchError}</p>
                    }
                </Form.Text>
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
                    <Button className='my-2' variant="primary" type="submit">
                        Register
                    </Button>
                </Form.Group>
                <GoogleLogin></GoogleLogin>
            </Form>
        </div>
    );
};

export default Register;