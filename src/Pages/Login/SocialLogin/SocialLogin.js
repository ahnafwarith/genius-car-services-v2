import React from 'react';
import google from '../../../images/Google-logo-design-clipart-PNG.png'
import facebook from '../../../images/facebook.png'
import github from '../../../images/GitHub-Mark.png'
import './SocialLogin.css'
import auth from '../../../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    let errorMessage;
    if (user) {
        navigate('/home');
    }
    if (error) {
        errorMessage = <div>
            <p className='text-danger text-center'>Error: {error.message}</p>
        </div>
    }

    return (
        <div className='w-50 mx-auto'>
            {
                errorMessage
            }
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
                <p className='mt-2 px-2'>Or,</p>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
            </div >
            <div>
                <button
                    onClick={() => signInWithGoogle()}
                    className='btn btn-light w-25 mt-4 buttons d-block mx-auto'><img style={{ width: '30px' }} src={google} alt="" /> Google Sign In</button>
                <button className='btn btn-light w-25 mt-4 buttons d-block mx-auto'><img style={{ width: '30px' }} src={facebook} alt="" /> <span className='ms-1'> Facebook</span></button>
                <button className='btn btn-light w-25 mt-4 buttons d-block mx-auto'><img style={{ width: '30px' }} src={github} alt="" /> Github Sign In</button>
            </div>
        </div>
    );
};

export default SocialLogin;