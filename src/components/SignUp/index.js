import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { IoIosEyeOff, IoIosEye } from "react-icons/io";

import './index.css'

const SignUp = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [number, setNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [city, setCity] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const [isIconShown, setShown] = useState(false);
    const history = useHistory();

    const hideIcon1 = () => {
        setShown(prev => !prev);
     };
  
     const onChangeFirstName = event => {
        setFirstName(event.target.value);
        setErrorMsg('');
     };

     const onChangeLastName = event => {
        setLastName(event.target.value);
        setErrorMsg('');
     };

     const onChangeNumber = event => {
        setNumber(event.target.value);
        setErrorMsg('');
     };
  
     const onChangeEmail = event => {
        setEmail(event.target.value);
        setErrorMsg('');
     };
  
     const onChangePassword = event => {
        setPassword(event.target.value);
        setErrorMsg('');
     };

     const onChangeCity = event => {
        setCity(event.target.value);
        setErrorMsg('');
     };

     const onChangeZipCode = event => {
        setZipCode(event.target.value);
        setErrorMsg('');
     };
  
     const clickLogin = () => {
        console.log('Login clicked');
        history.push('/login');
     };

     const clickSignUpBtn = async (event) => {
        event.preventDefault();
    
        if (email === '' || password === '' || firstName === '') {
            setErrorMsg('*Fields are required');
            return;
        }
    
        const userInfo = {
            firstName: firstName || '',
            lastName: lastName || '',
            number: number || '',
            email: email || '',
            password: password || '',
            city: city || '',
            zipCode: zipCode || ''
        };

        const url = 'https://syoft.dev/Api/user_registeration/api/user_registeration';
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
          const storedEmail = JSON.parse(storedUserData);
          if (storedEmail === email) {
            setErrorMsg('User already exists. Please login');
            console.log('User data already exists in localStorage:', storedEmail);
          } else {
            localStorage.setItem('userInfo', JSON.stringify(userInfo));
            localStorage.setItem('loggedIn', 'true');
            console.log('User data has been saved to localStorage');
            history.push('/');
          }
        } 
      } else {
        setErrorMsg('Registration failed');
      }
    } catch (error) {
      console.error('Error:', error);
      setErrorMsg('An error occurred. Please try again later.');
    }
};
   

    return (
        <div className='bg-container'>
            <div className='card-container'>
                <div className='logo-container'>
                    <h1 className='logo'>Syoft<span className='dot'>.</span></h1>
                    <p className='para'>Your partner in innovative web and mobile app development, delivering custom software solutions for business growth.</p>
                </div>
                <form className='signup-card' onSubmit={clickSignUpBtn}>
                    <label className='details'>*Firstname</label>
                    <input type='text' placeholder='Enter Your Firstname' value={firstName} className='login-input' onChange={onChangeFirstName} />
                    <label className='details'>Lastname</label>
                    <input type='text' placeholder='Enter Your Lastname' value={lastName} className='login-input' onChange={onChangeLastName} />
                    <label className='details'>Phone Number</label>
                    <input type='tel' pattern="\d{10}" placeholder='Enter Your Phone.no' value={number} className='login-input' onChange={onChangeNumber} />
                    <label className='details'>*Email</label>
                    <input type='email' placeholder='Enter Your Email' value={email} className='login-input' onChange={onChangeEmail} />
                    <label className='details'>*Password</label>
                    {isIconShown ? (
                    <div className='password-container'>
                        <input type='text' placeholder='Create Your Password' value={password} onChange={onChangePassword} className='password-input' />
                        <IoIosEye className='password-icon' onClick={hideIcon1} />
                    </div>
                    ) : (
                        <div className='password-container'>
                            <input type='password' placeholder='Create Your Password' value={password} onChange={onChangePassword} className='password-input' />
                            <IoIosEyeOff className='password-icon' onClick={hideIcon1} />
                        </div>
                    )}
                    <label className='details'>City</label>
                    <input type='text' placeholder='Enter Your City' value={city} className='login-input' onChange={onChangeCity} />
                    <label className='details'>Zipcode</label>
                    <input type='text' pattern="\d{6}(-\d{4})?"  placeholder='Enter Your Zip Code' value={zipCode} className='login-input' onChange={onChangeZipCode} />
                    {errorMsg && <p className='error'>{errorMsg}</p>}
                    <button type='submit' className='login-btn'>Register</button>
                    <p className='sign-up-option'>Already have account?
                    <span className='sign-up-element' onClick={clickLogin}> Login</span></p>
                </form>
            </div>
        </div>
    )
}

export default SignUp;
