import React, { PureComponent } from 'react'

export default function experience(props) {

        return (
            <div className="resume-experience">
               <span className="date-resume"> {props.date}</span>     <br />
               <span className="title-resume">{props.title}</span>    <br />
               <span className="place-resume">{props.place}</span>    <br />
                <span className="description-resume"><br />
                {props.description1}
                <br />
                {props.description2}
                <br />
                {props.description3}
                </span>
            </div>
        )
    }


