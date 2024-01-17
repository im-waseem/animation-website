// Import React and any other necessary dependencies
import React, { useEffect, useState } from 'react';
import HomePage2 from './HomePage2';
import HomepageBottom from './HomepageBottom';
import Footer from '../Footer/Footer';
import FooterBottom from '../Footer/FooterBottom';
import ShowcaseSection from './ShowcaseSection';
import CurtinOpenDay from '../Work/CurtinOpenday';
import WorkCard from '../Work/WorkCard';
import TrailsWA from '../Work/TrailsWA';
import FeedItem from '../Navbar/FeedItem';

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
        <h1 className="page_homepage__heading__rG9o9 animate-heading">
          <span className="bold-letter">
            <span>E</span>
            <span>x</span>
            <span>t</span>
            <span>r</span>
            <span>a</span>
            <span>o</span>
            <span>r</span>
            <span>d</span>
            <span>i</span>
            <span>n</span>
            <span>a</span>
            <span>r</span>
            <span>y</span>
            <span> </span>
            <span>D</span>
            <span>i</span>
            <span>g</span>
            <span>i</span>
            <span>t</span>
            <span>a</span>
            <span>l</span>
            <span> </span>
            <span>E</span>
            <span>x</span>
            <span>p</span>
            <span>e</span>
            <span>r</span>
            <span>i</span>
            <span>e</span>
            <span>n</span>
            <span>c</span>
            <span>e</span>
            <span>s</span>
          </span>
        </h1>
      </div>
      <FeedItem />
      <HomePage2 />
      <ShowcaseSection />
      <CurtinOpenDay />
      <WorkCard />
      <TrailsWA />
      <HomepageBottom />
      <Footer />
      <FooterBottom />
    </div>
  );
};

export default HomePage;
