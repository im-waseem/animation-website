// Import React and any other necessary dependencies
import React, { useEffect, useState } from 'react';
import About from '../About/About';
import HomePage2 from './HomePage2';
import HomepageBottom from './HomepageBottom';
import Footer from '../Footer/Footer';
import FooterBottom from '../Footer/FooterBottom';
import ShowcaseSection from './ShowcaseSection';
import CurtinOpenDay from '../Work/CurtinOpenday';
import WorkCard from '../Work/WorkCard';
import TrailsWA from '../Work/TrailsWA';
import FeedItem from '../Blog/FeedItem';

// Define your React component
const HomePage = () => {
  const [animationClass, setAnimationClass] = useState('');

  useEffect(() => {
    // Trigger animation on mount
    setAnimationClass('animate');

    // Cleanup animation class after animation duration
    const animationTimeout = setTimeout(() => {
      setAnimationClass('');
    }, 800); // Adjust the duration (in milliseconds) based on your animation duration

    return () => clearTimeout(animationTimeout);
  }, []);

  return (
    <div className="page_homepage__06uL1">
      <div className={`page_homepage__hero__7HVdw ${animationClass}`}>
        <h1 className="page_homepage__heading__rG9o9">
          <span style={{
            fontSize: 'clamp(8.125rem, 8.5978835979vw, 10.80625rem)',
            margin: '0',
            marginTop: '0px',
            marginRight: '0px',
            marginBottom: '0px',
            marginLeft: '0px',
            paddingTop: 'clamp(3.125rem, 3.3068783069vw, 4.15625rem)',
            paddingBottom: 'clamp(3.125rem, 3.3068783069vw, 4.15625rem)',
            maxWidth: 'clamp(68.75rem, 72.7513227513vw, 91.4375rem)',
            lineHeight: '.92',
          }}>
            <span className="bold-letter">E</span>
            <span className="bold-letter">x</span>
            <span className="bold-letter">t</span>
            <span className="bold-letter">r</span>
            <span className="bold-letter">a</span>
            <span className="bold-letter">o</span>
            <span className="bold-letter">r</span>
            <span className="bold-letter">d</span>
            <span className="bold-letter">i</span>
            <span className="bold-letter">n</span>
            <span className="bold-letter">a</span>
            <span className="bold-letter">r</span>
            <span className="bold-letter">y</span>
            <span> </span>
            <span className="bold-letter">D</span>
            <span className="bold-letter">i</span>
            <span className="bold-letter">g</span>
            <span className="bold-letter">i</span>
            <span className="bold-letter">t</span>
            <span className="bold-letter">a</span>
            <span className="bold-letter">l</span>
            <span> </span>
            <span className="bold-letter">E</span>
            <span className="bold-letter">x</span>
            <span className="bold-letter">p</span>
            <span className="bold-letter">e</span>
            <span className="bold-letter">r</span>
            <span className="bold-letter">i</span>
            <span className="bold-letter">e</span>
            <span className="bold-letter">n</span>
            <span className="bold-letter">c</span>
            <span className="bold-letter">e</span>
            <span className="bold-letter">s</span>
          </span>
        </h1>
      </div>
      <HomePage2 />
 
      <ShowcaseSection />
      <CurtinOpenDay/>
  <WorkCard />
  <TrailsWA/>
 

      <HomepageBottom/>
      <FeedItem />
     
      <Footer />
      <FooterBottom />
    
    
    </div>
  );
};

export default HomePage;
