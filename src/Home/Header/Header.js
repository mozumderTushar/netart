import React from 'react';
import logo from '../../images/logo.png'

const Header = () => {
    return (
        <div className="d-flex justify-content-center">
            <img  className="img-fluid w-50" src={logo} alt=""/>
        </div>
    );
};

export default Header;