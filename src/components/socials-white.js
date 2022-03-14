import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import "./socials.scss";


export default function SocialsWhite() {
    return (
        <div class="socials vertical-flex-socials">
            <a href='https://www.linkedin.com/in/sarahtan931/' class="social-link social-white">
                <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon> 
            </a>
            <a href="mailto:stan229@uwo.ca" class="social-link social-white">
                <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon> 
            </a>
            <a href='https://github.com/sarahtan931' class="social-link social-white">
                <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>  
            </a>
        </div>
    )
}
