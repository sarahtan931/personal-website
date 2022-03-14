import React  from 'react';
import { Link } from "react-scroll";

export default function button2(props) {

    return (
        <div className="btn btn--white btn--animated">
            <span className="btn2-span">
            <Link 
             className="btn2-link"
             activeClass="active"
             spy={true}
             to={props.link}
             smooth={true}
             offset={-50}
             duration={500}
             >{props.name}</Link>
            </span>
        </div>
        
        
    )
}

