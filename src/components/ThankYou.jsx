import React from 'react';

const ThankYou = () => {
  return (
    <div 
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        textAlign: 'center',
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#f4f4f4',
        color: '#333'
      }}
    >
      <h1 style={{ color: '#4CAF50', fontSize: '36px', marginBottom: '20px' }}>
        Thank You Sir/Mam
      </h1>
      <h2 style={{ color: '#555', fontSize: '24px', marginBottom: '20px' }}>
        Your booking is confirmed, Happy Playing
      </h2>
      <p style={{ fontSize: '16px' }}>
        Feel free to <a href="/" style={{ textDecoration: 'none', color: '#4CAF50', fontWeight: 'bold' }}>return to the homepage</a>.
      </p>
    </div>
  );
}

export default ThankYou;
