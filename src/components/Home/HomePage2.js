import React, { useState, useRef } from 'react';

const HomePage2 = () => {
  const [isPlaying, setPlaying] = useState(false);
  const [isMuted, setMuted] = useState(false); // Define isMuted state
  const videoRef = useRef(null);

  const handlePlayPause = () => {
    const video = videoRef.current;
    if (video) {
      if (isPlaying) {
        video.pause();
      } else {
        video.play();
      }
      setPlaying(!isPlaying);
    }
  };

  const handleMuteUnmute = () => {
    const video = videoRef.current;
    if (video) {
      video.muted = !isMuted;
      setMuted(!isMuted);
    }
  };
  return (
    <div className="page_homepage__purple-change__jZXd6">
      <div className=""></div>
      <div className="HomepageShowreel_showreel-wrapper__34lEW page_homepage__showreel__Tgw78">
        <div className="HomepageShowreel_showreel__0_0mY" style={{ '--progress': 0, transform: 'translateY(0vh) translateZ(0px)' }}>
          <div className="HomepageShowreel_showreel__inner__PDtub" style={{ borderRadius: '30px', transform: 'none', transformOrigin: '50% 50% 0px' }}>
          <picture className="Picture_picture__X3Eos Picture_picture--responsive__gDfjI HomepageShowreel_showreel__image__M37pn">
              <source
                srcSet="https://a-us.storyblok.com/f/1017006/1920x1080/709b0d5177/showreel_placeholder.png/m/450x364/filters:quality(80) 1x, https://a-us.storyblok.com/f/1017006/1920x1080/709b0d5177/showreel_placeholder.png/m/900x728/filters:quality(80) 2x"
                media="(min-width: 0px) and (max-width: 479px)"
              />
              <source
                srcSet="https://a-us.storyblok.com/f/1017006/1920x1080/709b0d5177/showreel_placeholder.png/m/1452x890/filters:quality(80) 1x, https://a-us.storyblok.com/f/1017006/1920x1080/709b0d5177/showreel_placeholder.png/m/2904x1780/filters:quality(80) 2x"
                media="(min-width: 480px)"
              />
              <img
                src="https://a-us.storyblok.com/f/1017006/1920x1080/709b0d5177/showreel_placeholder.png/m/450x364/filters:quality(80)"
                loading="eager"
                width="450"
                height="364"
                alt=""
                className=""
                draggable="false"
              />
            </picture>
            <video
              ref={videoRef}
              className="HomepageShowreel_showreel__video__E_mew HomepageShowreel_showreel__video--desktop__4e6iX"
              src="https://player.vimeo.com/progressive_redirect/playback/900035537/rendition/1080p/file.mp4?loc=external&amp;log_user=0&amp;signature=92f8baecbcaa673d013bf28d8697afbb95b9360f73659a39636e837060325902"
              preload="none"
              autoPlay={false}
              loop={false}
              playsInline
              muted
              disablepictureinpicture=""
            ></video>
            <button className="Button_button-wrapper__2Ps4h HomepageShowreel_showreel__fullscreen-button__flQO2" onClick={handlePlayPause}>
              <span className="Button_button__lQZdm Button_button--bg-secondary__6flN1 HomepageShowreel_showreel__fullscreen-button-inner__mipt8" style={{ transform: 'translateX(0%) translateY(0%) rotate(0deg) translateZ(0)' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="none" viewBox="0 0 26 26" className="" style={{ width: '26px', height: '26px' }}>
                  <path fill="currentColor" fillRule="evenodd" d="m17.334 13-6.5 4.875v-9.75l6.5 4.875ZM2.167 13C2.167 7.02 7.02 2.166 13 2.166S23.834 7.02 23.834 13c0 5.98-4.854 10.833-10.834 10.833C7.02 23.833 2.167 18.98 2.167 13Z" clipRule="evenodd"></path>
                </svg>
                <span>{isPlaying ? 'Pause' : 'Play'}</span>
              </span>
            </button>
            <div className="HomepageShowreel_showreel__controls__wsIiL HomepageShowreel_showreel__controls--playing__k_fZx">
  <button aria-label={isPlaying ? "Pause Showreel Video" : "Play Showreel Video"} onClick={handlePlayPause}>
    {isPlaying ? (
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="none" viewBox="0 0 26 26" className="" style={{ width: '26px', height: '26px' }}>
        <path fill="currentColor" d="M9.75 17.333h2.167V8.667H9.75v8.666ZM13 2.167C7.02 2.166 2.167 7.02 2.167 13S7.02 23.833 13 23.833 23.834 18.98 23.834 13 18.98 2.166 13 2.166Zm0 19.5c-4.777 0-8.666-3.89-8.666-8.667 0-4.778 3.889-8.667 8.666-8.667 4.778 0 8.667 3.89 8.667 8.667 0 4.777-3.89 8.666-8.667 8.666Zm1.084-4.334h2.166V8.667h-2.166v8.666Z"></path>
      </svg>
    ) : (
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="none" viewBox="0 0 26 26" className="" style={{ width: '26px', height: '26px' }}>
        <path fill="currentColor" d="M9.75 17.333h2.167V8.667H9.75v8.666ZM13 2.167C7.02 2.166 2.167 7.02 2.167 13S7.02 23.833 13 23.833 23.834 18.98 23.834 13 18.98 2.166 13 2.166Zm0 19.5c-4.777 0-8.666-3.89-8.666-8.667 0-4.778 3.889-8.667 8.666-8.667 4.778 0 8.667 3.89 8.667 8.667 0 4.777-3.89 8.666-8.667 8.666Z"></path>
      </svg>
    )}
  </button>
  <button aria-label={isMuted ? "Unmute Showreel Video" : "Mute Showreel Video"} onClick={handleMuteUnmute}>
    {isMuted ? (
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="none" viewBox="0 0 26 26" className="" style={{ width: '26px', height: '26px' }}>
        <path fill="currentColor" d="M4.701 3.174 3.174 4.702l4.723 4.723-.314.325H3.25v6.5h4.333L13 21.667v-7.14l4.528 4.529a7.272 7.272 0 0 1-2.362 1.203v2.231a9.685 9.685 0 0 0 3.911-1.896l2.221 2.221 1.528-1.527L4.7 3.174Zm6.132 13.26-2.35-2.35H5.415v-2.167h3.066l.953-.954 1.398 1.398v4.073ZM20.583 13c0 .889-.162 1.744-.444 2.535l1.657 1.658A9.68 9.68 0 0 0 22.75 13c0-4.637-3.24-8.515-7.584-9.5V5.73a7.589 7.589 0 0 1 5.417 7.27ZM13 4.333 10.963 6.37 13 8.407V4.333ZM17.875 13a4.875 4.875 0 0 0-2.709-4.366v1.94l2.687 2.686c.01-.086.022-.173.022-.26Z"></path>
      </svg>
    ) : (
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="none" viewBox="0 0 26 26" className="" style={{ width: '26px', height: '26px' }}>
        <path fill="currentColor" d="M4.701 3.174 3.174 4.702l4.723 4.723-.314.325H3.25v6.5h4.333L13 21.667v-7.14l4.528 4.529a7.272 7.272 0 0 1-2.362 1.203v2.231a9.685 9.685 0 0 0 3.911-1.896l2.221 2.221 1.528-1.527L4.7 3.174Zm6.132 13.26-2.35-2.35H5.415v-2.167h3.066l.953-.954 1.398 1.398v4.073ZM20.583 13c0 .889-.162 1.744-.444 2.535l1.657 1.658A9.68 9.68 0 0 0 22.75 13c0-4.637-3.24-8.515-7.584-9.5V5.73a7.589 7.589 0 0 1 5.417 7.27ZM13 4.333 10.963 6.37 13 8.407V4.333ZM17.875 13a4.875 4.875 0 0 0-2.709-4.366v1.94l2.687 2.686c.01-.086.022-.173.022-.26Z"></path>
      </svg>
    )}
  </button>
</div>

          </div>
        </div>
      </div>
      <div className=""></div>
    </div>
  );
};

export default HomePage2;
