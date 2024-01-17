// CurtinOpenDay.js

import React, { useState } from 'react';
import { Link, useRouteMatch, Route, Switch } from 'react-router-dom';
import CaseStudySidebar from './CaseStudySidebar';
import './Work.css'; // Make sure to import your styles

const CurtinOpenDay = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { path } = useRouteMatch();

  const handleCardClick = () => {
    setIsSidebarOpen(true);
  };

  const handleSidebarClose = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className={`page_homepage__section__S9KCY   WorkGrid_work-grid__0043M page_work-grid__VoMxE   WorkGrid_work-grid__row__p9SUz WorkGrid_work-grid__row--landscape__klf5g ${isSidebarOpen ? 'sidebar-open' : ''}`}>
      <div className="WorkCard_work-card-wrapper__7mGrZ" style={{ '--aspect-x': 1452, '--aspect-y': 890, opacity: 1, transform: 'translateY(0px)' }}>
        <Link to={`${path}`} className="WorkCard_work-card__Z7y63 WorkCard_work-card--landscape__cw0_a" onClick={handleCardClick}>
          <div className="WorkCard_work-card__thumbnail-wrapper__DZTs2">
            <div className="WorkCard_work-card__thumbnail-outer__kJvp9" style={{ transform: 'translateY(-50%) translateZ(0px)' }}>
              {/* Vimeo Video */}
              <video
                className="ProjectContents_project-content__video__OGkYT"
                autoPlay
                playsInline
                loop
                preload="none"
                aria-describedby="video-description-0-0"
                style={{paddingTop:"90px"}}
              >
                <source
                  src="https://player.vimeo.com/progressive_redirect/playback/895729829/rendition/720p/file.mp4?loc=external&amp;log_user=0&amp;signature=a4af87be7154edb7c1c1a2ebbc454f2c9ca39ce762345f43ff4bf48a898335d8"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="WorkCard_work-card__thumbnail-inner__YScRN">
              {/* <picture className="Picture_picture__X3Eos WorkCard_work-card__picture__CqjRI">
                <source srcSet="https://a-us.storyblok.com/f/1017006/1476x843/7c8bacd5b5/open-day-inner.jpg/m/312x178/filters:quality(80) 1x, https://a-us.storyblok.com/f/1017006/1476x843/7c8bacd5b5/open-day-inner.jpg/m/624x356/filters:quality(80) 2x" media="(min-width: 0px) and (max-width: 479px)" />
                <img src="https://a-us.storyblok.com/f/1017006/1476x843/7c8bacd5b5/open-day-inner.jpg/m/312x178/filters:quality(80)" loading="lazy" width="312" height="178" alt="Screenshot of the Curtin Open Day website" className="" draggable="false" />
              </picture> */}
            </div>
          </div>
          <div className="WorkCard_work-card__content__Br9N4 WorkCard_work-card__content--white__ISlcm">
            <div className="WorkCard_work-card__content-inner__8Mqvf">
              <h3 className="WorkCard_work-card__title__vsvFl">Curtin Open Day</h3>
            </div>
          </div>
        </Link>
      </div>

      {isSidebarOpen && (
        <Switch>
          <Route path={`${path}`}>
            <CaseStudySidebar onClose={handleSidebarClose} />
          </Route>
        </Switch>
      )}
    </div>
  );
};

export default CurtinOpenDay;
