import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { IoIosEyeOff, IoIosEye } from "react-icons/io";

import './index.css'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const [isIconShown, setShown] = useState(false);
    const history = useHistory();

    const hideIcon = () => {
        setShown(prev => !prev);
     };
  
     const onChangeEmail = event => {
        setEmail(event.target.value);
        setErrorMsg('');
     };
  
     const onChangePassword = event => {
        setPassword(event.target.value);
        setErrorMsg('');
     };
  
     const clickRegister = () => {
        console.log('register clicked');
        history.push('/signup');
     };  
    
     const clickLoginBtn = async event => {
        event.preventDefault();
    
        if (email === '' || password === '') {
            setErrorMsg('*Fields are required');
            return;
        }
    
        const userInfo = {
            email: email || '',
            password: password || ''
        };
    
        const url = 'https://syoft.dev/Api/userlogin/api/userlogin';
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userInfo)
        };
    
        try {
            const response = await fetch(url, options);
    
            if (response.ok) {
                const storedUserData = localStorage.getItem('userInfo');
    
                if (storedUserData) {
                    const storedUser = JSON.parse(storedUserData);
    
                    if (storedUser.email === email) {
                        if (storedUser.password === password) {
                            localStorage.setItem('loggedIn', 'true');
                            console.log('User logged in successfully');
                            history.push('/');
                        } else {
                            setErrorMsg('Invalid password');
                        }
                    } else {
                        setErrorMsg('User not found');
                    }
                } else {
                    setErrorMsg('User not found');
                }
            } else {
                setErrorMsg('Login failed. Please check your credentials.');
            }
        } catch (error) {
            console.error('Error:', error);
            setErrorMsg('An error occurred. Please try again later.');
        }
    };
    
    
    return (
        <div className='bg-container'>
            <div className='login-card-container'>
                <div className='logo-container'>
                    <h1 className='logo'>Syoft<span className='dot'>.</span></h1>
                    <p className='para'>Your partner in innovative web and mobile app development, delivering custom software solutions for business growth.</p>
                </div>
                <form className='login-card' onSubmit={clickLoginBtn}>
                    <h1 className='heading'>Login</h1>
                    <label className='details'>*Email</label>
                    <input type='email' placeholder='Enter Your Email' value={email} className='login-input' onChange={onChangeEmail} />
                    <label className='details'>*Password</label>
                    {isIconShown ? (
                    <div className='login-password-container'>
                        <input type='text' placeholder='Enter Your Password' value={password} onChange={onChangePassword} className='login-password-input' />
                        <IoIosEye className='password-icon' onClick={hideIcon} />
                    </div>
                    ) : (
                        <div className='password-container'>
                            <input type='password' placeholder='Enter Your Password' value={password} onChange={onChangePassword} className='password-input' />
                            <IoIosEyeOff className='password-icon' onClick={hideIcon} />
                        </div>
                    )}
                    {errorMsg && <p className='error'>{errorMsg}</p>}
                    <button type='submit' className='login-btn'>Login</button>
                    <p className='sign-up-option'>Don't have account?
                    <span className='sign-up-element' onClick={clickRegister}> Register</span></p>
                </form>
            </div>
        </div>
    )
}

export default Login