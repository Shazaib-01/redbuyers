/** @format */

import React from 'react';
import LocationIcon from '../../assets/images/locationicon.png';
import Phone from '../../assets/images/phone.png';
import Email from '../../assets/images/email.png';
import Instagram from '../../assets/images/instagram.png';
import Facebook from '../../assets/images/facebook.png';
import Twitter from '../../assets/images/twitter.png';
import Linkedin from '../../assets/images/linkedin.png';
import { padding } from '@mui/system';

const Footer = () => {
  return (
    <section id='footer-article'>
      <div style={{ padding: '100px 150px 50px 150px' }}>
        <div className='footer'>
          <div>
            <b className='footer-title'>BUY & SELL</b>
            <p className='footer-item'>Sell</p>
            <p className='footer-item'>Browse Home</p>
            <p className='footer-item'>Cash Offer</p>
            <p className='footer-item'>Buy</p>
            <p className='footer-item'>New Construction</p>
            <p className='footer-item'>Pricing</p>
            <p className='footer-item'>Down Payment</p>
          </div>
          <div>
            <b className='footer-title'>INVESTMENT</b>
            <p className='footer-item'>Co-Investment</p>
            <p className='footer-item'>Partnership Buying</p>
          </div>
          <div>
            <b className='footer-title'>COMPANY</b>
            <p className='footer-item'>About</p>
            <p className='footer-item'>Contact Us</p>
            <p className='footer-item'>Vendors</p>
            <p className='footer-item'>Careers</p>
            <p className='footer-item'>Privacy Popcy</p>
            <p className='footer-item'>Terms & Conditions</p>
          </div>
          <div>
            <b className='footer-title'>LEARN</b>
            <p className='footer-item'>Seller FAQs</p>
            <p className='footer-item'>Buyer FAQs</p>
            <p className='footer-item'>Blogs</p>
            <p className='footer-item'>Mortgage Calculator</p>
          </div>
          <div>
            <b className='footer-title'>LOCATIONS</b>
            <p className='footer-item'>Greater Toronto Area</p>
            <p className='footer-item'>Region of Peel</p>
            <p className='footer-item'>Region of Hamilton</p>
            <p className='footer-item'>Region of Waterloo</p>
            <p className='footer-item location-link'>View All Locations</p>
            <button className='footer-map-btn'>
              <img src={LocationIcon} />
              <h1 className='footer-map-btn-head'>Map Search</h1>
            </button>
          </div>
        </div>
        <hr style={{ background: '#999', color: '#999' }}></hr>
        <div style={{ marginTop: '20px' }}>
          <b className='footer-title'>CONTACT US</b>
          <div style={{ paddingTop: '15px' }}>
            <img src={Facebook} alt='' id='footer-icon' />
            <img src={Twitter} alt='' id='footer-icon' />
            <img src={Linkedin} alt='' id='footer-icon' />
            <img src={Instagram} alt='' id='footer-icon' />
          </div>
          <div id='footer-flex'>
            <img src={Phone} alt='' />
            <p id='footer-text'>905-567-0200</p>
          </div>
          <div id='footer-flex'>
            <img src={Email} alt='' />
            <p id='footer-text'>info@redbuyers.com</p>
          </div>
          <div id='footer-flex'>
            <p id='footer-copy'>© 2021 redbuyers.com. All rights reserved.</p>
          </div>
          <div id='footer-flex'>
            <p id='footer-ontario'>
              RedBuyers Realty. Brokerage, is fully registered under the Real
              Estate and Business brokerage, Act, 2002 of Ontario.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
