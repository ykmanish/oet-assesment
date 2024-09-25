'use client'
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AOSComponent = ({ children, animationType, duration, easing }) => {
  useEffect(() => {
    AOS.init({ duration, easing, once: false });
  }, [duration, easing]);

  return (
    <div data-aos={animationType}>
      {children}
    </div>
  );
};

export default AOSComponent;