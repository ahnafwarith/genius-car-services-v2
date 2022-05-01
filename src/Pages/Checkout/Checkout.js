import React from 'react';
import { useParams } from 'react-router-dom';
import GetServiceDetail from '../../CustomHooks/GetServiceDetail';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import axios from 'axios';
import { toast } from 'react-toastify';

// const auth = getAuth(app);

const Checkout = () => {
    const { Id } = useParams();
    const [service] = GetServiceDetail(Id);
    const [user] = useAuthState(auth);
    const handleFormSubmit = (e) => {
        e.preventDefault()
        const order = {
            email: user.email,
            service: service.name,
            serviceId: Id,
            address: e.target.address.value,
            phone: e.target.phone.value
        }
        axios.post('http://localhost:5000/order', order).then(response => {
            const { data } = response
            if (data.insertedId) {
                toast("Your order has been placed!")
                e.target.reset()
            }
        })
    }
    return (
        <div className='w-50 mx-auto'>
            <h1>Place order for: {service.name}</h1>
            <form onSubmit={handleFormSubmit}>
                <input className='w-100 mb-2' value={user?.displayName} type="text" placeholder="name" required disabled />
                <br />
                <input className='w-100 mb-2' value={user?.email} type="email" placeholder="email" required disabled />
                <br />
                <input className='w-100 mb-2' value={service.name} type="text" placeholder="service" required />
                <br />
                <input className='w-100 mb-2' type="text" name='address' placeholder="address" required />
                <br />
                <input className='w-100 mb-2' type="text" name='phone' placeholder="phone" required />
                <br />
                <input className='w-100 mb-2' type="submit" value="Place Order" />
            </form>
        </div>
    );
};

export default Checkout;