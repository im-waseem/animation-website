import React from 'react';

const FeedItem = ({ imageUrl, tagBackgroundColor, tagColor, date, title, content, link }) => (
  <article className="FeedSlider_feed__shrink-drag__4j3XZ">
    <div className="FeedSlider_feed__item__w7WSY">
      <div className="FeedSlider_feed__image__4qcgY">
        <picture className="Picture_picture__X3Eos Picture_picture--responsive__gDfjI FeedSlider_feed__picture__BGkOi">
          {/* Use appropriate srcset and media queries for responsive images */}
          <div className="page_homepage__feed-wrapper-inner__SFalT">
    <div className="FeedSlider_feed__tS_vO page_homepage__feed__w1stV">
    <h2 className="FeedSlider_feed__heading__Fcfyk" style={{ opacity: 1, transform: 'translateY(0px)' }}>
    What's New
  </h2>
      <div className="FeedSlider_feed__inner__ht0nl" draggable="false" style={{ userSelect: 'none', touchAction: 'pan-y' }}>
        {/* Render FeedItems based on your data */}
        <FeedItem
          imageUrl="https://a-us.storyblok.com/f/1017006/600x790/f48bc1ea20/humaan.jpg/m/300x390/filters:quality(80)"
          tagBackgroundColor="rgb(124, 74, 206)"
          tagColor="white"
          date="22.12.23"
          title="Headless Humaan:"
          content="A fresh new look for humaan.com – our sixth iteration. Please, take a look around."
        />
        {/* Repeat for other FeedItems */}
      </div>
    </div>
  </div>
          <source srcSet={imageUrl} media="(min-width: 0px) and (max-width: 1511px)" />
          <source srcSet={imageUrl} media="(min-width: 1512px)" />
          <img src={imageUrl} loading="eager" width="300" height="390" alt="" className="" draggable="false" />
          <span className="FeedSlider_feed__tag__F9f_h" style={{ backgroundColor: tagBackgroundColor, color: tagColor }}>
            Tag
          </span>
        </picture>
      </div>
      <span className="FeedSlider_feed__date__pEv67">{date}</span>
      <div className="FeedSlider_feed__content__spbob">
        <h3 className="FeedSlider_feed__title__sGhl7">{title}</h3>
        <p>{content}</p>
        {link && (
          <a className="Button_button-wrapper__2Ps4h" target="_blank" href={link}>
            <span className="Button_button__lQZdm Button_button--bg-transparent__4_NCr FeedSlider_feed__link__Rku_S">
              Learn More
            </span>
          </a>
        )}
      </div>
    </div>
  </article>
);


export default FeedItem;
