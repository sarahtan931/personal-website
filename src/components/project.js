import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { faXmarkCircle } from '@fortawesome/free-regular-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default function project(props) {
    if (props.tools) {
        var list = props.tools.map(function (tool) {
            return (
                <div className='tool-background'>
                    <p className='tool-writing'>
                        {tool}
                    </p>
                </div>
            );
        });
    }

    function showInfo() {
        var back = document.getElementById(props.title);
        back.style.display = 'block';
        back.style.left = '0%';
    }

    function showTitle() {
        var back = document.getElementById(props.title);
        back.style.left = '-100%';

    }
    return (
        <div className="background-project">
            <div className="project-front" id="project-front" onClick={showInfo}>
                <div className='project-title-box'>
                    <div className="project-title-front">
                        <p className="project-title">
                            {props.title}
                        </p>
                        <p className='project-place'>
                            {props.place}
                        </p>
                    </div>
                    <div className="learnmore-button" onClick={showInfo}>
                        <div className="btn btn--white btn--animated">
                            <span className="btn2-span">
                                Learn More
                            </span>
                        </div>
                    </div>
                </div>
                <div className="project-img-box">
                    <img src={props.img} alt="" class="proj-img" className="project-image" />
                </div>
            </div>
            <div className="project-back" id={props.title}>
                <div className='project-info' id={props.place}>
                    <div className='nav-links'>
                        {props.link && <a href={props.link} class="proj-link">
                            <FontAwesomeIcon icon={faLink} ></FontAwesomeIcon>
                        </a>}
                        {props.gitlink &&
                            <a href={props.gitlink} class="proj-link">
                                <FontAwesomeIcon icon={faGithub} ></FontAwesomeIcon>
                            </a>}
                        <FontAwesomeIcon className='proj-link' icon={faXmarkCircle} onClick={showTitle}></FontAwesomeIcon>
                    </div>
                    <div className='project-text'>
                        <div className=''>
                            <p className="project-title-back">
                                {props.title}
                            </p>
                            <p className='project-place'>
                                {props.place}
                            </p>
                        </div>
                        <div className='about-project-text'>
                            {props.about1}<br></br>
                            {props.about2}
                        </div>
                        <div className='all-tools'>
                            {list}
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )

}
