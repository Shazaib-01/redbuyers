/** @format */

import React from 'react';
import './styles.css';
import HomeImg from '../assets/images/Hero.png';
import Location from '../assets/images/Icon.png';
import House from '../assets/images/House.jpg';
import emote from '../assets/images/emotehome.png';
import homeOffer from '../assets/images/Image.png';
import User from '../assets/images/Username.png';
import Charm from '../assets/images/charmtick.png';

const Home = () => {
  return (
    <div>
      <section id='home_section'>
        <div id='d_flex'>
          <div id='heading'>
            <h1 id='header_font'>
              Get an Instant Offer<br></br> and sell your home
            </h1>
            <form action='' id='home_input'>
              <input type='hidden' name='' id='input-type' />
              <div id='search'>
                <img src={Location} alt='map' id='icon' />
                <input
                  type='text'
                  id='search_input'
                  placeholder="Where's your house?"
                  autoComplete='off'
                />
                <div className='btn_primary' type='button'>
                  Get my free offer
                </div>
              </div>
            </form>
            <p className='para'>
              Recive an offer within 24 hours, it's that simple!
            </p>
          </div>
          <div>
            <img src={HomeImg} alt='home' id='home_img' />
          </div>
        </div>
      </section>
      <main id='mains'>
        <section id='home_work'>
          <div className='container'>
            <div className='row'>
              <div className='text-center' style={{ position: 'relative' }}>
                <img src={House} alt='emotehouse' className='evotes' />
                <img src={emote} alt='emotehome' className='evotes-home' />
              </div>
              <h2 id='Letsee'>
                <b>Let’s See How it Works</b>
              </h2>
              <p className='work-text'>
                Here’s how we make it easier to sell your home
              </p>
            </div>
          </div>
          <div className='mt-5'>
            <div className='work_img'>
              <img src={homeOffer} alt='offer' id='align' />
            </div>
            <div id='step-allignment'>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <div style={{ marginRight: '20px', marginTop: '20px' }}>
                  <div className='checkbox'>
                    <img src={Charm} alt='tick' width={15} height={15} />
                  </div>
                  <div className='dash-line'></div>
                </div>
                <div>
                  <p id='Steps'>STEP 1</p>
                  <h3 id='Step1'>REQUEST FOR AN OFFER</h3>
                  <p id='Steps'>
                    Fill in your property details and<br></br> get an instant
                    preliminary home value.
                  </p>
                </div>
              </div>
              <div style={{ display: 'flex' }}>
                <div style={{ marginRight: '20px', marginTop: '20px' }}>
                  <div className='checkbox'>
                    <img src={Charm} alt='tick' width={15} height={15} />
                  </div>
                  <div className='dash-line'></div>
                </div>
                <div>
                  <p id='Steps'>STEP 2</p>
                  <h3 id='Step1'>SCHEDULE AN APPOINTMENT</h3>
                  <p id='Steps'>
                    Show us your home in-person or virtually<br></br> and get
                    our offer with in 24 hours of the appointment.
                  </p>
                </div>
              </div>
              <div style={{ display: 'flex' }}>
                <div style={{ marginRight: '20px', marginTop: '20px' }}>
                  <div className='checkbox'>
                    <img src={Charm} alt='tick' width={15} height={15} />
                  </div>
                </div>
                <div>
                  <p id='Steps'>STEP 3</p>
                  <h3 id='Step1'>SELL YOUR HOUSE</h3>
                  <p id='Steps'>
                    Have complete control over your decision.<br></br>Either
                    accept our offer or list with us.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='customer-review-section'>
          <h1>Don't take our word for it.</h1>
          <h1>Take Theirs...</h1>
          <p>Listen to what our customers have to say.</p>
          <div
            style={{
              display: 'flex',
              width: '100%',
              alignItems: 'center',
              marginTop: '50px',
            }}>
            {[1, 2, 3].map((data, index) => {
              return (
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                    height: '100%',
                    padding: '20px',
                    borderRadius: '10px',
                    boxShadow: '0px 0px 5px 0px #ccc',
                    margin: '10px',
                  }}
                  key={index}>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                  <div
                    style={{
                      display: 'flex',
                      width: '100%',
                      justifyContent: 'flex-start',
                      alignItems: 'center',
                      marginTop: '10px',
                    }}>
                    <img
                      alt='line'
                      src={User}
                      style={{
                        width: '50px',
                        height: '50px',
                        borderRadius: '25px',
                        backgroundColor: '#e3e3e3',
                        marginRight: '10px',
                      }}
                    />
                    <div>
                      <h3 style={{ color: '#0061DF' }}>Gurvir Sohal</h3>
                      <p>Toronto</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
        <section
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '50px',
          }}>
          <div id='boxed'>
            <h3>Enter your home details and</h3>
            <h1 style={{ color: '#0061DF', padding: '10px' }}>
              Get an instant offer
            </h1>
            <p>Within 24 hours!</p>
            <div id='search' style={{ width: '40vw', margin: '50px' }}>
              <div className='search_input1'>
                <img src={Location} alt='map' id='icon' />
                <input
                  type='text'
                  id='search_input2'
                  placeholder="Where's your house?"
                  autoComplete='off'
                />
                <div className='btn_primary1' type='button'>
                  Get my free offer
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
