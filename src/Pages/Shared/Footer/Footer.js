import React from 'react';

const Footer = () => {
    const today = new Date()
    const year = today.getFullYear();

    return (
        <div>
            <p>All rights reserved || &copy;Shahil {year}</p>
        </div>
    );
};

export default Footer;