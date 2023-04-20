import React, { useRef, useEffect } from 'react';
import { useInView } from "react-intersection-observer";
import { gsap } from 'gsap';
import './MainPageAnimation2.css';

const MainPageAnimation2 = ({ image, title, content }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
  });

  const titleRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ paused: true });
    tl.from(titleRef.current, { opacity: 0, x: -100, duration: 1 });
    tl.from(contentRef.current, { opacity: 0, x: 100, duration: 1 });

    if (inView) {
      tl.play();
    } else {
      tl.reverse();
    }
  }, [inView]);

  return (
    <section className="animated-section" ref={ref}>
      <div
        className="animated-section-bg"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="animated-section-content">
        <h2 ref={titleRef}>{title}</h2>
        <p ref={contentRef}>{content}</p>
      </div>
    </section>
  );
};

export default MainPageAnimation2;


