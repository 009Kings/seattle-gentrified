import React from 'react';
import './Nav.css'

let mainNavLinks = document.querySelectorAll("#navbar ul li a");
let mainSections = document.querySelectorAll("section");

let lastId;
let cur = [];

window.addEventListener("scroll", event => {
  let fromTop = window.scrollY;

  mainNavLinks.forEach(link => {
    let section = document.querySelector(link.hash);

    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      link.classList.add("current");
    } else {
      link.classList.remove("current");
    }
  });
});


const Nav = () => {
  return (
    <nav id="navbar" className="sticky">
	    <div className="full-row">
			<a href="#About">About</a>
			<a href="#Additional">Resources</a>
			<a href="#Graph">Graph</a>
			<a href="#Heatmap">Map</a>
			<a href="#">Home</a>
		</div>
    </nav>
  )
}

export default Nav;