import React from 'react';

const MainFeatures = () => {
    return (
        <div className='container'>
            <h2 className='text-center my-3'>Top Notch Features</h2>
            <div className="row row-cols-1 row-cols-md-3 g-4 text-center">
                <div className="col">
                    <div style={{ background: '#ffffee' }} className="card">
                        <svg style={{ height: '100px' }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.933 12.8a1 1 0 000-1.6L6.6 7.2A1 1 0 005 8v8a1 1 0 001.6.8l5.333-4zM19.933 12.8a1 1 0 000-1.6l-5.333-4A1 1 0 0013 8v8a1 1 0 001.6.8l5.333-4z" />
                        </svg>
                        <div className="card-body">
                            <h5 className="card-title">EXTRA FAST DELIVERY</h5>
                            <p className="card-text">You do not need to click on the "Update" button every time you add the product quantity. All will be automatically updated</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div style={{ background: '#ffffee' }} className="card">
                        <svg style={{ height: '100px' }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                        <div className="card-body">
                            <h5 className="card-title">POWERFUL MEGA MENU</h5>
                            <p className="card-text">Create advanced submenu to show more than just a categories. Multi-level dropdowns: It allows you to create multi-levels of a submenu. </p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div style={{ background: '#ffffee' }} className="card">
                        <svg style={{ height: '100px' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z" clipRule="evenodd" />
                            <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z" />
                        </svg>
                        <div className="card-body">
                            <h5 className="card-title">RTL READY</h5>
                            <p className="card-text">Some languages of the world are RTL, meaning they are read right-to-left, instead of left-to-right. Our theme supports RTL for all layouts</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainFeatures; <h2>Main Features</h2>