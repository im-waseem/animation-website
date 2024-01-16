import React, { useState, useEffect } from 'react';

const HomepageBottom = () => {
  const [count100, setCount100] = useState(1);
  const [count13, setCount13] = useState(1);
  const [count80Plus, setCount80Plus] = useState(1);

  useEffect(() => {
    const interval100 = setInterval(() => {
      if (count100 < 100) {
        setCount100((prevCount) => prevCount + 1);
      }
    }, 5);

    const interval13 = setInterval(() => {
      if (count13 < 13) {
        setCount13((prevCount) => prevCount + 1);
      }
    }, 50);

    const interval80Plus = setInterval(() => {
      if (count80Plus < 80) {
        setCount80Plus((prevCount) => prevCount + 1);
      }
    }, 50);

    return () => {
      clearInterval(interval100);
      clearInterval(interval13);
      clearInterval(interval80Plus);
    };
  }, [count100, count13, count80Plus]);
  return (
    <div className="page_homepage-bottom__dQvm3">
      <span className="page_homepage-bottom__heading___55Sm">
        <span className="TextAnimateUp_word__Yvn5A" style={{ display: 'inline-block', whiteSpace: 'pre', transform: 'translate3d(0px, 0%, 0px)', animation: '0.8s cubic-bezier(0, 0.55, 0.45, 1) 0s 1 normal forwards running TextAnimateUp_mask-down__TzvI8' }}>
          <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}>G</span>
          <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}>r</span>
          <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}>e</span>
          <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}>a</span>
          <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}>t</span>
          <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}> </span>
        </span>
        <span className="TextAnimateUp_word__Yvn5A" style={{ display: 'inline-block', whiteSpace: 'pre', transform: 'translate3d(0px, 0%, 0px)', animation: '0.8s cubic-bezier(0, 0.55, 0.45, 1) 0s 1 normal forwards running TextAnimateUp_mask-down__TzvI8' }}>
          <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}>w</span>
          <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}>o</span>
          <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}>r</span>
          <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}>k</span>
          <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}> </span>
        </span>
        <span className="TextAnimateUp_word__Yvn5A" style={{ display: 'inline-block', whiteSpace: 'pre', transform: 'translate3d(0px, 0%, 0px)', animation: '0.8s cubic-bezier(0, 0.55, 0.45, 1) 0s 1 normal forwards running TextAnimateUp_mask-down__TzvI8' }}>
          <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}>f</span>
          <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}>o</span>
          <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}>r</span>
          <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}> </span>
        </span>
        <span className="TextAnimateUp_word__Yvn5A" style={{ display: 'inline-block', whiteSpace: 'pre', transform: 'translate3d(0px, 0%, 0px)', animation: '0.8s cubic-bezier(0, 0.55, 0.45, 1) 0s 1 normal forwards running TextAnimateUp_mask-down__TzvI8' }}>
          <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}>g</span>
          <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}>r</span>
          <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}>e</span>
          <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}>a</span>
          <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}>t</span>
          <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}> </span>
        </span>
        <span className="TextAnimateUp_word__Yvn5A" style={{ display: 'inline-block', whiteSpace: 'pre', transform: 'translate3d(0px, 0%, 0px)', animation: '0.8s cubic-bezier(0, 0.55, 0.45, 1) 0s 1 normal forwards running TextAnimateUp_mask-down__TzvI8' }}>
          <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 100 100" className="">
              <path fill="currentColor" fill-rule="evenodd" d="M50 2.93C24.005 2.93 2.93 24.005 2.93 50S24.005 97.07 50 97.07 97.07 75.995 97.07 50 75.995 2.93 50 2.93ZM9.18 50C9.18 27.456 27.456 9.18 50 9.18S90.82 27.456 90.82 50 72.544 90.82 50 90.82 9.18 72.544 9.18 50Zm29.417-14.964a4.59 4.59 0 1 0-6.491 6.491 4.59 4.59 0 0 0 6.491-6.491Zm29.297 0a4.59 4.59 0 1 0-6.491 6.492 4.59 4.59 0 0 0 6.491-6.492ZM29.167 60.33a3.125 3.125 0 0 0-5.6 2.777 29.505 29.505 0 0 0 52.866 0 3.125 3.125 0 0 0-5.6-2.777 23.253 23.253 0 0 1-41.666 0Z" clip-rule="evenodd"></path>
            </svg>
          </span>
          <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}> </span>
        </span>
        <span className="TextAnimateUp_word__Yvn5A" style={{ display: 'inline-block', whiteSpace: 'pre', transform: 'translate3d(0px, 0%, 0px)', animation: '0.8s cubic-bezier(0, 0.55, 0.45, 1) 0s 1 normal forwards running TextAnimateUp_mask-down__TzvI8' }}>
          <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}>p</span>
          <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}>e</span>
          <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}>o</span>
          <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}>p</span>
          <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}>l</span>
          <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}>e</span>
          <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}>.</span>
        </span>
      </span>
      {/* Home pagebutttom 2 */}
      <div className="page_homepage-bottom__content__ty_c_" style={{ opacity: 1, transform: 'translateY(0px)' }}>
        <div className="WYSIWYG_wysiwyg__ct3Fm page_homepage-bottom__wysiwyg__MyVmD">
          <p>We put people first, understanding that a well-crafted product significantly impacts the lives of those who use it. By empowering users, we’re able to solve unique problems, accelerate progress and unlock potential for our clients.</p>
          <p>Our independent spirit drives our creative energy and approach to technology, allowing us to ensure quality and consistently deliver outstanding outcomes.</p>
        </div>
        

<a className="Button_button-wrapper__2Ps4h page_homepage-bottom__link__bpR9a" target="_self" href="/about">
  <span className="Button_button__lQZdm Button_button--icon__Me_aL Button_button--bg-secondary__6flN1" style={{ transform: 'translateX(0%) translateY(0%) rotate(0deg) translateZ(0)' }}>
    About Us
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" fill="none" stroke-width="0.5" viewBox="0 0 14 13" className="" style={{ '--width': 14, '--height': 13 }}>
      <path fill="currentColor" stroke="currentColor" d="M1 5.816H.75v1.326h10.014l-4.008 3.907-.173.168.162.179.563.62.174.191.186-.18 5.506-5.37.184-.178-.184-.18L7.668.932l-.186-.18-.174.191-.563.62-.162.178.173.169 4.008 3.907H1Z" vectorEffect="non-scaling-stroke"></path>
    </svg>
  </span>
</a>

<div className="page_homepage-bottom__stats__uJbJM">
<li className="HomepageStats_homepage-stats__item__bfQDv" style={{ opacity: 1, transform: 'translateX(0px)' }}>
      <span className="HomepageStats_homepage-stats__value__JLrJU">
      <span>{count100}%</span>
      </span>
      <span className="HomepageStats_homepage-stats__label__vKtOz">
        <span className="TextAnimateUp_word__Yvn5A" style={{ display: 'inline-block', whiteSpace: 'pre', transform: 'translate3d(0px, 0%, 0px)', animation: '0.8s cubic-bezier(0, 0.55, 0.45, 1) 0s 1 normal forwards running TextAnimateUp_mask-down__TzvI8' }}>
          <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}>I</span>
          <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}>n</span>
          <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}>-</span>
          <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}>h</span>
          <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}>o</span>
          <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}>u</span>
          <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}>s</span>
          <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}>e</span>
          <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}> </span>
        </span>
        <span className="TextAnimateUp_word__Yvn5A" style={{ display: 'inline-block', whiteSpace: 'pre', transform: 'translate3d(0px, 0%, 0px)', animation: '0.8s cubic-bezier(0, 0.55, 0.45, 1) 0s 1 normal forwards running TextAnimateUp_mask-down__TzvI8' }}>
          <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}>&amp;</span>
          <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}> </span>
        </span>
        <span className="TextAnimateUp_word__Yvn5A" style={{ display: 'inline-block', whiteSpace: 'pre', transform: 'translate3d(0px, 0%, 0px)', animation: '0.8s cubic-bezier(0, 0.55, 0.45, 1) 0s 1 normal forwards running TextAnimateUp_mask-down__TzvI8' }}>
          <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}>i</span>
          <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}>n</span>
          <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}>d</span>
          <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}>e</span>
          <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}>p</span>
          <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}>e</span>
          <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}>n</span>
          <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}>d</span>
          <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}>e</span>
          <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}>n</span>
          <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}>t</span>
        </span>
      </span>
    </li>
    <li className="HomepageStats_homepage-stats__item__bfQDv" style={{ opacity: 1, transform: 'translateX(0px)' }}>
      <span className="HomepageStats_homepage-stats__value__JLrJU">
      <span>{count13}</span>
      </span>
      <span className="HomepageStats_homepage-stats__label__vKtOz">
        <span className="TextAnimateUp_word__Yvn5A" style={{ display: 'inline-block', whiteSpace: 'pre', transform: 'translate3d(0px, 0%, 0px)', animation: '0.8s cubic-bezier(0, 0.55, 0.45, 1) 0s 1 normal forwards running TextAnimateUp_mask-down__TzvI8' }}>
          <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}>Y</span>
          <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}>e</span>
          <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}>a</span>
          <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}>r</span>
          <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}>s</span>
          <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}> </span>
        </span>
        <span className="TextAnimateUp_word__Yvn5A" style={{ display: 'inline-block', whiteSpace: 'pre', transform: 'translate3d(0px, 0%, 0px)', animation: '0.8s cubic-bezier(0, 0.55, 0.45, 1) 0s 1 normal forwards running TextAnimateUp_mask-down__TzvI8' }}>
          <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}>c</span>
          <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}>r</span>
          <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}>a</span>
          <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}>f</span>
          <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}>t</span>
          <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}>i</span>
          <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}>n</span>
          <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}>g</span>
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
        <span className="TextAnimateUp_word__Yvn5A" style={{ display: 'inline-block', whiteSpace: 'pre', transform: 'translate3d(0px, 0%, 0px)', animation: '0.8s cubic-bezier(0, 0.55, 0.45, 1) 0s 1 normal forwards running TextAnimateUp_mask-down__TzvI8' }}>
          <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}>e</span>
          <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}>x</span>
          <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}>p</span>
          <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}>e</span>
          <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}>r</span>
          <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}>i</span>
          <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}>e</span>
          <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}>n</span>
          <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}>c</span>
          <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}>e</span>
          <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}>s</span>
        </span>
      </span>
    </li>
    <li className="HomepageStats_homepage-stats__item__bfQDv" style={{ opacity: 1, transform: 'translateX(0px)' }}>
      <span className="HomepageStats_homepage-stats__value__JLrJU">
      <span>{count80Plus}+</span>
      </span>
      <span className="HomepageStats_homepage-stats__label__vKtOz">
        <span className="TextAnimateUp_word__Yvn5A" style={{ display: 'inline-block', whiteSpace: 'pre', transform: 'translate3d(0px, 0%, 0px)', animation: '0.8s cubic-bezier(0, 0.55, 0.45, 1) 0s 1 normal forwards running TextAnimateUp_mask-down__TzvI8' }}>
          <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}>A</span>
          <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}>w</span>
          <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}>a</span>
          <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}>r</span>
          <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}>d</span>
          <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}>s</span>
          <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}> </span>
        </span>
        <span className="TextAnimateUp_word__Yvn5A" style={{ display: 'inline-block', whiteSpace: 'pre', transform: 'translate3d(0px, 0%, 0px)', animation: '0.8s cubic-bezier(0, 0.55, 0.45, 1) 0s 1 normal forwards running TextAnimateUp_mask-down__TzvI8' }}>
          <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}>f</span>
          <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}>r</span>
          <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}>o</span>
          <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}>m</span>
          <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}> </span>
        </span>
        <span className="TextAnimateUp_word__Yvn5A" style={{ display: 'inline-block', whiteSpace: 'pre', transform: 'translate3d(0px, 0%, 0px)', animation: '0.8s cubic-bezier(0, 0.55, 0.45, 1) 0s 1 normal forwards running TextAnimateUp_mask-down__TzvI8' }}>
          <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}>A</span>
          <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}>W</span>
          <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}>A</span>
          <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}>,</span>
          <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}> </span>
        </span>
        <span className="TextAnimateUp_word__Yvn5A" style={{ display: 'inline-block', whiteSpace: 'pre', transform: 'translate3d(0px, 0%, 0px)', animation: '0.8s cubic-bezier(0, 0.55, 0.45, 1) 0s 1 normal forwards running TextAnimateUp_mask-down__TzvI8' }}>
          <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}>F</span>
          <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}>W</span>
          <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}>A</span>
          <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}>,</span>
          <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}> </span>
        </span>
        <span className="TextAnimateUp_word__Yvn5A" style={{ display: 'inline-block', whiteSpace: 'pre', transform: 'translate3d(0px, 0%, 0px)', animation: '0.8s cubic-bezier(0, 0.55, 0.45, 1) 0s 1 normal forwards running TextAnimateUp_mask-down__TzvI8' }}>
          <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}>a</span>
          <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}>n</span>
          <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}>d</span>
          <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}> </span>
        </span>
        <span className="TextAnimateUp_word__Yvn5A" style={{ display: 'inline-block', whiteSpace: 'pre', transform: 'translate3d(0px, 0%, 0px)', animation: '0.8s cubic-bezier(0, 0.55, 0.45, 1) 0s 1 normal forwards running TextAnimateUp_mask-down__TzvI8' }}>
          <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}>A</span>
          <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}>w</span>
          <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}>w</span>
          <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}>w</span>
          <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}>a</span>
          <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}>r</span>
          <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}>d</span>
          <span style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 1 }}>s</span>
        </span>
      </span>
    </li>
</div>

      


      </div>

        



        
      <div class="page_homepage-bottom__image-wrapper__Ai9mX" style={{ opacity: 1, transform: 'translateY(0px)' }}>
        <picture class="Picture_picture__X3Eos Picture_picture--responsive__gDfjI page_homepage-bottom__image__I2GXx">
          {/* ... your image sources ... */}
          <source srcset="https://a-us.storyblok.com/f/1017006/1200x1400/dc71890964/humaanpeople.jpg/m/450x548/filters:quality(80)" media="(min-width: 0px) and (max-width: 479px)" />
          <source srcset="https://a-us.storyblok.com/f/1017006/1200x1400/dc71890964/humaanpeople.jpg/m/912x1111/filters:quality(80)" media="(min-width: 480px) and (max-width: 991px)" />
          <source srcset="https://a-us.storyblok.com/f/1017006/1200x1400/dc71890964/humaanpeople.jpg/m/838x1021/filters:quality(80)" media="(min-width: 992px)" />
          <img src="https://a-us.storyblok.com/f/1017006/1200x1400/dc71890964/humaanpeople.jpg/m/450x548/filters:quality(80)" loading="lazy" width="450" height="548" alt="" className="" draggable="false" />
        </picture>
      </div>

      
      
    </div>
    
  );
};

export default HomepageBottom;
