import React from 'react';
import { Link } from 'react-router-dom';
import HomeHeader from './HomeHeader';
import HomeWelcome from './HomeWelcome';
import HomeStory from './HomeStory';
import HomeGallery from './HomeGallery';

const Home = (props) => {
  var style = {
    width: 100
  }
  return (
    <React.Fragment>
      <HomeHeader style={style} header={ props.home.header } modal={ props.modal }/>
      <HomeWelcome style={style} welcome={ props.home.welcome }/>
      <HomeStory style={style} story={ props.home.story }/>
      <HomeGallery style={style}/>
    </React.Fragment>
  );
};

export default Home;
