import React from 'react';

import './footer.scss';

const Footer = () => {
    return (
        <footer className="bg-info text-center text-lg-start">
            <div className="text-center p-3">
                © 2021 Copyright:
                <a className="text-dark" href="https://aleber.ru/"> Alex Berezov</a>
            </div>
        </footer>
    );
};

export default Footer;