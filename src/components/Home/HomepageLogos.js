import React, { useState, useEffect } from 'react';
import logo1 from '../Home/logos/Alert_logic_logo_PNG5.png';
import logo2 from '../Home/logos/Apple_logo_PNG11.png';
import logo3 from '../Home/logos/Docker_logo_PNG2.png';
import logo4 from '../Home/logos/Nike_logo_PNG18.png';
import logo5 from '../Home/logos/Sony_logo_PNG4.png';
import logo6 from '../Home/logos/Xiaomi_logo_PNG4.png';

const HomepageLogos = () => {
  const [visibleLogos, setVisibleLogos] = useState([true, true, true, false, false, false]);

  useEffect(() => {
    // Set up interval to toggle visibility every 0.5 seconds
    const intervalId = setInterval(() => {
      setVisibleLogos((prevVisibleLogos) => {
        const newVisibleLogos = [...prevVisibleLogos];
        newVisibleLogos.push(newVisibleLogos.shift());
        return newVisibleLogos;
      });
    }, 500);

    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="HomepageLogos_homepage-logos__76775" style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', height: '150px' }}>
      {visibleLogos.map((isVisible, index) => (
        <img
          key={index}
          className={isVisible ? 'visible' : 'hidden'}
          src={index === 0 ? logo1 : index === 1 ? logo2 : index === 2 ? logo3 : index === 3 ? logo4 : index === 4 ? logo5 : logo6}
          alt={`Logo ${index + 1}`}
          style={{
            width: '180px',
            height: '120px',
            transition: 'opacity 1s ease-in-out, transform 5s ease-in-out',
            borderRadius: '20%',
            filter: 'brightness(80%)',
          }}
        />
      ))}
    </div>
  );
};

export default HomepageLogos;
