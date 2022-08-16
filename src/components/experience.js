import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';

export default function experience(props) {

    return (
        <div className="resume-experience">
            <img src={props.img} alt="" className="img-resume"></img>
            <div>
                
            <span className="place-resume">{props.place}, {props.location}  </span>  <br />
            <span className="title-resume">{props.title}</span>    <br />
            <span className="date-resume"> {props.date}</span>     <br />
            <span className="description-resume"><br />
                <FontAwesomeIcon icon={faPen}></FontAwesomeIcon> {props.description1}
                <br />
                <FontAwesomeIcon icon={faPen}></FontAwesomeIcon>  {props.description2}
                <br />
                {props.description3 &&
                    <FontAwesomeIcon icon={faPen}></FontAwesomeIcon>} {props.description3}
            </span>
            </div>
        </div>
    )
}


