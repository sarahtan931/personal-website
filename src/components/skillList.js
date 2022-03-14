import React from 'react';
import SkillIcon from './skillIcon';
import { faGitAlt, faHtml5, faCss3, faGithub, faNodeJs, faCss3Alt, faAngular, faReact } from '@fortawesome/free-brands-svg-icons';
import { faBug, faCode, faCube, faCubes, faDatabase, faLaptopCode, faMobile, faMobileAlt, faServer, faTerminal, faTools, faUsers} from '@fortawesome/free-solid-svg-icons';


export default function SkillList(props) {
    return (
        <div class="skill-list-background">
           <SkillIcon skill='Object Oriented Programming' icon={faCubes}></SkillIcon>
           <SkillIcon skill='Agile Methodology' icon={faUsers}></SkillIcon>
           <SkillIcon skill='Test Driven Development' icon={faBug}></SkillIcon>
           <SkillIcon skill='Git' icon={faGitAlt}></SkillIcon>
           <SkillIcon skill='GitHub' icon={faGithub}></SkillIcon>
           <SkillIcon skill='Restful APIs' icon={faTools}></SkillIcon>
           <SkillIcon skill='Angular' icon={faAngular}></SkillIcon>
           <SkillIcon skill='React' icon={faReact}></SkillIcon>
           <SkillIcon skill='HTML' icon={faHtml5}></SkillIcon>
           <SkillIcon skill='CSS' icon={faCss3Alt}></SkillIcon>
           <SkillIcon skill='MongoDB' icon={faDatabase}></SkillIcon>
           <SkillIcon skill='Command Line' icon={faTerminal}></SkillIcon>
           <SkillIcon skill='Responsive Design' icon={faMobileAlt}></SkillIcon>
           <SkillIcon skill='Node Js' icon={faNodeJs}></SkillIcon>
           <SkillIcon skill='SQL' icon={faServer}></SkillIcon>
           <SkillIcon skill='Data and Algorithms' icon={faLaptopCode}></SkillIcon>
        </div>
        
    )

}
