import React from 'react';
import './Nav.css'

const Nav = () => {
  return (
    <nav id="navbar" className="sticky">
      <a href="#Heatmap">Heatmap</a>
      <a href="#Graph">Graph</a>
      <a href="#Additional">Additional Information</a>
      <a href="#About">About</a>
    </nav>
  )
}

export default Nav;