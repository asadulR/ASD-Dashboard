import React from 'react';

const Button = ({ bgColor, color, text, borderRadius, size, href }) => {
    return (
        <button
            type='button'
            style={{ backgroundColor: bgColor, color: color, borderRadius }}
            className={`text-${size} p-3 hover:drop-shadow-xl`}
        >

            <a href={href} target="_blank" rel="noopener noreferrer">{text}</a>

        </button>
    );
};

export default Button;