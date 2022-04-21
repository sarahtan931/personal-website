import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub,  faLinkedin } from '@fortawesome/free-brands-svg-icons';
import "./_socials.scss";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


export default function Socials() {
    return (
        <div class="socials">
            <a href='https://www.linkedin.com/in/sarahtan931/' class="social-link">
                <FontAwesomeIcon icon={faLinkedin} ></FontAwesomeIcon> 
            </a>
            <a href="mailto:stan229@uwo.ca" class="social-link">
                <FontAwesomeIcon icon={faEnvelope} ></FontAwesomeIcon> 
            </a>
            <a href='https://github.com/sarahtan931'  class="social-link">
                <FontAwesomeIcon icon={faGithub} ></FontAwesomeIcon> 
            </a>
        </div>
    )
}
