/** @format */

import React, { useState, useEffect } from 'react';
import './styles.css';

const Browsehome = () => {
  const [data, setData] = useState([]);
  const [pagesize, setPagesize] = useState(15);
  useEffect(() => {
    fetch('https://run.mocky.io/v3/058dbada-3f7f-46c6-83d2-a3c5575b2c6a')
      .then((res) => res.json())
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <h1 className='browse-text'>Browse Homes</h1>
      <p className='browser-text'>View your Dream Home</p>
      <section id='section-center'>
        <div className='grid-container'>
          {data.slice().map((item, index) => {
            return (
              <div className='grid-item' key={index}>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100%',
                    padding: '15px',
                  }}>
                  <img
                    src={item.photos[0]}
                    style={{
                      width: '23vw',
                      height: '15vw',
                      borderRadius: '10px',
                    }}
                    alt={item.title}
                  />
                  <h3>$ {item.list_price}</h3>
                  <p className='browser-text'>{item.address}</p>
                  <hr></hr>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}>
                    <p className='browser-text'>{item.bedrooms} Beds</p>
                    <p className='browser-text'>{item.bathrooms} Baths</p>
                    <p className='browser-text'>{item.garage_type} Garages</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <button
        style={{
          border: '1px solid #ccc',
          backgroundColor: '#fff',
          borderRadius: '25px',
          height: '45px',
          width: '120px',
          color: '#0061DF',
          marginTop: '20px',
          marginBottom: '20px',
        }}
        className='Viewport'
        onClick={() => setPagesize(pagesize + 15)}>
        View More
      </button>
    </div>
  );
};

export default Browsehome;
