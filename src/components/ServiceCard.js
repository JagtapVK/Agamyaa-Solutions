import React from 'react';
import { useNavigate } from 'react-router-dom';
// import './ServicesSection.css';

const ServiceCard = ({ title, description, imageUrl, link }) => {
  const navigate = useNavigate();

  return (
    <div className="col-md-4">
      <div className="card" onClick={() => navigate(link)} style={{ cursor: 'pointer' }}>
        <img src={imageUrl} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
