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
                <input type="text" value="name" placeholder="name" required />
                <br />
                <input type="text" value="name" placeholder="name" required />
                <br />
                <input type="text" value="name" placeholder="name" required />
                <br />
                <input type="text" value="name" placeholder="name" required />
                <br />
                <input type="text" value="name" placeholder="name" required />
                <br />
                <input type="submit" value="Place Order" />
            </form>
        </div>
    );
};

export default Checkout;