/** @format */

import React from 'react';
import './styles.css';

const Menu = () => {
  return (
    <section id='menu'>
      <nav id='navbar'>
        <ul className='nav-link'>
          <li className='nav-link-active'>Sell</li>
          <div className='indicator' />

          <li className='nav-link-buy'>Buy</li>
          <div className='indicator1' />
          <li className='nav-link-contact'>Contact Us</li>
          <div className='indicator2' />
        </ul>
      </nav>
    </section>
  );
};

export default Menu;
