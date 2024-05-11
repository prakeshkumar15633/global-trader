import React from 'react';
import logo from "../../assets/logo.png";
import { FaWhatsapp } from 'react-icons/fa';
import { SiLinkedin, SiYoutube, SiFacebook } from "react-icons/si";
import "./Footer.css"; // Import CSS file for styling
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='mt-3' id="footer">
            <div className="container">
                <div className="row text-white">
                    <div className="col-lg-3">
                        <h2>Services</h2>
                        <div className="separator"></div>
                        <Link to='/global-trader/service8'>
                            <p className='text-white'>
                                Events Organisation
                            </p>
                        </Link>
                        <Link to='/global-trader/service2'>
                            <p className='text-white'>
                                Brand Promotion
                            </p>
                        </Link>
                        <Link to='/global-trader/service6'>
                            <p className='text-white'>
                                Installation and Activation
                            </p>
                        </Link>
                        <Link to='/global-trader/service4'>
                            <p className='text-white'>
                                Corporate Activity
                            </p>
                        </Link>
                        <Link to='/global-trader/service1'>
                            <p className='text-white'>
                                Road Show
                            </p>
                        </Link>
                        <Link to='/global-trader/service5'>
                            <p className='text-white'>
                                Product Launch
                            </p>
                        </Link>
                        <Link to='/global-trader/service7'>
                            <p className='text-white'>
                                Manpower and Artist Coordination
                            </p>
                        </Link>
                        <Link to='/global-trader/service9'>
                            <p className='text-white'>
                                Marketing and Publicity
                            </p>
                        </Link>
                        <Link to='/global-trader/service3'>
                            <p className='text-white'>
                                Cantervan Indoor / Outdoor
                            </p>
                        </Link>
                    </div>
                    <div className="col-lg-3">
                        <h2>Company</h2>
                        <div className="separator"></div>
                        <Link to='/global-trader/aboutus'><p className='text-white'>About Us</p></Link>
                        <p>Our Team</p>

                    </div>
                    <div className="col-lg-3 text-white">
                        <h2>Resources</h2>
                        <div className="separator"></div>
                        <p>Blog</p>
                        <p>Newsroom</p>

                    </div>
                    <div className="col-lg-3 text-white">
                        <h2>Contact Us</h2>
                        <div className="separator"></div>
                        <div className="social-media">
                            <a href="https://wa.me/918939169177" target="_blank" rel="noopener noreferrer" className="whatsapp-icon" style={{color:'#23ca62'}}>
                                <FaWhatsapp />
                            </a>

                        </div>
                        <h6><img src={logo} alt="EnviGo Logo" style={{ width: '150px', height: '150px' }} /></h6>

                        <p> chennai chennai chennai chennai, <br /> chennai chennai chennai chennai,A</p>
                    </div>
                </div>

                <div className="footer-copyright">
                    <div className="row">
                        <div className="col-sm-24 col-md-24 col-lg-24 footer-copyright">
                            <p className='text-white'>&copy; 2024 Global Traders Pvt. Ltd. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
