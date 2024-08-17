import './ServicesSection.css';


import React from 'react';
import ServiceCard from './ServiceCard';
import card1 from '../images/card1.jpg';
import card2 from '../images/card2.jpg';
import card3 from '../images/card3.jpg';
import card4 from '../images/card4.jpg';
import card5 from '../images/card5.jpg';
import card6 from '../images/card6.jpg';


const Services = () => {
  const services = [
    {
      title: 'Call Center Services',
      description: 'Our Customer Service Representatives should be polite, warm, and helpful...',
      imageUrl: card1,
      link: '/services/call-center'
    },
    {
      title: 'Back Office Services',
      description: 'For growing your business you have to maintain the best...',
      imageUrl: card2,
      link: '/services/back-office'
    },
    {
      title: 'FOS Services',
      description: 'For every business it is beneficial when the products are shown manually...',
      imageUrl: card3,
      link: '/services/fos'
    },
    {
      title: 'Inbound Call Center Services',
      description: 'Inbound call center services are the Key to Customer Satisfaction...',
      imageUrl: card4,
      link: '/services/inbound-call-center'
    },
    {
      title: 'Staffing Services',
      description: 'Staffing service is the process in which finding and selecting best fit for everything staff is hired...',
      imageUrl: card5,
      link: '/services/staffing'
    },
    {
      title: 'Video Broadcasting Services',
      description: 'Attracting more consumers for your business is what video broadcasting services do...',
      imageUrl: card6,
      link: '/services/video-broadcasting'
    }
  ];

  return (
    <div className="container">
      <div className="row">
        {services.map(service => (
          <ServiceCard 
            key={service.title} 
            title={service.title} 
            description={service.description} 
            imageUrl={service.imageUrl} 
            link={service.link} 
          />
        ))}
      </div>
    </div>
  );
};

export default Services;