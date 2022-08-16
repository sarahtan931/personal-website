import React from 'react';
import Button2 from "../components/button2";
import SkillList from '../components/skillList';
import Experience from "../components/experience";
import ResumePDF from "../assets/SarahTan2021.pdf";
import { faPython, faJs, faMicrosoft } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Geotab from "../assets/Geotab.jfif";
import Western from "../assets/Western.jpg";
import ehacks from "../assets/ehacks_logo.png";
import westernai from "../assets/WAI.jfif";
import google from '../assets/google.png';

import useIsInViewport from 'use-is-in-viewport'
import { faAward, faBookOpen, faGraduationCap } from '@fortawesome/free-solid-svg-icons';

export default function Resume() {
    const [isInViewport, targetRef] = useIsInViewport();
    const [viewPortResume1, resumeTargetRef1] = useIsInViewport();
    const [viewPortResume2, resumeTargetRef2] = useIsInViewport();
    const [viewPortResume3, resumeTargetRef3] = useIsInViewport();
    const [viewPortResume4, resumeTargetRef4] = useIsInViewport();

    return (
        <div className="resume-background" id="resume-page">
            <div className="resume-button" >
                <div className="btn btn--white btn--animated">
                    <span className="btn2-span">
                        <a className="btn2-link" href={ResumePDF}
                        >Resume PDF</a>
                    </span>
                </div>
            </div>
            <div className="professional">
                <div className="resume-header">
                    <div className="resume-title">
                        01 PROFESSIONAL
                        <br />
                        <span className="title-lower">
                            “KNOWLEDGE IS POWER”
                        </span>
                    </div>
                </div>
                <div className="skill-box">
                    <div className="skill-inner-box">
                        <div className="skill-lang">
                            Python
                        </div>
                        <div className="skill">
                            <div className={isInViewport ? 'python-percent' : 'hidden'}>
                                <div className='percent-text'>
                                    <FontAwesomeIcon icon={faPython} ></FontAwesomeIcon>  95%
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="skill-inner-box">
                        <div className="skill-lang">
                            Javascript
                        </div>
                        <div className="skill">
                            <div className={isInViewport ? 'javascript-percent' : 'hidden'}>
                                <div className='percent-text'>
                                    <FontAwesomeIcon icon={faJs} ></FontAwesomeIcon>  90%</div></div>
                        </div>
                    </div>
                    <div className="skill-inner-box">
                        <div className="skill-lang">
                            C#
                        </div>
                        <div className="skill">
                            <div className={isInViewport ? 'csharp-percent' : 'hidden'}>
                                <div className='percent-text'>
                                    <FontAwesomeIcon icon={faMicrosoft} ></FontAwesomeIcon> 85%</div></div>
                        </div>
                    </div>
                </div>
                <div className="skills-extra" ref={targetRef}>
                    <SkillList ></SkillList>
                </div>
            </div>

            <div className="experience" >
                <div className="experience-section">
                    <div className="resume-title">02 EXPERIENCE <br /><span className="title-lower">LEADERSHIP. TECHNICAL. WORK.</span>  </div>
                    <div className="experience-box" >
                        <div className='experiencefade' >
                            <Experience
                                date="May 2022 - August 2022"
                                title="Software Engineer Intern"
                                place="Google"
                                location="Mountain View"
                                img={google}
                                description1="Used TypeScript, JavaScript, LitElement, and Polymer to develop new features and UI data visualizations to provide insights into user experience and help internal developers drive chrome improvements. The project is ahead of schedule and has up to 100% testing coverage via unit tests. "
                                description2='Collaborated with stakeholders, created multiple comprehensive design documents, and delivered a design presentation for new features. The presentation earned top reviews and will be used in future development. '
                            ></Experience>
                        </div>
                        <div className={!viewPortResume1 ? 'experiencenofade' : 'experiencefade'} ref={resumeTargetRef1}>
                            <Experience
                                date="May 2021 - Present"
                                title="Software Developer Intern"
                                place="Geotab"
                                location="Oakville, ON"
                                img={Geotab}
                                description1="Designed and implemented new features for the Geotab MyAdmin Website that will impact 100+ daily users using SQL, C#, and Angular"
                                description2='Utilized test-driven development best practices to deliver high-quality maintainable code'
                                description3='Participated in code reviews and daily standups to facilitate agile development methodologies'
                            ></Experience>
                        </div>
                        <div className={!viewPortResume2 ? 'experiencenofade' : 'experiencefade'} ref={resumeTargetRef2}>
                            <Experience
                                date="June 2021 - Present"
                                img={ehacks}
                                location="London, ON"
                                title="VP of Technology and User Experience"
                                place="eHacks"
                                description1="Provided technical leadership to incoming developers through mentorship and code reviews and guided the team towards successful project delivery whilst ensuring high standards of software quality."
                                description2="Collaborated with team members to plan, design, and develop the eHacks website using the MERN stack "
                            ></Experience>
                        </div>
                        <div className={!viewPortResume3 ? 'experiencenofade' : 'experiencefade'} ref={resumeTargetRef3}>
                            <Experience
                                date="May 2020 - August 2020"
                                title="Undergraduate Summer Research Intern"
                                img={Western}
                                place="Western University"
                                location="London, ON"
                                description1="Designed an electric vehicle charging and range prediction model that is 92% accurate using various machine learning algorithms and preprocessing techniques written in Python and Scikit-learn to reduce customer range anxiety"
                                description2="Utilized remote working tools including team schedules, virtual meetings, and Git to communicate and deliver a high-quality final product by the company’s deadline"
                            ></Experience>
                        </div>

                        <div className={!viewPortResume4 ? 'experiencenofade' : 'experiencefade'} ref={resumeTargetRef4}>
                            <Experience
                                date="June 2020 - May 2020"
                                title="Director of Education"
                                place="Western AI"
                                location="London, ON"
                                img={westernai}
                                description1="Created curriculums, machine learning models and interactive code tutorials to teach machine learning and empower the members of Western AI with knowledge for their personal growth "
                                description2="Taught ethics and business applications of AI to broaden the range of students with opportunities in Western AI "
                            ></Experience>
                        </div>

                    </div>

                </div>
            </div>

            <div className="education"  >
                <div className="resume-title education-title">
                    03 EDUCATION
                </div>
                <div className="education-grid">
                    <div className='education-left'>
                        <div className='education-box'>
                            <p className='education-subtitle'>
                                <FontAwesomeIcon icon={faGraduationCap}></FontAwesomeIcon>&nbsp;
                                Western University</p>
                            <p className='education-info'>
                                Bachelor of Engineering Science,
                                Software Engineering <br></br>
                                Deans honor list with 3.9 GPA (2019, 2020)
                            </p>
                        </div>
                        <div className='education-box'>
                            <p className='education-subtitle'>
                                <FontAwesomeIcon icon={faAward}></FontAwesomeIcon>&nbsp;
                                Awards</p>
                            <p className='education-info'>
                                Western Scholarship of Excellence <br></br>
                                Undergraduate Summer Research Internship
                            </p>
                        </div>
                    </div>
                    <div className='study'>
                        <p className='education-subtitle'>
                            <FontAwesomeIcon icon={faBookOpen}></FontAwesomeIcon>&nbsp;
                            Key Area Of Study</p>
                        <p className='class-list'>
                            <ul>
                                <li> Web Technologies (acheived 100%)</li>
                                <li> Algorithms and Data Structures (achieved 100%)</li>
                                <li> Database Management Systems</li>
                                <li> Software Requirements and Analysis</li>
                                <li> Software Construction</li>
                                <li> Software Design</li>
                            </ul>
                        </p>

                    </div>
                </div>
            </div>


            <div className="projects">
                <div className="resume-title projects-title">
                    04 PROJECTS
                </div>
                <div className="projects-button">
                    <Button2 name="Projects" link="project-page" ></Button2>
                </div>
            </div>
        </div>
    )

}
