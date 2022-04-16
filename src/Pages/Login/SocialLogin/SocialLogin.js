import React from 'react';

const SocialLogin = () => {
    return (
        <div className='w-50 mx-auto'>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
                <p className='mt-2 px-2'>Or</p>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
            </div >
            <div>
                <button className='btn btn-primary w-25 mt-4'>Google Sign In</button>
            </div>
        </div>
    );
};

export default SocialLogin;