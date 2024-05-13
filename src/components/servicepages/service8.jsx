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
import t1 from '../../assets/Service-8/1.jpeg';
import t2 from '../../assets/Service-8/2.jpeg';
import t3 from '../../assets/Service-8/3.jpeg';
import t4 from '../../assets/Service-8/4.webp';
import t5 from '../../assets/Service-8/5.jpeg';
import t6 from '../../assets/Service-8/6.jpeg';
import './service1.css'
import { useNavigate } from 'react-router-dom';

function Services() {
  let navigate = useNavigate()
  const [showDetails, setShowDetails] = useState([true, true, true, true, true]);

 
  return (
    <div className="services">
      
      <br />
      <h2>Event Organization</h2>
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
              <h3>Event Planners</h3>
              <p className='justify'>
              Providing skilled professionals to conceptualize, design, and execute events of varying scales and purposes, ensuring that client objectives are met and attendees have a memorable experience.
              </p>
            </div>
          </div>
          <div className="bg-light col mb-4 bg-image hover-overlay hover-zoom shadow-1-strong rounded" style={{ marginRight: '15px', marginBottom: '15px', width: 'calc(33.33% - 15px)' }}>
            <img src={t2} alt="Service 2 Icon" className="img-fluid rounded-lg mx-auto d-block" style={{ height: '250px', width: '450px' }} />
            <a href="#!">
              <div className="mask" style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}></div>
            </a>
            <div className="service-info text-center">
              <h3>Creative Team</h3>
              <p className='justify'>
              Furnishing creative professionals such as designers, decorators, and stylists to conceptualize and implement themes, decorations, and visual elements that enhance the ambiance and atmosphere of the event.
              </p>
            </div>
          </div>
          <div className="bg-light col mb-4 bg-image hover-overlay hover-zoom shadow-1-strong rounded" style={{ marginRight: '15px', marginBottom: '15px', width: 'calc(33.33% - 15px)' }}>
            <img src={t3} alt="Service 3 Icon" className="img-fluid rounded-lg mx-auto d-block" style={{ height: '250px', width: '450px' }} />
            <a href="#!">
              <div className="mask" style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}></div>
            </a>
            <div className="service-info text-center">
              <h3>Technical Support</h3>
              <p className='justify'>
              Supplying technicians and AV specialists to set up and manage audio-visual equipment, lighting, staging, and other technical aspects of the event, ensuring seamless execution of presentations, performances, and entertainment.
              </p>
            </div>
          </div>
          <div className="bg-light col mb-4 bg-image hover-overlay hover-zoom shadow-1-strong rounded" style={{ marginRight: '15px', marginBottom: '15px', width: 'calc(33.33% - 15px)' }}>
            <img src={t4} alt="Service 4 Icon" className="img-fluid rounded-lg mx-auto d-block" style={{ height: '250px', width: '450px' }} />
            <a href="#!">
              <div className="mask" style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}></div>
            </a>
            <div className="service-info text-center">
              <h3>Entertainment Personnel</h3>
              <p className='justify'>
              Providing entertainers, performers, DJs, and MCs to engage and entertain attendees, creating memorable moments and enhancing the overall enjoyment of the event.
              </p>
            </div>
          </div>
          <div className="bg-light col mb-4 bg-image hover-overlay hover-zoom shadow-1-strong rounded" style={{ marginRight: '15px', marginBottom: '15px', width: 'calc(33.33% - 15px)' }}>
            <img src={t5} alt="Service 5 Icon" className="img-fluid rounded-lg mx-auto d-block" style={{ height: '250px', width: '450px' }} />
            <a href="#!">
              <div className="mask" style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}></div>
            </a>
            <div className="service-info text-center">
              <h3>Security Team</h3>
              <p className='justify'>
              Furnishing trained security personnel to maintain a safe and secure environment for all attendees, speakers, performers, and VIP guests, preventing disruptions and ensuring the smooth flow of the event.
              </p>
            </div>
          </div>
          <div className="bg-light col mb-4 bg-image hover-overlay hover-zoom shadow-1-strong rounded" style={{ marginRight: '15px', marginBottom: '15px', width: 'calc(33.33% - 15px)' }}>
            <img src={t6} alt="Service 6 Icon" className="img-fluid rounded-lg mx-auto d-block" style={{ height: '250px', width: '450px' }} />
            <a href="#!">
              <div className="mask" style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}></div>
            </a>
            <div className="service-info text-center">
              <h3>On-site Management</h3>
              <p className='justify'>
              Offering experienced event managers and coordinators to oversee all aspects of event execution, including timeline management, vendor coordination, attendee satisfaction, and issue resolution, ensuring the event runs seamlessly from start to finish.
              </p>
            </div>
          </div>
        </div>
        <br/>
            <button className='primary-button mx-auto d-block' onClick={() => navigate('/global-trader/contact')}>Get This Service</button>
            <br />
      </div>
    </div>
  );
}

export default Services;
