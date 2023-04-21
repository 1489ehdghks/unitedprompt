import React from 'react';
import { useNavigate } from 'react-router-dom';
import './mainPageImageSection.css';

const MainPageImageSection = ({ image, description, size }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  return (
    <div className={`image-section ${size}`} onClick={handleClick}>
      <img src={image} alt={description} />
      <div className="image-overlay">
        <div className="image-description">{description}</div>
      </div>
    </div>
  );
};

export default MainPageImageSection;
