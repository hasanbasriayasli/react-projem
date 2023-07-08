import React, { useState } from 'react';
import './index.css';

const SelectComponent = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="select-container">
      {/* <h2 className="select-title">Seçim Yap</h2> */}
      <select
        className="select-input"
        value={selectedOption}
        onChange={handleSelectChange}
      >
        <option value="">Seçim yapınız</option>
        <option value="option1">Seçenek 1</option>
        <option value="option2">Seçenek 2</option>
        <option value="option3">Seçenek 3</option>
      </select>
      {/* {selectedOption && (
        <p className="selected-option">Seçilen seçenek: {selectedOption}</p>
      )} */}
    </div>
  );
};

export default SelectComponent;
