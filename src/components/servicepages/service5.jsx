import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import t7 from '../../assets/Past-Events/pe25.jpeg';
import t8 from '../../assets/Past-Events/pe26.jpeg';
import t9 from '../../assets/Past-Events/pe27.jpeg';
import t10 from '../../assets/Past-Events/pe28.jpeg';
import t11 from '../../assets/Past-Events/pe29.jpeg';
import t12 from '../../assets/Past-Events/pe30.jpeg';
import t1 from '../../assets/Service-5/1.jpg';
import t2 from '../../assets/Service-5/2.jpg';
import t3 from '../../assets/Service-5/3.jpeg';
import t4 from '../../assets/Service-5/4.jpeg';
import t5 from '../../assets/Service-5/5.jpeg';
import t6 from '../../assets/Service-5/6.jpg';
import './service1.css'
import { useNavigate } from 'react-router-dom';

function Services() {
  let navigate = useNavigate()
  const [showDetails, setShowDetails] = useState([true, true, true, true, true]);

  return (
    <div className="services">
     
      <br />
      <h2>Installation & Activation</h2>
      <br />
      <br />
      <div className="about-us-container">
        <div className='row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3'>
          <div className="col mb-4 bg-image hover-overlay hover-zoom shadow-1-strong rounded">
            <img src={t1} alt="Service 1 Icon" className="img-fluid rounded-lg mx-auto d-block" style={{ height: '250px', width: '450px' }} />
            <a href="#!">
              <div className="mask" style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}></div>
            </a>
            <div className="service-info text-center">
              <h3>Stage Setup</h3>
              <p className='justify'>
              Designing and installing stages tailored to the event's requirements, including platforms, backdrops, and lighting. 
              </p>
            </div>
          </div>
          <div className="col mb-4 bg-image hover-overlay hover-zoom shadow-1-strong rounded">
            <img src={t2} alt="Service 2 Icon" className="img-fluid rounded-lg mx-auto d-block" style={{ height: '250px', width: '450px' }} />
            <a href="#!">
              <div className="mask" style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}></div>
            </a>
            <div className="service-info text-center">
              <h3>Lighting and Sound</h3>
              <p className='justify'>
              Providing professional lighting and sound system installation for clear audio delivery and immersive event experiences. 
              </p>
            </div>
          </div>
          <div className="col mb-4 bg-image hover-overlay hover-zoom shadow-1-strong rounded">
            <img src={t3} alt="Service 3 Icon" className="img-fluid rounded-lg mx-auto d-block" style={{ height: '250px', width: '450px' }} />
            <a href="#!">
              <div className="mask" style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}></div>
            </a>
            <div className="service-info text-center">
              <h3>Décor and Theming</h3>
              <p className='justify'>
              Creating event décor and theming elements that align with the event's concept and branding. 
              </p>
            </div>
          </div>
          <div className="col mb-4 bg-image hover-overlay hover-zoom shadow-1-strong rounded">
            <img src={t4} alt="Service 4 Icon" className="img-fluid rounded-lg mx-auto d-block" style={{ height: '250px', width: '450px' }} />
            <a href="#!">
              <div className="mask" style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}></div>
            </a>
            <div className="service-info text-center">
              <h3>Signage and Wayfinding</h3>
              <p className='justify'>
              Installing directional signage and wayfinding elements to guide attendees and enhance navigation within the event venue. 
              </p>
            </div>
          </div>
          <div className="col mb-4 bg-image hover-overlay hover-zoom shadow-1-strong rounded">
            <img src={t5} alt="Service 5 Icon" className="img-fluid rounded-lg mx-auto d-block" style={{ height: '250px', width: '450px' }} />
            <a href="#!">
              <div className="mask" style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}></div>
            </a>
            <div className="service-info text-center">
              <h3>Seating Arrangement</h3>
              <p className='justify'>
              Setting up seating arrangements according to event requirements, ensuring comfort and visibility for attendees. 
              </p>
            </div>
          </div>
          <div className="col mb-4 bg-image hover-overlay hover-zoom shadow-1-strong rounded">
            <img src={t6} alt="Service 6 Icon" className="img-fluid rounded-lg mx-auto d-block" style={{ height: '250px', width: '450px' }} />
            <a href="#!">
              <div className="mask" style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}></div>
            </a>
            <div className="service-info text-center">
              <h3>Exhibit Booths</h3>
              <p className='justify'>
              Designing and installing exhibit booths for showcasing products, services, and promotional materials during the event. 
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
