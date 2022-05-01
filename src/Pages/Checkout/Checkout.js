import React from 'react';
import { useParams } from 'react-router-dom';
import GetServiceDetail from '../../CustomHooks/GetServiceDetail';

const Checkout = () => {
    const { Id } = useParams();
    const [service] = GetServiceDetail(Id);
    return (
        <div className='w-50 mx-auto'>
            <h1>Place order for: {service.name}</h1>
            <form>
                <input className='w-100 mb-2' type="text" placeholder="name" required />
                <br />
                <input className='w-100 mb-2' type="email" placeholder="email" required />
                <br />
                <input className='w-100 mb-2' value={service.name} type="text" placeholder="service" required />
                <br />
                <input className='w-100 mb-2' type="text" placeholder="address" required />
                <br />
                <input className='w-100 mb-2' type="text" placeholder="phone" required />
                <br />
                <input className='w-100 mb-2' type="submit" value="Place Order" />
            </form>
        </div>
    );
};

export default Checkout;