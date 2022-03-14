import React, { PureComponent } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import SocialsWhite from './socials-white';

export default class NavigationMobile extends PureComponent {

    /* Open when someone clicks on the span element */
    openNav() {
        document.getElementById("myNav").style.width = "100%";
    }

    /* Close when someone clicks on the "x" symbol inside the overlay */
    closeNav() {
        document.getElementById("myNav").style.width = "0%";
    }
    render() {
        return (
            <div>
                <div onClick={this.openNav} class='nav-header'><p className='nav-mobile-name'>Sarah Tan</p><FontAwesomeIcon className='bars'icon={faBars}></FontAwesomeIcon></div>
                <div id="myNav" class="overlay">
                    <a href="" class="closebtn" onclick="closeNav()">&times;</a>

                    <div class="overlay-content">
                        <Link 
                            onClick={this.closeNav}
                            to="home-page"
                            spy={true}
                            smooth={true}
                            offset={-80}
                            duration={500}>
                            <span>Home</span>
                        </Link>
                        <Link 
                            to="about-page"
                            onClick={this.closeNav}
                            spy={true}
                            smooth={true}
                            offset={-80}
                            duration={500}>
                            <span>About Me</span>
                        </Link>
                        <Link 
                            to="project-page"
                            onClick={this.closeNav}
                            spy={true}
                            smooth={true}
                            offset={-120}
                            duration={500}>
                            <span>Projects</span>
                        </Link>
                        <Link
                            to="resume-page"
                            onClick={this.closeNav}
                            spy={true}
                            smooth={true}
                            offset={-80}
                            duration={500}>
                            <span>Resume</span>
                        </Link>
                        <SocialsWhite></SocialsWhite>
                        
                    </div>
                </div>
            </div>
        )
    }
}