import React, { PureComponent } from 'react';
import { Link } from "react-scroll";

export default function button(props) {
    return (
        <div class="btn btn-one">
            <span>
                <Link className="btn-link"
                    activeClass="active"
                    spy={true}
                    to={props.link}
                    smooth={true}
                    offset={-50}
                    duration={500}>
                     {props.name}
                </Link>
                
            </span>
        </div>
    )

}
