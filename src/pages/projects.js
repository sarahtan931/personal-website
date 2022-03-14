import React, { PureComponent } from 'react';
import Project from '../components/project';
import ChaChing from '../assets/ChaChingMockup.png';
import InTouch from '../assets/InTouchMockup.png';
import TransitTracer from '../assets/TransitTracerMockup.png';
import CaughtInAJam from '../assets/ShumpMockup.png';
import eHacksWebsite from '../assets/eHacksWebsiteMock.png';

export default class projects extends PureComponent {
    toolsChaChing = ['JavaScript', 'HTML', 'CSS', 'Node.js', 'Express', 'Figma'];
    toolsInTouch = ['React.js', 'Express', 'Figma']
    toolsEhacks =  ['React.js', 'Express', 'Figma', 'MongoDB', 'Git', 'Asana', 'Node.js'];
    toolsTT = ['Arduino', 'C++', 'Microsoft Excel']
    toolsGame = ['C#', 'Unity', 'UML Diagrams']

    render() {
        return (
            <div className='light-blue-background'>
            <div class = "title-box">
            <h1>Projects</h1>
        </div>
            <div class="projects-background" id="project-page">
                <div className="projects-top"
                > 
                 <Project title="eHacks Website &#10024;" about="eHacks" place="Enactus Hacks 2022" img={eHacksWebsite}
                about1="The eHacks website is a portal for all things eHacks. It includes user accounts, applications and information on the eHacks hackathon"
                about2=" This website was developed using good coding practices 
                including responsive design and well documented, readable and clean code"
                link="https://ehacks.ca/" 
                tools ={this.toolsEhacks}
             ></Project>
                <Project title="InTouch &#9996;" about="Western University" place="Enactus Hacks 2020" img={InTouch}
                about1="InTouch is an app to help university students who are affected by mental health issues.
                 InTouch's goal is to help students make meaningful relationships and get academic support 
                 through this virtual era. "
                about2="Each semester a student is paired with another student, who is
                taking the same course. Our app uses a machine-learning clustering algorithm to pair students
                 who have similar interests to create like-minded student to student connections."
                 tools={this.toolsInTouch}
                ></Project>
                </div>

                <div className="projects-bottom">
                <Project title="Cha Ching  &#128184;" about="Western University" place="Hack Western 2020" img={ChaChing}
                about1="Cha-Ching is a chore app created for Hack Western 7."
                about2="It is aimed at making the mundane fun, whilst teaching financial literacy skills. Cha-Ching provides parents with educational
                tools to help teach financial literacy by doing household chores. Cha-Ching incorporates the fundamental
                ideas of investing, loaning, and spending in a simple yet effective way."
                link="https://devpost.com/software/cha-ching-yoh06m"
                tools={this.toolsChaChing}
                ></Project>
                <Project title="Transit Tracer &#128654;" about="Western University" place="SheHacks 2019" img={TransitTracer}
                about1="Transit Tracer is a fully functional user interface prototype for an LED bus
                 route indicator. Transit Tracer highlights bus stops using GPS data to improve accessibility
                  for public transit. "
                about2="Using the open data provided by London Transit, we created Arduino code to, in theory, 
                get the GPS location of the bus and compare it with the extracted data from London Transit."
                link="https://devpost.com/software/transit-tracer"
                tools ={this.toolsTT}
             ></Project>
                </div>
                <div className='projects-bottom'>
                <Project title="Caught in a Jam &#127918;" about="Western University" place="" img={CaughtInAJam}
                about1="Caught in a Jam is a fully functional RPG game. Caught in a Jam is a 2D game,
                 where the player can encounter new enemies and missions while navigating through
                  multiple worlds."
                about2=" This game includes character customization, different types of combat,
                and player movement. Caught in a Jam incorporates player stats and enemy stats to make 
                the game more interactive and challenging for the user."
                tools ={this.toolsGame}
                gitlink = "https://github.com/sarahtan931/Caught-in-a-Jam"
             ></Project>
             </div>
            </div>
            </div>
        )
    }
}
