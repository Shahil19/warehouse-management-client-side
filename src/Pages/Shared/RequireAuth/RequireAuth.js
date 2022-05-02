import React from 'react';
import { Spinner } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';

const RequireAuth = ({ children }) => {
    const [currentUser, currentUserLoading] = useAuthState(auth);
    let location = useLocation();

    if (currentUserLoading) {
        return (
            <div className='text-center mt-50'>
                <Spinner animation="grow" />
                <h1>hey hey hey..........</h1>
                <Spinner animation="grow" />
            </div>
        )
    }
    if (!currentUser) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
};

export default RequireAuth;