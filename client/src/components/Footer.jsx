import React from 'react';
import sponsor from '../assets/images/sponsor.png';

const Footer = () => {
    return (
        <div className="px-12 bg-white z-20 py-4 fixed flex justify-center items-center bottom-0 left-0 right-0">
            <img className="h-10" src={sponsor} alt="sponsor" />
        </div>
    );
};

export default Footer;
