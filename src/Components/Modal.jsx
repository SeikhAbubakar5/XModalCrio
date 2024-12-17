import React, { useState, useRef } from 'react';
import Form from './Form';

function Modal() {
  const [openModal, setOpenModal] = useState(false);
  const modalRef = useRef(null);

  const handleOpen = () => {
    setOpenModal(true);
  };

  const handleClose = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setOpenModal(false);
    }
  };

  return (
    <div className="modal">
      <h2>User Details Modal</h2>
      <button onClick={handleOpen} style={buttonStyle}>
        Open Form
      </button>

      {openModal && (
        <div
          className="modal-overlay"
          style={overlayStyle}
          onClick={handleClose} 
        >
          <div className="modal-content" style={modalStyle} ref={modalRef}>
            <Form />
          </div>
        </div>
      )}
    </div>
  );
}


const buttonStyle = {
  padding: '10px 15px',
  backgroundColor: '#007bff',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  marginTop: '20px',
};

const overlayStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1000,
};

const modalStyle = {
  backgroundColor: 'white',
  padding: '20px',
  borderRadius: '8px',
  width: '400px',
  boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.2)',
};

export default Modal;
