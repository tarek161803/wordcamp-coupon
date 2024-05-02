import React from 'react';
import headerBanner from '../assets/images/header.png';

const Header = () => {
    return (
        <div className="fixed flex justify-center items-center top-0 left-0 right-0">
            <img className="h-16 w-full" src={headerBanner} alt="banner" />
        </div>
    );
};

export default Header;
