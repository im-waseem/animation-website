import React, { useState, useEffect } from 'react';
import './Showcase.css';
import HomepageLogos from './HomepageLogos';

const ShowcaseSection = () => {
  const [backgroundColor, setBackgroundColor] = useState('#B488F1');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const viewportHeight = window.innerHeight;
      const maxScroll = document.body.scrollHeight - viewportHeight;

      // Calculate a value between 0 and 1 based on scroll progress
      const scrollProgress = scrollPosition / maxScroll;

      // Interpolate the background color
      const newBackgroundColor = `rgba(180, 136, 241, ${scrollProgress})`;
      setBackgroundColor(newBackgroundColor);
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Detach the event listener when the component is unmounted
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="page_showcase__LVgh4" style={{ background: backgroundColor, transition: 'background 0.3s',marginTop: "10px",borderRadius: '190px',padding: '10px',color: 'red' }}>
     
      <h2 className="page_showcase__heading__0aQHD" style={{color:'080127'}}>
        <span className="TextAnimateUp_word__Yvn5A" style={{ display: 'inline-block', whiteSpace: 'pre', transform: 'translate3d(0px, 0%, 0px)', animation: '0.8s cubic-bezier(0, 0.55, 0.45, 1) 0s 1 normal forwards running TextAnimateUp_mask-down__TzvI8' }}>
          <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}>W</span>
          <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}>e</span>
          <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}> </span>
        </span>
        <span className="TextAnimateUp_word__Yvn5A" style={{ display: 'inline-block', whiteSpace: 'pre', transform: 'translate3d(0px, 0%, 0px)', animation: '0.8s cubic-bezier(0, 0.55, 0.45, 1) 0s 1 normal forwards running TextAnimateUp_mask-down__TzvI8' }}>
          <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}>d</span>
          <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}>e</span>
          <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}>s</span>
          <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}>i</span>
          <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}>g</span>
          <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}>n</span>
          <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}>,</span>
          <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}> </span>
        </span>
        <span className="TextAnimateUp_word__Yvn5A" style={{ display: 'inline-block', whiteSpace: 'pre', transform: 'translate3d(0px, 0%, 0px)', animation: '0.8s cubic-bezier(0, 0.55, 0.45, 1) 0s 1 normal forwards running TextAnimateUp_mask-down__TzvI8' }}>
  <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}>b</span>
  <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}>u</span>
  <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}>i</span>
  <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}>l</span>
  <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}>d</span>
  <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}> </span>
</span>
<span className="TextAnimateUp_word__Yvn5A" style={{ display: 'inline-block', whiteSpace: 'pre', transform: 'translate3d(0px, 0%, 0px)', animation: '0.8s cubic-bezier(0, 0.55, 0.45, 1) 0s 1 normal forwards running TextAnimateUp_mask-down__TzvI8' }}>
  <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}>a</span>
  <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}>n</span>
  <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}>d</span>
  <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}> </span>
</span>
<span className="TextAnimateUp_word__Yvn5A" style={{ display: 'inline-block', whiteSpace: 'pre', transform: 'translate3d(0px, 0%, 0px)', animation: '0.8s cubic-bezier(0, 0.55, 0.45, 1) 0s 1 normal forwards running TextAnimateUp_mask-down__TzvI8' }}>
  <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}>s</span>
  <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}>h</span>
  <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}>i</span>
  <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}>p</span>
  <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}> </span>
</span>
<span className="TextAnimateUp_word__Yvn5A" style={{ display: 'inline-block', whiteSpace: 'pre', transform: 'translate3d(0px, 0%, 0px)', animation: '0.8s cubic-bezier(0, 0.55, 0.45, 1) 0s 1 normal forwards running TextAnimateUp_mask-down__TzvI8' }}>
  <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}>w</span>
  <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}>o</span>
  <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}>r</span>
  <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}>l</span>
  <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}>d</span>
  <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}>-</span>
  <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}>c</span>
  <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}>l</span>
  <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}>a</span>
  <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}>s</span>
  <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}>s</span>
  <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}> </span>
</span>
<span className="TextAnimateUp_word__Yvn5A" style={{ display: 'inline-block', whiteSpace: 'pre', transform: 'translate3d(0px, 0%, 0px)', animation: '0.8s cubic-bezier(0, 0.55, 0.45, 1) 0s 1 normal forwards running TextAnimateUp_mask-down__TzvI8' }}>
  <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}>d</span>
  <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}>i</span>
  <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}>g</span>
  <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}>i</span>
  <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}>t</span>
  <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}>a</span>
  <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}>l</span>
  <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}> </span>
</span>


        {/* Continue adding spans as needed */}
      </h2>
      <h2 className="page_showcase__heading__0aQHD" style={{ lineHeight: '1',marginTop: '-90px',color: '080127' }}>
      <span className="TextAnimateUp_word__Yvn5A" style={{ display: 'inline-block', whiteSpace: 'pre', transform: 'translate3d(0px, 0%, 0px)', animation: '0.8s cubic-bezier(0, 0.55, 0.45, 1) 0s 1 normal forwards running TextAnimateUp_mask-down__TzvI8', lineHeight: '1' }}>
  <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}>p</span>
  <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}>r</span>
  <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}>o</span>
  <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}>d</span>
  <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}>u</span>
  <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}>c</span>
  <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}>t</span>
  <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}>s</span>
  <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}> </span>
</span>
<span className="TextAnimateUp_word__Yvn5A" style={{ display: 'inline-block', whiteSpace: 'pre', transform: 'translate3d(0px, 0%, 0px)', animation: '0.8s cubic-bezier(0, 0.55, 0.45, 1) 0s 1 normal forwards running TextAnimateUp_mask-down__TzvI8' }}>
  <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}>f</span>
  <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}>o</span>
  <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}>r</span>
  <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}> </span>
</span>
<span className="TextAnimateUp_word__Yvn5A" style={{ display: 'inline-block', whiteSpace: 'pre', transform: 'translate3d(0px, 0%, 0px)', animation: '0.8s cubic-bezier(0, 0.55, 0.45, 1) 0s 1 normal forwards running TextAnimateUp_mask-down__TzvI8' }}>
  <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}>f</span>
  <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}>o</span>
  <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}>r</span>
  <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}>w</span>
  <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}>a</span>
  <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}>r</span>
  <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}>d</span>
  <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}>-</span>
  <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}>t</span>
  <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}>h</span>
  <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}>i</span>
  <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}>n</span>
  <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}>k</span>
  <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}>i</span>
  <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}>n</span>
  <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}>g</span>
  <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}> </span>
</span>
<span className="TextAnimateUp_word__Yvn5A" style={{ display: 'inline-block', whiteSpace: 'pre', transform: 'translate3d(0px, 0%, 0px)', animation: '0.8s cubic-bezier(0, 0.55, 0.45, 1) 0s 1 normal forwards running TextAnimateUp_mask-down__TzvI8' }}>
  <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}>b</span>
  <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}>r</span>
  <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}>a</span>
  <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}>n</span>
  <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}>d</span>
  <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}>s</span>
  <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}>.</span>
</span>

      </h2>
      <div style={{ opacity: 0, transform: 'translateY(-100%) translateZ(0px)' }}>
      <svg width="141" height="20" viewBox="0 0 141 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="SVG_svg-raw-wrap__ODfz9 HomepageLogos_homepage-logos__logo__j4N53" style={{ '--width': 141, '--height': 20 }}>
        <path fillRule="evenodd" clipRule="evenodd" d="M0 0V6.66829H6.58979V20H13.1796V6.66829H19.7694V0H0ZM39.539 0H26.3594V6.66747H39.539V0ZM26.3593 20.0002H19.7695V6.66846H26.3593V13.3319H39.5438V20.0002H26.3593ZM56.3402 5.0415H46.6562V7.80984H49.8924V16.5131H53.0992V7.80984H56.3402V5.0415ZM56.0234 12.22C56.0234 9.2536 57.7064 7.72861 59.9867 7.72754C62.3646 7.72863 63.8519 9.28766 63.8519 12.4823C63.8519 12.7251 63.8519 12.9097 63.8372 13.0554H58.7504C58.8483 14.0024 59.4114 14.4298 60.2192 14.4298C60.978 14.4298 61.6047 14.2647 62.4664 13.8227L63.6071 15.7071C62.5349 16.3337 61.4284 16.6931 60.0723 16.6931C57.4628 16.6931 56.0234 14.8572 56.0234 12.22ZM59.9058 9.90821C59.2302 9.90821 58.8483 10.3696 58.7504 11.2195H61.2277C61.0808 10.3502 60.7822 9.90821 59.9058 9.90821ZM69.4868 14.3026C68.6821 14.2998 68.2676 13.5957 68.2676 12.2385C68.2676 10.8786 68.6495 10.1258 69.4083 10.1258C70.0546 10.1258 70.3336 10.4852 70.7449 11.238L72.7914 9.69842C72.0325 8.48424 71.0876 7.73145 69.4524 7.73145C66.6765 7.73145 65.3203 9.55272 65.3203 12.1899C65.3203 15.0894 66.838 16.697 69.3839 16.697C70.9212 16.697 71.8611 16.1239 72.8697 14.6474L70.9848 13.1904C70.443 13.9894 70.0471 14.3007 69.4868 14.3026ZM77.5499 8.47995C78.0982 8.07199 78.7102 7.72716 79.7334 7.72716V7.73202C81.633 7.73202 82.5436 8.99476 82.5436 11.258V16.5178H79.5523V11.632C79.5523 10.5198 79.1851 10.2235 78.5584 10.2235C77.9318 10.2235 77.5499 10.5149 77.5499 11.598V16.513H74.5781V5.74561L77.5499 4.56543V8.47995ZM89.7123 13.9245C88.3268 13.9245 87.7638 12.5306 87.7638 10.7773C87.7638 9.02403 88.3415 7.63015 89.683 7.63015C90.7405 7.63015 91.137 8.30038 91.5483 9.36886L94.4564 8.23724C93.6633 6.07114 92.5421 4.86182 89.6977 4.86182C86.5937 4.86182 84.4102 7.09105 84.4102 10.7773C84.4102 14.1722 86.2461 16.6928 89.683 16.6928C92.4246 16.6928 93.7122 15.2358 94.4907 13.7253L91.7784 12.2975C91.1517 13.3805 90.7209 13.9196 89.7123 13.9196V13.9245ZM99.2657 7.91166V8.53332L99.2706 8.53818C99.7847 8.04765 100.362 7.73682 101.121 7.73682C101.748 7.73682 102.179 7.88252 102.526 8.09621L101.831 11.1608C101.449 10.748 101.018 10.4372 100.441 10.4372C99.7113 10.4372 99.2657 10.782 99.2657 11.831V16.5178H96.2891V7.91166H99.2657ZM108.915 12.8266C108.915 13.9097 108.533 14.2011 107.926 14.2011C107.319 14.2011 106.937 13.9048 106.937 12.7926V7.90674H103.945V13.1666C103.945 15.4298 104.856 16.6926 106.756 16.6926C107.764 16.6926 108.391 16.3477 108.919 15.9398V16.5129H111.911V7.9116H108.919V12.8266H108.915ZM117.047 8.48033C117.59 8.07237 118.202 7.72754 119.226 7.72754V7.7324C121.125 7.7324 122.036 8.99514 122.036 11.2584V16.5182H119.044V11.6323C119.044 10.5202 118.682 10.2239 118.056 10.2239C117.429 10.2239 117.047 10.5153 117.047 11.5984V16.5134H114.07V7.90724H117.047V8.48033ZM127.944 14.3026C127.139 14.2999 126.725 13.5957 126.725 12.2385C126.725 10.8786 127.107 10.1258 127.865 10.1258C128.512 10.1258 128.791 10.4852 129.202 11.238L131.248 9.69842C130.49 8.48424 129.545 7.73145 127.909 7.73145C125.133 7.73145 123.777 9.55272 123.777 12.1899C123.777 15.0894 125.3 16.697 127.841 16.697C129.378 16.697 130.318 16.1239 131.327 14.6474L129.442 13.1904C128.9 13.9894 128.504 14.3007 127.944 14.3026ZM136.008 8.47995C136.551 8.07199 137.163 7.72716 138.187 7.72716V7.73202C140.086 7.73202 140.997 8.99476 140.997 11.258V16.5178H138.005V11.632C138.005 10.5198 137.643 10.2235 137.016 10.2235C136.39 10.2235 136.008 10.5149 136.008 11.598V16.513H133.031V5.74561L136.008 4.56543V8.47995Z" fill="currentColor"></path>
      </svg>
    </div>
      <HomepageLogos/>
    </section>
  );
};

export default ShowcaseSection;
