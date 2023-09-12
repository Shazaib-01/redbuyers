/** @format */

import React, { useState } from 'react';
import RB from '../../assets/images/Logo.png';
import LocationIcon from '../../assets/images/locationicon.png';
import './styles.css';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Button, Drawer, Radio, Space } from 'antd';
import Browsehome from '../../pages/Browsehome';
import { Link } from 'react-router-dom';

import { Menu } from 'antd';
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

// submenu keys of first level
const rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

const Logo = () => {
  const [openKeys, setOpenKeys] = useState(['sub1']);
  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (latestOpenKey && rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  const [open, setOpen] = React.useState(false);
  const [placement, setPlacement] = React.useState('left');
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const onChange = (e) => {
    setPlacement(e.target.value);
  };

  return (
    <div className='d-flex'>
      <IconButton
        type='primary'
        onClick={showDrawer}
        onChange={onChange}
        size='large'
        edge='start'
        color='white'
        aria-label='open drawer'
        sx={{
          mr: 2,
          display: { xs: 'none', md: 'flex' },
        }}
        style={{
          marginTop: 5,
          left: 10,
          color: '#fff',
        }}>
        <MenuIcon />
      </IconButton>

      <Drawer
        placement={placement}
        closable={false}
        onClose={onClose}
        open={open}
        key={placement}>
        <div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <h3>Menu</h3>
            <h3 style={{ cursor: 'pointer' }} onClick={onClose}>
              X
            </h3>
          </div>
          <div>
            <div style={{ marginTop: '20px' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <h3 className='footer-title'>BUY & SELL</h3>
                <h3 className='footer-title'></h3>
              </div>
              <p className='footer-item'>Sell</p>
              <p className='footer-item'>
                <Link
                  to='/browse'
                  relative='path'
                  style={{ color: '#999' }}
                  onClick={onClose}>
                  Browse Home
                </Link>
              </p>
              <p className='footer-item'>Buy</p>
              <p className='footer-item'>Down Payment</p>
            </div>
            <div style={{ marginTop: '20px' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <h3 className='footer-title'>COMPANY</h3>
                <h3 className='footer-title'></h3>
              </div>
              <p className='footer-item'>About</p>
              <p className='footer-item'>Contact Us</p>
              <p className='footer-item'>Careers</p>
              <p className='footer-item'>Privacy Popcy</p>
              <p className='footer-item'>Terms & Conditions</p>
            </div>
            <div style={{ marginTop: '20px' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <h3 className='footer-title'>LOCATIONS</h3>
                <h3 className='footer-title'></h3>
              </div>
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
        </div>
      </Drawer>

      <img src={RB} alt='redbuyers' id='rb' />
    </div>
  );
};

export default Logo;
