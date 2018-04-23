import React from 'react';
import { Link } from 'react-router-dom';
import { Krowdspace } from '../../images/krowdspace.js';

const Footer = (props) => {

  var date = new Date();

  return (
    <footer className="component-container">
      <div className="container">
      <a href={ props.footer.href }>
        <p className="copyright">{ props.footer.designer } { date.getFullYear() }</p>
      </a>
      <a href={ props.footer.href }>
        <p className="copyright-design"><Krowdspace height="24" /></p>
      </a>
      </div>
    </footer>
  );
};
export default Footer;
