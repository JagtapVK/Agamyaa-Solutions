import React from 'react';
import './Logos.css';
import logo1 from '../images/logo1.png';
import logo2 from '../images/logo2.png';
import logo3 from '../images/logo3.png';
import logo4 from '../images/logo4.png';
import logo5 from '../images/logo5.png';
import logo6 from '../images/logo6.png';
import logo7 from '../images/logo7.png';

const Logos = () => {
  return (
    <div className="logos">
      <div className="logos-slide">
        <img src={logo1} alt="Logo 1" />
        <img src={logo2} alt="Logo 2" />
        <img src={logo3} alt="Logo 3" />
        <img src={logo4} alt="Logo 4" />
        <img src={logo5} alt="Logo 5" />
        <img src={logo6} alt="Logo 6" />
        <img src={logo7} alt="Logo 7" />
      </div>
      <div className="logos-slide">
        <img src={logo1} alt="Logo 1" />
        <img src={logo2} alt="Logo 2" />
        <img src={logo3} alt="Logo 3" />
        <img src={logo4} alt="Logo 4" />
        <img src={logo5} alt="Logo 5" />
        <img src={logo6} alt="Logo 6" />
        <img src={logo7} alt="Logo 7" />
      </div>
    </div>
  );
};

export default Logos;
