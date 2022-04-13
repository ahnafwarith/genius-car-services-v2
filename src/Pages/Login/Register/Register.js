import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css'

const Register = () => {
    const navigate = useNavigate();
    const handleRegisterFromRegister = () => {
        navigate('/login')
    }
    const handleRegister = (e) => {
        e.preventDefault();
        console.log(e.target.email.value)
    }
    return (
        <div className='register-form'>
            <h1 style={{ textAlign: 'center' }}>The Registration Page</h1>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" id="" placeholder='Your name' />
                <input type="email" name="email" id="" placeholder='Your email address' required />
                <input type="password" name="password" id="" placeholder='password' required />
                <input type="submit" value="Register" />
            </form>
            <p>Already Have an Account? <Link to='/login' className='text-danger text-decoration-none pe-auto' onClick={handleRegisterFromRegister}>Login</Link></p>
        </div>
    );
};

export default Register;