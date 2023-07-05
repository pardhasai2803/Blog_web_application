import React from 'react';
import logo from "../images/logo.png";

 const Footer=()=> {
  return (
    <footer>
      <img src={logo} alt=""/>
      <span>Made with ❤ and <b>React.js</b></span>
    </footer>
  );
}

export default Footer;