import React from 'react';
import { Carousel } from 'react-bootstrap';
import './ImageCarousel.css';

import image1 from '../images/image1.jpg';
import image2 from '../images/image2.jpg';
import image3 from '../images/image3.jpg';

const ImageCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h2>Another Key of Remarketing Strategy is Customer Support</h2>
          <p>For any business, main priority is their customers, and providing them best support is our responsibility. Our team is there for the support of our customers at any time</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h2>Kick-start Your Sales with our Outbound Telecalling Services</h2>
          <p>Our team of Outbound Support provides you the best outsourced services which you'll ever have</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h2>Organizing your back office work and making it easy for you to handle is the motive of our team</h2>
          <p>Our back office team works and handles your records, accounts and IT services, making it easy for you to discover your data thoroughly.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default ImageCarousel;
