import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import t7 from '../../assets/Past-Events/pe7.jpeg';
import t8 from '../../assets/Past-Events/pe8.jpeg';
import t9 from '../../assets/Past-Events/pe9.jpeg';
import t10 from '../../assets/Past-Events/pe10.jpeg';
import t11 from '../../assets/Past-Events/pe11.jpeg';
import t12 from '../../assets/Past-Events/pe12.jpeg';
import t1 from '../../assets/Service-2/1.png';
import t2 from '../../assets/Service-2/2.png';
import t3 from '../../assets/Service-2/3.jpg';
import t4 from '../../assets/Service-2/4.png';
import t5 from '../../assets/Service-2/5.jpeg';
import t6 from '../../assets/Service-2/6.jpeg';
import './service1.css'
import { useNavigate } from 'react-router-dom';

function Services() {
    let navigate = useNavigate()
    const [showDetails, setShowDetails] = useState([true, true, true, true, true]);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
    };
    return (
        <div className="services">


            <br />
            <h2 className="fs-1">Brand Promotion</h2>
            <br />
            <p className="justify">
                At Global Trader, we understand the importance of effective brand promotion in today's competitive market. Our comprehensive brand promotion services are designed to elevate your brand's visibility, engagement, and reputation. Through strategic marketing campaigns, engaging content creation, targeted advertising, and impactful social media strategies, we ensure that your brand stands out and resonates with your target audience. From building brand awareness to fostering brand loyalty, we work tirelessly to enhance your brand's presence across various channels and touchpoints. With Global Trader, your brand will not only capture attention but also leave a lasting impression in the minds of consumers, driving growth and success for your business.
            </p>
            <br />
            <div className="about-us-container">
                <div className='row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3'>
                    <div className="bg-light col bg-image hover-overlay hover-zoom shadow-1-strong border border-1 p-3">
                        <img src={t1} alt="Service 1 Icon" className="img-fluid rounded-3 mx-auto d-block" style={{ height: '250px', width: '450px' }} />
                        <a href="#!">
                            <div className="mask" style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}></div>
                        </a>
                        <div className="service-info text-center">
                            <h3>Social Media Campaigns</h3>
                            <p className='justify'>
                                Launch targeted social media campaigns across platforms to create buzz and interact with your audience.
                            </p>
                        </div>
                    </div>
                    <div className="bg-light col bg-image hover-overlay hover-zoom shadow-1-strong border border-1 p-3">
                        <img src={t6} alt="Service 6 Icon" className="img-fluid rounded-3 mx-auto d-block" style={{ height: '250px', width: '450px' }} />
                        <a href="#!">
                            <div className="mask" style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}></div>
                        </a>
                        <div className="service-info text-center">
                            <h3>Content Marketing</h3>
                            <p className='justify'>
                                Develop and distribute high-quality content related to event planning tips and industry trends.
                            </p>
                        </div>
                    </div>
                    <div className="bg-light col bg-image hover-overlay hover-zoom shadow-1-strong border border-1 p-3">
                        <img src={t2} alt="Service 2 Icon" className="img-fluid rounded-3 mx-auto d-block" style={{ height: '250px', width: '450px' }} />
                        <a href="#!">
                            <div className="mask" style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}></div>
                        </a>
                        <div className="service-info text-center">
                            <h3>Email Newsletters</h3>
                            <p className='justify'>
                                Build and nurture a subscriber list for regular updates about upcoming events and special promotions.
                            </p>
                        </div>
                    </div>
                    <div className="bg-light col bg-image hover-overlay hover-zoom shadow-1-strong border border-1 p-3">
                        <img src={t3} alt="Service 3 Icon" className="img-fluid rounded-3 mx-auto d-block" style={{ height: '250px', width: '450px' }} />
                        <a href="#!">
                            <div className="mask" style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}></div>
                        </a>
                        <div className="service-info text-center">
                            <h3>Influencer Partnerships</h3>
                            <p className='justify'>
                                Collaborate with influencers to endorse your events and reach a broader audience.
                            </p>
                        </div>
                    </div>
                    <div className="bg-light col bg-image hover-overlay hover-zoom shadow-1-strong border border-1 p-3">
                        <img src={t4} alt="Service 4 Icon" className="img-fluid rounded-3 mx-auto d-block" style={{ height: '250px', width: '450px' }} />
                        <a href="#!">
                            <div className="mask" style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}></div>
                        </a>
                        <div className="service-info text-center">
                            <h3>Event Sponsorships</h3>
                            <p className='justify'>
                                Secure sponsorships for your events to enhance visibility through logo placement and co-branded promotions.
                            </p>
                        </div>
                    </div>
                    <div className="bg-light col bg-image hover-overlay hover-zoom shadow-1-strong border border-1 p-3">
                        <img src={t5} alt="Service 5 Icon" className="img-fluid rounded-3 mx-auto d-block" style={{ height: '250px', width: '450px' }} />
                        <a href="#!">
                            <div className="mask" style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}></div>
                        </a>
                        <div className="service-info text-center">
                            <h3>Community Engagement</h3>
                            <p className='justify'>
                                Connect with your local community through participation in community events and sponsorship of charitable initiatives.
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
