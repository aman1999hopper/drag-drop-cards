import React from 'react';
import '../components/main.css'

const Modal = ({ content, onClose }) => {
  return (
    <div style={{
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      background: 'pink',
      padding: '20px',
      boxShadow: '0px 0px 10px rgba(0,0,0,0.5)',
      zIndex: 1000,
    }}>
      <h3>Detailed Text</h3>
      <p>{content}</p>
      <button className='detail-button' onClick={onClose}>Close</button>
    </div>
  );
};

export default Modal;
