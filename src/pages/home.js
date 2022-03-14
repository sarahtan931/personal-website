import React, { PureComponent } from 'react';
import Headshot from "../assets/Headshot.jpg";
import HeadshotCopy from "../assets/HeadshotCopy.jpg"
import Button from "../components/button";
import Socials from "../components/socials";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-scroll";
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';

export default class Home extends PureComponent {
    render() {
        return (
            <div>
                <div className="home-page">
                    <div className="background-color">
                        <div className="background-rectangle"></div>
                        <img src={Headshot} className="main-photo"></img>
                    </div>
                    <div className="background-home">
                        <div className="intro-container">
                            <div className="text-intro">
                                <div className="text-hello">Hello</div>
                                <div className="text-intro1">
                                    My name is Sarah  <em> (She/Her)</em>
                                </div>
                            </div>
                            <div className="buttons">
                                <div class="resume-btn">
                                    <Button name={"resume"} link={"resume-page"}></Button>
                                </div>
                                <div class="proj-btn">
                                    <Button name={"projects"} link={"project-page"}></Button>
                                </div>
                            </div>
                            <div className="text-intro2">
                                I am a Software Engineering Student at Western University.
                            </div>
                            <div className="text-intro2">
                                I am passionate about empowering women through STEM and am enthusiastic about making a positive impact through technology.
                            </div>
                            <div class="socials-bar">
                                <Socials></Socials>
                            </div>
                        </div>
                        <div className="arrow-down">
                            <Link to="about-page" spy={true} smooth={true} offset={-50} duration={500}>
                                <FontAwesomeIcon className="i" icon={faAngleDoubleDown} />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='home-mobile'>
                    <div className="home-mobile-background">
                        <div className='student-mobile'>
                            Software Engineering Student
                        </div>
                    </div>
                    <div className='mobile-home-container'>
                        <img src={HeadshotCopy} className="main-photo-mobile" alt=""></img>
                        <div className='socials-mobile'>
                            <Socials></Socials>
                        </div>
                        <p className='socials-mobile-text'>I am a fourth year Software Engineering Student at Western University. <br /><br />

                            I am passionate about empowering women through STEM and am enthusiastic about making a positive impact using technology.
                        </p>

                    </div>
                    <div className='mobile-buttons'>
                        <div class="resume-btn">
                            <Button name={"resume"} link={"resume-page"}></Button>
                        </div>
                        <div class="proj-btn">
                            <Button name={"projects"} link={"project-page"}></Button>
                        </div>
                    </div>


                </div>
            </div>

        )
    }
}
