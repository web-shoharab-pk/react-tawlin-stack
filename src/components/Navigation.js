import React from 'react';
import content from '../content/index';

const Navigation = () => {
    return (
        <div
            style={{
                background: '#091c29',
            }}
        >
            <div className="flex items-center justify-between w-10/12 mx-auto py-3 text-white font-dosis">
                <h1 className="text-3xl font-bold">SHOHARAB <span className="w-3 h-3 bg-red-500 inline-block rounded-full"></span></h1>
                <div>{content.nav.links.map((link, index) => {
                    return <span className="text-xl mr-4">{link.text}</span>
                })}</div>
            </div>
        </div>
    );
};

export default Navigation;