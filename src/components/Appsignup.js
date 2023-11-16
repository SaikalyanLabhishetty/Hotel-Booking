import React, { Fragment, useState } from 'react'
import Appheader from './Appheader'
import "./Appsignup.css"
import Appfooter from './Appfooter';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Appsignup = () => {
    const [mode, setMode] = useState('signup');
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      phoneNumber: '',
      password: '',
      confirmPassword: '',
    });
    const [showPassword, setShowPassword] = useState(false);
  
    const togglePassword = () => {
      setShowPassword(!showPassword);
    };
  
    const toggleMode = () => {
      setMode((prevMode) => (prevMode === 'signup' ? 'login' : 'signup'));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
     
      console.log('Form submitted:', formData);
    };
  
    return (
      <div>
        <Appheader/>
        <div className='sign-up'>
          <h3>Sign in or create an account</h3>
          <button className='sign-in' onClick={toggleMode}>
            Sign-in
          </button>
          <button className='login' onClick={toggleMode}>
            Login
          </button>
          <br />
          <form className='form' onSubmit={handleSubmit}>
            {mode === 'signup' && (
              <Fragment>
                <input
                  type='text'
                  placeholder='name'
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
                <br />
                <input
                  type='email'
                  placeholder='email'
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
                <br />
                <input
                  type='tel'
                  placeholder='Phone Number'
                  value={formData.phoneNumber}
                  onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                />
                <br />
                <div className='password-input-container'>
                    <input
                        type={showPassword ? 'text' : 'password'}
                        placeholder='password'
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    />
                    <button
                        type='button'
                        className='password-toggle-btn'
                        onClick={togglePassword}
                        style={{color:"white",border:"transparent"}}
                    >
                        {showPassword ? <FaEye /> : <FaEyeSlash />}
                    </button>
                </div>
                <br />
                <input
                  type='password'
                  placeholder='confirm password'
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                />
              </Fragment>
            )}
            {mode === 'login' && (
              <Fragment>
                <input
                  type='email'
                  placeholder='email'
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
                <br />
                <div className='password-input-container'>
                    <input
                        type={showPassword ? 'text' : 'password'}
                        placeholder='password'
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    />
                    <button
                        type='button'
                        className='password-toggle-btn'
                        onClick={togglePassword}
                        style={{color:"white",border:"transparent"}}
                    >
                        {showPassword ? <FaEye /> : <FaEyeSlash />}
                    </button>
                </div>
              </Fragment>
            )}
            <br />
            <button className='form-btn' type='submit'>
              Submit
            </button>
          </form>
        </div>
        <Appfooter/>
      </div>
    );
  };
  
export default Appsignup
