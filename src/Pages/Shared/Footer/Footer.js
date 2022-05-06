import React from 'react';

const Footer = () => {
    const today = new Date()
    const year = today.getFullYear();

    return (
        <div style={{ background: "#efefef", padding: '20px' }} className='text-center ' >
            <p style={{ margin: '0' }}>All rights reserved || &copy;Shahil {year}</p>
        </div>
    );
};

export default Footer;