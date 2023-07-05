import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
    <div className="categories">
      <h3>Categories</h3>
      <ul>
        <li>
          <Link to="/?cat=art">ART</Link>
        </li>
        <li>
          <Link to="/?cat=science">SCIENCE</Link>
        </li>
        <li>
          <Link to="/?cat=technology">TECHNOLOGY</Link>
        </li>
        <li>
          <Link to="/?cat=cinema">CINEMA</Link>
        </li>
        <li>
          <Link to="/?cat=design">DESIGN</Link>
        </li>
        <li>
          <Link to="/?cat=food">FOOD</Link>
        </li>
      </ul>
    </div>
    </div>
  );
};

export default Sidebar;
