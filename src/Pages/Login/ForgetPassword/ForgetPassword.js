import React from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';

const ForgetPassword = () => {
    const { register, handleSubmit, reset } = useForm();
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(auth);

    const resetPassword = async data => {
        const email = data.email

        await sendPasswordResetEmail(email)

        toast.success(`Reset Password Email Sent`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        console.log(email);
        reset()
    };

    console.log(error);
    return (
        <div>
            <h2 className='text-center'>Reset Password</h2>
            <form className='w-50 mx-auto' onSubmit={handleSubmit(resetPassword)}>
                <div className="mb-3 form-check">
                    <input className="form-control" type="email" {...register("email")} placeholder="Email" />
                </div>
                {/* <div className="mb-3 form-check">
                    <input className="form-control" type="password" {...register("password")} placeholder="Password" />
                </div> */}
                <div className="mb-3 form-check">
                    <input className="btn btn-primary" type="submit" />
                </div>
            </form>
        </div>
    );
};

export default ForgetPassword;