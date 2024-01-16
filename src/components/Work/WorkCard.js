import React, { useState } from 'react';
import CaseStudySidebar from './CaseStudySidebar';

const WorkCard = ({ title, thumbnailSrc, innerThumbnailSrc, details }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // const handleCardClick = () => {
  //   setIsSidebarOpen(true);
  // };

  const handleSidebarClose = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="WorkCard_work-card-wrapper__7mGrZ" style={{ '--aspect-x': 710, '--aspect-y': 890, opacity: 1, transform: 'translateY(0px)' }}>
      <a className="WorkCard_work-card__Z7y63 WorkCard_work-card--portrait__WHYgm" href={details.link}>
        <div className="WorkCard_work-card__thumbnail-wrapper__DZTs2">
          <div className="WorkCard_work-card__thumbnail-outer__kJvp9" style={{ transform: 'translateY(-50%) translateZ(0px)' }}>
            <picture className="Picture_picture__X3Eos WorkCard_work-card__picture__CqjRI">
              <source srcSet={thumbnailSrc.mobile} media="(min-width: 0px) and (max-width: 479px)" />
              <source srcSet={thumbnailSrc.tablet} media="(min-width: 480px) and (max-width: 991px)" />
              <source srcSet={thumbnailSrc.desktop} media="(min-width: 992px) and (max-width: 1512px)" />
              <source srcSet={thumbnailSrc.largeDesktop} media="(min-width: 1513px)" />
              <img src={thumbnailSrc.mobile} loading="lazy" width="450" height="677" alt="" draggable="false" />
            </picture>
          </div>
          <div className="WorkCard_work-card__thumbnail-inner__YScRN">
            <picture className="Picture_picture__X3Eos WorkCard_work-card__picture__CqjRI">
              <source srcSet={innerThumbnailSrc.mobile} media="(min-width: 0px) and (max-width: 479px)" />
              <source srcSet={innerThumbnailSrc.tablet} media="(min-width: 480px) and (max-width: 991px)" />
              <source srcSet={innerThumbnailSrc.desktop} media="(min-width: 992px) and (max-width: 1679px)" />
              <source srcSet={innerThumbnailSrc.largeDesktop} media="(min-width: 1680px)" />
              <img src={innerThumbnailSrc.mobile} loading="lazy" width="171" height="369" alt="" draggable="false" />
            </picture>
          </div>
        </div>
        <div className="WorkCard_work-card__content__Br9N4 WorkCard_work-card__content--white__ISlcm">
          <div className="WorkCard_work-card__content-inner__8Mqvf">
            <h3 className="WorkCard_work-card__title__vsvFl">{title}</h3>
          </div>
        </div>
      </a>
      {isSidebarOpen && <CaseStudySidebar details={details} onClose={handleSidebarClose} />}
    </div>
  );
};

const WorkGrid = () => {
  // Define your card details here
  const card1 = {
    title: 'Sussex Taps',
    link: '/work/sussex-taps',
    thumbnailSrc: {
      mobile: 'https://a-us.storyblok.com/f/1017006/1864x2333/f75518e100/sussex-portrait-card.jpg/m/450x677/filters:quality(80)',
      tablet: 'https://a-us.storyblok.com/f/1017006/1864x2333/f75518e100/sussex-portrait-card.jpg/m/710x1068/filters:quality(80)',
      desktop: 'https://a-us.storyblok.com/f/1017006/1864x2333/f75518e100/sussex-portrait-card.jpg/m/933x1403/filters:quality(80)',
      largeDesktop: 'https://a-us.storyblok.com/f/1017006/1864x2333/f75518e100/sussex-portrait-card.jpg/m/933x1403/filters:quality(80)',
    },
    innerThumbnailSrc: {
      mobile: 'https://a-us.storyblok.com/f/1017006/1684x3630/aff95687f6/ferox-inner.jpg/m/171x369/filters:quality(80)',
      tablet: 'https://a-us.storyblok.com/f/1017006/1684x3630/aff95687f6/ferox-inner.jpg/m/355x765/filters:quality(80)',
      desktop: 'https://a-us.storyblok.com/f/1017006/1684x3630/aff95687f6/ferox-inner.jpg/m/355x765/filters:quality(80)',
      largeDesktop: 'https://a-us.storyblok.com/f/1017006/1684x3630/aff95687f6/ferox-inner.jpg/m/355x765/filters:quality(80)',
    },
    details: {
      // Add other details as needed
    },
  };

  const card2 = {
    title: 'Ferox',
    link: '/work/ferox',
    thumbnailSrc: {
      mobile: 'https://a-us.storyblok.com/f/1017006/1864x2803/5416277cd6/ferox-outer.jpg/m/450x677/filters:quality(80)',
      tablet: 'https://a-us.storyblok.com/f/1017006/1864x2803/5416277cd6/ferox-outer.jpg/m/710x1068/filters:quality(80)',
      desktop: 'https://a-us.storyblok.com/f/1017006/1864x2803/5416277cd6/ferox-outer.jpg/m/933x1403/filters:quality(80)',
      largeDesktop: 'https://a-us.storyblok.com/f/1017006/1864x2803/5416277cd6/ferox-outer.jpg/m/933x1403/filters:quality(80)',
    },
    innerThumbnailSrc: {
      mobile: 'https://a-us.storyblok.com/f/1017006/1684x3630/aff95687f6/ferox-inner.jpg/m/171x369/filters:quality(80)',
      tablet: 'https://a-us.storyblok.com/f/1017006/1684x3630/aff95687f6/ferox-inner.jpg/m/355x765/filters:quality(80)',
      desktop: 'https://a-us.storyblok.com/f/1017006/1684x3630/aff95687f6/ferox-inner.jpg/m/355x765/filters:quality(80)',
      largeDesktop: 'https://a-us.storyblok.com/f/1017006/1684x3630/aff95687f6/ferox-inner.jpg/m/355x765/filters:quality(80)',
    },
    details: {
      // Add other details as needed
    },
  };

  return (
    <div className="WorkGrid_work-grid__row__p9SUz WorkGrid_work-grid__row--portrait__nwacA">
      <WorkCard {...card1} />
      <WorkCard {...card2} />
      {/* Add more cards as needed */}
    </div>
  );
};

export default WorkGrid;
