import React from 'react';
import preloader from '../../Iphone-spinner-2.gif';

import './preloader.scss';

const Preloader = () => {
    return (
        <div className="preloader">
            <img src={preloader} alt="Preloader"/>
        </div>
    );
};

export default Preloader;