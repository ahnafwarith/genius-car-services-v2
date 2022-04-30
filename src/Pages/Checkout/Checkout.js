import React from 'react';
import { useParams } from 'react-router-dom';
import GetServiceDetail from '../../CustomHooks/GetServiceDetail';

const Checkout = () => {
    const { serviceId } = useParams();
    const [service] = GetServiceDetail(serviceId);
    return (
        <div>
            <h1>Place order for:${service.name}</h1>
            <form>
                <input type="text" value="name" placeholder="name" required />
            </form>
        </div>
    );
};

export default Checkout;