import React, { useState, useEffect } from 'react';

const Footer = () => {
  const words = ["epic", "fun", "delightful", "beautiful", "original", "extraordinary", "engaging", "click", "wonderful"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000); // Change word every 2 seconds

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [currentWordIndex]);

  return (
    <footer className="Footer_footer__GQa1y" style={{ color: 'var(--theme-secondary)', transition: 'color .4s', transitionBehavior: 'normal', transitionDuration: '0.4s', transitionTimingFunction: 'ease', transitionDelay: '0s', transitionProperty: 'color', maxHeight: '100vh', zIndex: '0', backgroundColor: '#fff' }}>
      <div className="Footer_footer__sticky-inner__m5LLE" style={{ transform: 'none' }}>
        <h2 className="Footer_footer__heading__8h65q">
          <a className="Footer_footer__heading-link__v415t" href="/contact">
            <span>Let’s make </span>
            <br />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="13"
              fill="none"
              stroke-width="0.5"
              viewBox="0 0 14 13"
              className="Footer_arrow__kw0yI"
              style={{ '--width': 14, '--height': 13 }}
            >
              <path
                fill="currentColor"
                stroke="currentColor"
                d="M1 5.816H.75v1.326h10.014l-4.008 3.907-.173.168.162.179.563.62.174.191.186-.18 5.506-5.37.184-.178-.184-.18L7.668.932l-.186-.18-.174.191-.563.62-.162.178.173.169 4.008 3.907H1Z"
                vector-effect="non-scaling-stroke"
              ></path>
            </svg>
            <span className="Footer_footer__word-ticker-wrapper__UUW_n">
              something{' '}
              <span className="WordTicker_word-ticker__2HQ3j" style={{ opacity: 1 }}>
                {words.map((word, index) => (
                  <span key={index} style={{ opacity: index === currentWordIndex ? 1 : 0, transform: 'translateY(0%) translateZ(0px)' }}>
                    {word}
                  </span>
                ))}
              </span>
            </span>
          </a>
        </h2>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="289"
          height="311"
          fill="none"
          viewBox="0 0 289 311"
          className="Footer_face__88tuY"
          style={{ '--width': 289, '--height': 311 }}
        >
          <path fill="currentColor" fill-rule="evenodd" d="M137.188 169.585c15.584 0 28.264-12.681 28.264-28.265V56.528C165.452 25.358 190.81 0 221.981 0c31.17 0 56.528 25.358 56.528 56.528h-28.264c0-15.584-12.681-28.264-28.264-28.264-15.584 0-28.264 12.68-28.264 28.264v84.792c0 31.171-25.358 56.529-56.529 56.529-31.17 0-56.528-25.358-56.528-56.529h28.264c0 15.584 12.681 28.265 28.264 28.265Zm122.764-.002h28.264c0 77.925-63.396 141.321-141.321 141.321V282.64c62.339 0 113.057-50.716 113.057-113.057ZM19.986 4.137 0 24.123l32.404 32.405L0 88.93l19.986 19.986 32.405-32.402 32.401 32.402 19.986-19.986-32.404-32.402 32.404-32.404L84.792 4.137 52.391 36.542 19.986 4.137Z" clip-rule="evenodd"></path>
        </svg>
        <div className="Footer_footer__ballpit-wrapper__S6heb">
          <canvas className="BallPit_ballpit__Lo9o0" width="2568" height="2026" data-pixel-ratio="2" style={{ width: '1284px', height: '1013px', background: '0% 0% / contain transparent' }}></canvas>
        </div>
        <div className="Footer_footer__sticky-inner__m5LLE" style={{ transform: 'none' }}>
          <div className="FooterRevealPageWrap_footer-scroll-twin__tn7UN"></div>
          <div className="FooterSimpleContents_footer-columns__lcGTG footer-columns">
            <div className="FooterSimpleContents_footer-columns__column__28cg0">
              <h3>Speak to us</h3>
              <a href="tel:1800%20486%20123">+917022831935</a>
              <a href="mailto:contact@humaan.com">waseemakram060396@gmail.com</a>
            </div>
            <div className="FooterSimpleContents_footer-columns__column__28cg0 FooterSimpleContents_footer-columns__column--address__Rjvwg">
              <h3>Perth</h3>
              <address>470 William St, Perth, WA 6000</address>
            </div>
            <div className="FooterSimpleContents_footer-columns__column__28cg0 FooterSimpleContents_footer-columns__column--address__Rjvwg">
              <h3>Melbourne</h3>
              <address>23/10-20 Gwynne St, Cremorne, VIC 3121</address>
            </div>
            <div className="FooterSimpleContents_footer-columns__column__28cg0 FooterSimpleContents_footer-columns__column--address__Rjvwg">
              <h3>Sydney</h3>
              <address>35/285A Crown St, Surry Hills, NSW 2010</address>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
