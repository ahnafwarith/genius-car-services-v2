import React, { useEffect, useState } from 'react';
import GetServices from '../../../CustomHooks/GetServices';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {

    const [services, setServices] = GetServices();

    return (
        <div className='container' id='services'>
            <div className="row">
                <h1 className='text-dark text-center mt-5'>Our Services</h1>
                <div className="services-container">
                    {
                        services.map(service => <Service
                            key={service._id}
                            service={service}
                        >
                        </Service>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;