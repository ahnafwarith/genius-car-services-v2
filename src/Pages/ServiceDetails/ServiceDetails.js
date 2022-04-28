import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const { Id } = useParams();
    const url = `http://localhost:5000/service/${Id}`
    const [service, setService] = useState({});
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data))
    }, []);
    return (
        <div>
            <h2>Service Details of: {service.name}</h2>
            <Link to='/checkout'>
                <button className='btn btn-dark'>Proceed to checkout</button>
            </Link>
        </div>
    );
};

export default ServiceDetails;