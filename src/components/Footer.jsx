// src/components/Footer.js

import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-6 mt-5">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-between items-center"> 
                    <div className="w-full mt-4 md:mt-0 text-center">
                        <p className="text-lg">&copy; 2024 Debashis Mohapatra All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
