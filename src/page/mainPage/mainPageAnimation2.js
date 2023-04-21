import React, { useState } from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import './MainPageAnimation2.css';

const MainPageAnimation2 = ({ image, title, content }) => {
  const [isVisible, setIsVisible] = useState(false);

  const onChange = (visible) => {
    if (visible) {
      setIsVisible(true);
    }
  };

  return (
    <section className="MainPageAnimation2">
      <VisibilitySensor onChange={onChange}>
        <div
          className={`MainPageAnimation2-bg ${isVisible ? 'visible' : ''}`}
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      </VisibilitySensor>
      <div className={`MainPageAnimation2-content ${isVisible ? 'visible' : ''}`}>
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
    </section>
  );
};

export default MainPageAnimation2;
