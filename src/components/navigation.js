import React, { PureComponent } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import SocialsWhite from './socials-white';



export default class navigation extends PureComponent {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  scrollToBottom = () => {
    scroll.scrollToBottom();
  };


  render() {
    return (
      <div class='fixed'>
        <nav class="sidebar">

          <ul class="side-nav">
            <li class="side-nav__item">
              <Link className='side-nav__link'
                activeClass="active"
                to="home-page"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}>
                <span>Home</span>
              </Link>
            </li>
            <li class="side-nav__item">
              <Link className='side-nav__link'
                activeClass="active"
                to="about-page"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}>
                <span>About Me</span>
              </Link>
            </li>
            <li class="side-nav__item">
              <Link className='side-nav__link'
                activeClass="active"
                to="project-page"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}>
                <span>Projects</span>
              </Link>
            </li>
            <li class="side-nav__item">
              <Link className='side-nav__link'
                activeClass="active"
                to="resume-page"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}>
                <span>Resume</span>
              </Link>
            </li>
          </ul>
        </nav>
        <div className='socials-vertical'>
        <SocialsWhite ></SocialsWhite>
        </div>
      
        <div class="line"></div>

      </div>

    )
  }
}
