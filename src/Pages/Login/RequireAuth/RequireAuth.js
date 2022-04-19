import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';

const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();
    const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);
    if (loading) {
        return <Loading></Loading>
    }
    if (!user) {
        return <Navigate to='/login' state={{from: location}} replace></Navigate>
    }


    
 
    if (!user.emailVerified) {
        return <div className='container my-5'>
            <h3 className='text-danger text-center'>Your Email Is Not Varified!!</h3>
            <h3 className='text-success text-center'>Please Varify Your Email Address</h3>
            <button className='btn btn-primary w-100'
            onClick={async () => {
                await sendEmailVerification();
                toast('sent Email');
            }}
            >Send Verification Email</button>
            <ToastContainer></ToastContainer>
        </div>
    }

    return children;
};

export default RequireAuth;