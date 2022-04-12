import React from 'react';
import errorImg from '../../../images/error-img.avif'

const NotFound = () => {
    return (
        <div>
            <h1 className='text-center'>Error 404: Page not found</h1>
            <img className='w-100' src={errorImg} alt="" />
        </div>
    );
};

export default NotFound;