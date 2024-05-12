import React, { useState } from 'react';
import { Container, Row, Col, Modal } from 'react-bootstrap';
import './Gallery.css'; // Import CSS file for styling
import img1 from '../../assets/Past-Events/pe1.jpeg';
import img4 from '../../assets/Past-Events/pe4.jpeg';
import img7 from '../../assets/Past-Events/pe7.jpeg';
import img11 from '../../assets/Past-Events/pe11.jpeg';
import img12 from '../../assets/Past-Events/pe12.jpeg';
import img14 from '../../assets/Past-Events/pe14.jpeg';
import img15 from '../../assets/Past-Events/pe15.jpeg';
import img16 from '../../assets/Past-Events/pe16.jpeg';
import img17 from '../../assets/Past-Events/pe17.jpeg';
import img18 from '../../assets/Past-Events/pe18.jpeg';
import img19 from '../../assets/Past-Events/pe19.jpeg';
import img20 from '../../assets/Past-Events/pe20.jpeg';
import img25 from '../../assets/Past-Events/pe25.jpeg';
import img29 from '../../assets/Past-Events/pe29.jpeg';
import img30 from '../../assets/Past-Events/pe30.jpeg';
import img31 from '../../assets/Past-Events/pe31.jpeg';
import img32 from '../../assets/Past-Events/pe32.jpeg';
import img34 from '../../assets/Past-Events/pe34.jpeg';
import img35 from '../../assets/Past-Events/pe35.jpeg';
import img36 from '../../assets/Past-Events/pe36.jpeg';
import img37 from '../../assets/Past-Events/pe37.jpeg';
import img38 from '../../assets/Past-Events/pe38.jpeg';
import img39 from '../../assets/Past-Events/pe39.jpeg';
import img40 from '../../assets/Past-Events/pe18.jpeg';

function Gallery() {
    const [showModal, setShowModal] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    const images = [
        img1,
        img4,
        img7,
        img11,
        img12,
        img14,
        img15,
        img16,
        img17,
        img18,
        img19,
        img20,
        img25,
        img29,
        img30,
        img31,
        img32,
        img34,
        img35,
        img36,
        img37,
        img38,
        img39,
        img40
    ];

    const handleClick = (index) => {
        setSelectedImageIndex(index);
        setShowModal(true);
    };

    const handleNext = () => {
        setSelectedImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    const handlePrev = () => {
        setSelectedImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    return (
        <div>
            <div className="home-hero gallery mb-3">
                <div className="home-container01 galleryContainer" style={{backgroundColor:'rgb(0,0,0,0) !important'}}>
                    <h1 className="home-hero-heading heading1 text-center" style={{paddingTop:'200px'}}>Gallery</h1>
                </div>
            </div>
            <Container>
                <Row>
                    {images.map((imageUrl, index) => (
                        <Col key={index} xs={6} md={4} lg={3}>
                            <div className="image-container" onClick={() => handleClick(index)}>
                                <img src={imageUrl} alt={`Image ${index}`} className="img-fluid" />
                                <p>Title</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro magnam iusto fugiat voluptatem earum molestiae dolorem temporibus, nobis dolorum commodi?</p>
                            </div>
                        </Col>
                    ))}
                </Row>

                {/* Modal to display clicked image */}
                <Modal show={showModal} onHide={() => setShowModal(false)} dialogClassName="custom-modal">
                    <Modal.Body>
                        <div className="modal-image">
                            <img src={images[selectedImageIndex]} alt={`Image ${selectedImageIndex}`} className="img-fluid" />
                            <button className="arrow arrow-prev" onClick={handlePrev}>&#10094;</button>
                            <button className="arrow arrow-next" onClick={handleNext}>&#10095;</button>
                        </div>
                    </Modal.Body>
                </Modal>
            </Container>
        </div>
    );
};

export default Gallery;