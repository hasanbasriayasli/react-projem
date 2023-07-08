import React from 'react';
import './index.css';
import { FaArrowRight } from 'react-icons/fa';

const GreenButton = ({ text, onClick }) => {
  return (
    <button className="green-button" onClick={onClick}>
      {text} <FaArrowRight className="arrow-icon" />
    </button>
  );
};

export default GreenButton;
