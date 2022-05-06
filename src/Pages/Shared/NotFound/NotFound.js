import React from 'react';

const NotFound = () => {
    return (
        <div className='text-center'>
            <h2>Page Not Found</h2>
            <h1>404</h1>
            <svg style={{ width: '60%' }} className="mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        </div>
    );
};

export default NotFound;