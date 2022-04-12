import React from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const { Id } = useParams();
    return (
        <div>
            <h2>Service Details of: {Id}</h2>
        </div>
    );
};

export default ServiceDetails;