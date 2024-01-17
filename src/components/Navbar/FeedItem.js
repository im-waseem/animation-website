import React from 'react';

const FeedItem = ({ imageSrc, tagColor, tagText, date, title, content, link }) => (
    <article className="FeedSlider_feed__shrink-drag__4j3XZ page_homepage__06uL1">
      <div className="FeedSlider_feed__item__w7WSY">
        <div className="FeedSlider_feed__image__4qcgY">
          {/* ... (picture tag and image tag) */}
        </div>
        <span className="FeedSlider_feed__date__pEv67">{date}</span>
        <div className="FeedSlider_feed__content__spbob">
          <h3 className="FeedSlider_feed__title__sGhl7">{title}</h3>
          <p>{content}</p>
          {/* Updated anchor tag to include rel="noreferrer" */}
          {link && <a className="Button_button-wrapper__2Ps4h" target="_blank" rel="noreferrer" href={link}><span className="Button_button__lQZdm Button_button--bg-transparent__4_NCr FeedSlider_feed__link__Rku_S" style={{ transform: 'translateX(0%) translateY(0%) rotate(0deg) translateZ(0)' }}>{link}</span></a>}
        </div>
      </div>
    </article>
  );
  
  export default FeedItem;