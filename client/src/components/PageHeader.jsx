import React from 'react';
import likeIcon from '../assets/images/like_icon.png';
import logo from '../assets/images/logo.png';
import logoWhite from '../assets/images/logo_white.png';

const PageHeader = ({ title = '', subTitle = '', social = false }) => {
    return (
        <div className="flex flex-col items-center">
            <div className="relative bg-white h-40 w-40 flex justify-center items-center rounded-full">
                <div
                    className={`h-32 w-32  rounded-full flex justify-center items-center ${
                        social ? 'bg-blue-500' : 'bg-gray-50'
                    }`}
                >
                    <img
                        className="w-24"
                        src={social ? logoWhite : logo}
                        alt="logo"
                    />
                </div>
                {social && (
                    <div className="absolute bottom-3 right-3 w-10 h-10 flex justify-center items-center rounded-full bg-white">
                        <div className="flex justify-center items-center bg-blue-500 w-8 h-8 rounded-full">
                            <img
                                className="w-4"
                                src={likeIcon}
                                alt="like icon"
                            />
                        </div>
                    </div>
                )}
            </div>
            <div className="text-center">
                <h1
                    className={`${
                        social ? 'text-2xl' : 'text-xl'
                    } font-bold text-gray-800 mb-2`}
                    dangerouslySetInnerHTML={{ __html: title }}
                />
                <p
                    className="text-gray-500"
                    dangerouslySetInnerHTML={{ __html: subTitle }}
                />
            </div>
        </div>
    );
};

export default PageHeader;
