import React from 'react';

const PageWrapper = ({ children, className = '' }) => {
    return (
        <div className="fixed inset-0 h-dvh w-full bg-white flex justify-center overflow-hidden">
            <div style={{ width: '100%', maxWidth: '380px', height: '100%' }} className={`flex flex-col px-6 py-6 ${className}`}>
                {children}
            </div>
        </div>
    );
};

export default PageWrapper;
