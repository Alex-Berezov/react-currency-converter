import React from 'react';
import { NavLink } from "react-router-dom";
import logo from '../../logo.svg';

import './header.scss';

const Header = () => {
    return (
        <header className="navbar navbar-expand-lg navbar-light bg-info">
            <div className="wrapper container-fluid">
                <div className="header_logo">
                    <img src={logo} alt="logo"/>
                </div>
                <nav>
                    <div>
                        <div className="collapse navbar-collapse" id="navbarExample01">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink 
                                        className="nav-link"
                                        to='/list'
                                        activeClassName={'active'}
                                        >Список валют</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink 
                                        className="nav-link"
                                        to='/converter'
                                        activeClassName={'active'}
                                        >Конвертер</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Header;