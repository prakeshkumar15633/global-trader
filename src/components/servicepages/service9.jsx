import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import t7 from '../../assets/Past-Events/pe19.jpeg';
import t8 from '../../assets/Past-Events/pe20.jpeg';
import t9 from '../../assets/Past-Events/pe21.jpeg';
import t10 from '../../assets/Past-Events/pe22.jpeg';
import t11 from '../../assets/Past-Events/pe23.jpeg';
import t12 from '../../assets/Past-Events/pe24.jpeg';
import t1 from '../../assets/Service-9/1.png';
import t2 from '../../assets/Service-9/2.webp';
import t3 from '../../assets/Service-9/3.jpeg';
import t4 from '../../assets/Service-9/4.webp';
import t5 from '../../assets/Service-9/5.jpeg';
import t6 from '../../assets/Service-9/6.png';
import './service1.css'
import { useNavigate } from 'react-router-dom';

function Services() {
    let navigate = useNavigate()
    const [showDetails, setShowDetails] = useState([true, true, true, true, true]);

   
    return (
        <div className="services">
           
            
            <br />
            <h2>Marketing and Publicity</h2>
            <br />
            <br />
            <div className="about-us-container">
                <div className='row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3'>
                <div className="bg-light col mb-4 bg-image hover-overlay hover-zoom shadow-1-strong rounded" style={{ marginRight: '15px', marginBottom: '15px', width: 'calc(33.33% - 15px)' }}>
                        <img src={t1} alt="Service 1 Icon" className="img-fluid rounded-lg mx-auto d-block" style={{ height: '250px', width: '450px' }} />
                        <a href="#!">
                            <div className="mask" style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}></div>
                        </a>
                        <div className="service-info text-center">
                            <h3>Marketing Strategists</h3>
                            <p className='justify'>
                            Providing experienced professionals to develop comprehensive marketing strategies tailored to the goals and target audience of the campaign, utilizing various channels and tactics for maximum impact.
                            </p>
                        </div>
                    </div>
                    <div className="bg-light col mb-4 bg-image hover-overlay hover-zoom shadow-1-strong rounded" style={{ marginRight: '15px', marginBottom: '15px', width: 'calc(33.33% - 15px)' }}>
                        <img src={t2} alt="Service 2 Icon" className="img-fluid rounded-lg mx-auto d-block" style={{ height: '250px', width: '450px' }} />
                        <a href="#!">
                            <div className="mask" style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}></div>
                        </a>
                        <div className="service-info text-center">
                            <h3>Content Creators</h3>
                            <p className='justify'>
                            Offering creative writers, designers, and videographers to produce compelling content such as articles, videos, infographics, and social media posts that resonate with the target audience and convey key messages effectively.
                            </p>
                        </div>
                    </div>
                    <div className="bg-light col mb-4 bg-image hover-overlay hover-zoom shadow-1-strong rounded" style={{ marginRight: '15px', marginBottom: '15px', width: 'calc(33.33% - 15px)' }}>
                        <img src={t3} alt="Service 3 Icon" className="img-fluid rounded-lg mx-auto d-block" style={{ height: '250px', width: '450px' }} />
                        <a href="#!">
                            <div className="mask" style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}></div>
                        </a>
                        <div className="service-info text-center">
                            <h3>Digital Marketers</h3>
                            <p className='justify'>
                            Furnishing experts in digital marketing channels such as social media, search engine optimization (SEO), email marketing, and pay-per-click advertising to optimize online visibility, engagement, and conversion rates.
                            </p>
                        </div>
                    </div>
                    <div className="bg-light col mb-4 bg-image hover-overlay hover-zoom shadow-1-strong rounded" style={{ marginRight: '15px', marginBottom: '15px', width: 'calc(33.33% - 15px)' }}>
                        <img src={t4} alt="Service 4 Icon" className="img-fluid rounded-lg mx-auto d-block" style={{ height: '250px', width: '450px' }} />
                        <a href="#!">
                            <div className="mask" style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}></div>
                        </a>
                        <div className="service-info text-center">
                            <h3> Public Relations Specialists</h3>
                            <p className='justify'>
                            Deploying PR professionals to build and maintain positive relationships with media outlets, influencers, and stakeholders, generating favorable press coverage and managing crisis communications effectively.
                            </p>
                        </div>
                    </div>
                    <div className="bg-light col mb-4 bg-image hover-overlay hover-zoom shadow-1-strong rounded" style={{ marginRight: '15px', marginBottom: '15px', width: 'calc(33.33% - 15px)' }}>
                        <img src={t5} alt="Service 5 Icon" className="img-fluid rounded-lg mx-auto d-block" style={{ height: '250px', width: '450px' }} />
                        <a href="#!">
                            <div className="mask" style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}></div>
                        </a>
                        <div className="service-info text-center">
                            <h3>Event Coordinators</h3>
                            <p className='justify'>
                            Providing event coordinators to organize and execute marketing events, such as product launches, promotional campaigns, trade shows, and experiential activations, to enhance brand visibility and engagement with the target audience.
                            </p>
                        </div>
                    </div>
                    <div className="bg-light col mb-4 bg-image hover-overlay hover-zoom shadow-1-strong rounded" style={{ marginRight: '15px', marginBottom: '15px', width: 'calc(33.33% - 15px)' }}>
                        <img src={t6} alt="Service 6 Icon" className="img-fluid rounded-lg mx-auto d-block" style={{ height: '250px', width: '450px' }} />
                        <a href="#!">
                            <div className="mask" style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}></div>
                        </a>
                        <div className="service-info text-center">
                            <h3>Brand Ambassadors</h3>
                            <p className='justify'>
                            Supplying charismatic brand representatives to engage with consumers in-person or online, promoting brand awareness, driving product trials, and fostering positive brand associations through authentic interactions.
                            </p>
                        </div>
                    </div>
                </div>
                <br />
            <button className='primary-button mx-auto d-block' onClick={() => navigate('/global-trader/contact')}>Get This Service</button>
            <br />
            </div>
        </div>
    );
}

export default Services;
