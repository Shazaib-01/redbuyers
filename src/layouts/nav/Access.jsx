/** @format */

import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const Access = () => {
  const { loginWithRedirect, isAuthenticated, isLoading, logout } = useAuth0();
  return (
    <div className='access'>
      <div>
        {
          isAuthenticated ? <h1 className='btn-register' onClick={() => logout({ returnTo: window.location.origin })}>
          <Link
            to='/login'
            relative='path'
            style={{ color: '#FFF', textDecorationLine: 'none' }}>
               LogOut
            </Link>
         </h1> : 
        <h1 className='btn-login' onClick={() => loginWithRedirect()}>
          <Link
            to='/login'
            relative='path'
            style={{ color: '#FFF', textDecorationLine: 'none' }}>
            Login
          </Link>
        </h1>
        }
        
      </div>
      <div className='btn-r'>
        <h1 className='btn-register'>Register</h1>
      </div>
    </div>
  );
};

export default Access;
