import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const { Id } = useParams();
    return (
        <div>
            <h2>Service Details of: {Id}</h2>
            <Link to='/checkout'>
                <button className='btn btn-dark'>Proceed to checkout</button>
            </Link>
        </div>
    );
};

export default ServiceDetails;