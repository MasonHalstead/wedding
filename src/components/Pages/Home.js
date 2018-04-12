import React from 'react';
import { Link } from 'react-router-dom';
import HomeHeader from './HomeHeader';
import Layout from './Layout';

const Home = (props) => {
  return (
    <HomeHeader header={ props.home.header }/>
  );
};

export default Home;
