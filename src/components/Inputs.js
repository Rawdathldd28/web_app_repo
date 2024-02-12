import React from 'react';

const Inputs = ({ type, text, style, handleSearchChange }) => {
    return (
        <input
            type={type}
            value={text}
            className={style}
            onChange={handleSearchChange}
            placeholder='Search for...'
        />
    );
};

export default Inputs;