import React from 'react';
import { Link, useParams } from 'react-router-dom';
import GetServiceDetail from '../../CustomHooks/GetServiceDetail';

const ServiceDetails = () => {
    const { Id } = useParams();
    const [service] = GetServiceDetail(Id);
    return (
        <div>
            <h2>Service Details of: {service.name}</h2>
            <Link to={`/checkout/${Id}`}>
                <button className='btn btn-dark'>Proceed to checkout</button>
            </Link>
        </div>
    );
};

export default ServiceDetails;