import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div style={{ background: 'red' }}>
            <div className="container footer-info" style={{ color: 'white' }}>
                <div className="row p-3">
                    <div className="col-md-4">
                        <div className="d-flex">
                            <i className="icon fas fa-phone-square-alt"></i> 
                            <p>Toll Free 1800 200 1294</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="d-flex">
                            <i className="icon fab fa-facebook"></i>
                            <p>www.facebook.com/crigroups</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="d-flex">
                        <i className="icon fas fa-globe"></i>
                            <p>www.crigroups.com</p>
                        </div>
                    </div>
                </div>



            </div>
        </div>
    );
};

export default Footer;