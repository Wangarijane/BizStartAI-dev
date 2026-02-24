import React from 'react';

const PrimaryButton = ({ onClick, children, className = '', disabled = false, style = {} }) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            style={{
                boxShadow: '0px 1px 4px 0px rgba(0, 0, 0, 0.40)',
                textShadow: '0px 1px 4px rgba(0, 0, 0, 0.40)',
                ...style
            }}
            className={`w-full bg-primary text-white py-3.5 rounded-xl font-medium font-sans text-base transition-all active:scale-[0.98] cursor-pointer border-none disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
        >
            {children}
        </button>
    );
};

export default PrimaryButton;
