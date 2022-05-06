import React from 'react';
import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const GoogleLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const signIn = () => {
        signInWithGoogle()
    }

    return (
        <div className='container'>
            <div className='d-flex justify-content-center align-items-center'>
                <div style={{ height: '1px', width: '30%', backgroundColor: 'gray' }}></div>
                <div className='mx-2'>Or</div>
                <div style={{ height: '1px', width: '30%', backgroundColor: 'gray' }}></div>
            </div>
            <button onClick={() => signIn()} className='btn btn-primary w-2/4 d-block mx-auto my-2'>Sign in with Google</button>
        </div>
    );
};

export default GoogleLogin;