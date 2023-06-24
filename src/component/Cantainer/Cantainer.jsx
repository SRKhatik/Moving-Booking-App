import React from 'react';
import logo from '../../assets/MBA5.png';
import card1Image from '../../assets/card1.jpg';

const Container = () => {
  return (
    <div className="m-2 mt-5 p-4  rounded-4 d-flex align-items-center justify-content-around" style={{ backgroundImage: `url(${card1Image})`, backgroundSize: 'cover', backgroundPosition: 'bottom' }}>
  
      <div className="text-center text-white ">
        <h1 style={{ fontStyle: 'italic', fontWeight: 'bold',fontWeight:'900' }}>Endless Entertainment Anytime. Anywhere!</h1>
      </div>

      <div className='d-flex align-items-center justify-content-center'>
        <img src={logo} alt="Logo" style={{ width: '150px', height: 'auto' }} />
      </div>
      
    </div>
  );
};

export default Container;






