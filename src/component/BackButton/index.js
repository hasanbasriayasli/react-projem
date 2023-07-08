import React from 'react';
import './index.css';
import { FaArrowLeft } from 'react-icons/fa';

const BackButton = ({ onClick }) => {
  return (
    <button className="back-button" onClick={onClick}>
      <FaArrowLeft className="back-icon" />
      Geri Dön
    </button>
  );
};

export default BackButton;
