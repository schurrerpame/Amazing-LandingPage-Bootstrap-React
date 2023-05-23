import React from 'react';
import './Headings.css';

const Headings = ({ title, text }) => {
    return (
        <div className="headings">
            <h3>{title}</h3>
            <p>{text}</p>
        </div>
    )
}

export default Headings