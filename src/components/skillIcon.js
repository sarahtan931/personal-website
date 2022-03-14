import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function SkillIcon(props) {
    return (
        <div class="skill-icon-background">
          <FontAwesomeIcon icon={props.icon}></FontAwesomeIcon>  
           <p className='skill-text'>
               {props.skill}
           </p>
        </div>
    )

}