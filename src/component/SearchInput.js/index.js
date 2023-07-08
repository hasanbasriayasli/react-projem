import React from 'react';
import './index.css';
import { AiOutlineSearch } from 'react-icons/ai';

const SearchInput = ({ value, onChange }) => {
  return (
    <div className="search-input-container">
      <AiOutlineSearch className="search-icon" />
      <input
        type="text"
        className="search-input"
        placeholder="Arama yap..."
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default SearchInput;
