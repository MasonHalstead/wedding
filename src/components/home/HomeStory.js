import React from 'react';
import Flexbox from 'flexbox-react';

const HomeStory = (props) => {

  return (
    <React.Fragment>
        <div className="component-container text-center">
          <h2>{ props.story.title }</h2>
          <div className="fa-2x">
            <span className="fa-layers fa-fw">
              <i className="fas fa-circle" ></i>
              <i className="fa-inverse far fa-heart" data-fa-transform="shrink-7"></i>
            </span>
          </div>
        </div>
        <Flexbox className="component-container-small story-flex">
        <div className="story-container-left">
            <p className="wedding-couple">{ props.story.bride.bride }</p>
            <h3>{ props.story.bride.name }</h3>
            <p>{ props.story.bride.text }</p>
        </div>
        <div className="story-container-right">
            <p className="wedding-couple">{ props.story.groom.groom }</p>
            <h3>{ props.story.groom.name }</h3>
            <p>{ props.story.groom.text }</p>
        </div>
        </Flexbox>
    </React.Fragment>
  );
};

export default HomeStory;
