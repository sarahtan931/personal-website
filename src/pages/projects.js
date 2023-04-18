import React, { PureComponent } from 'react';
import Project from '../components/project';
import ChaChing from '../assets/ChaChingMockup.png';
import InTouch from '../assets/InTouchMockup.png';
import TransitTracer from '../assets/TransitTracerMockup.png';
import RacingGame from '../assets/RacingGame.png'
import HappyPet from '../assets/HappyPet.png'
import eHacksWebsite from '../assets/eHacksWebsiteMock.png';
import SarahGraceDesigns from '../assets/sarahgracedesignsMockup.png';

export default class projects extends PureComponent {
    toolsChaChing = ['JavaScript', 'HTML', 'CSS', 'Node.js', 'Express', 'Figma'];
    toolsInTouch = ['React.js', 'Express', 'Figma', 'Python', 'Scikit Learn', 'Pandas', 'NumPy']
    toolsEhacks = ['React.js', 'Express', 'Figma', 'MongoDB', 'Git', 'Restful APIs', 'Node.js', 'Sass', 'JWT Auth'];
    toolsTT = ['Arduino', 'C++', 'Microsoft Excel']
    toolsGame = ['C#', 'Unity', 'UML Diagrams']
    toolsSGD = ['React.js', 'Node.js', 'Express', 'Figma', 'PostgreSQL', 'AWS S3 Bucket', 'JWT Auth'];
    toolsRacingGame = ['Unity', 'C#']
    toolsHappyPet = ['React Native', 'Express','Node.js', 'MongoDB', 'Spoonacular API', 'Aspose API']

    render() {
        return (
            <div className='light-blue-background'>
                <div class="title-box">
                    <h1>Projects</h1>
                </div>
                <div class="projects-background" id="project-page">
                    <div className="projects-top"
                    >
                         <Project title="HappyPet 🐕" about="Happy" place="Engineering Capstone" img={HappyPet}
                            about1="Happy pet is a mobile application aimed to provide nutritional information for dogs and cats. 
                            HappyPet supports queries by ingredient name and provides barcoding scanning for product UPC code. Users can create profiles for each of their pets, and HappyPet will return 
                            tailored results for each pet with recommendations and warnings for consumption. "
                            gitlink="https://github.com/sarahtan931/HappyPet"
                            tools={this.toolsHappyPet}
                        ></Project>
                        <Project title="Sarah Grace Designs🧶" about="" place="" img={SarahGraceDesigns}
                            about1="One good thing about my pandemic boredom is my new found interest for crocheting and crafting. This ecommerce website combines my love for crocheting and coding and showcases my favourite personal handmade designs."
                            gitlink="https://github.com/sarahtan931/Sarah-Grace-Designs"
                            tools={this.toolsSGD}
                        ></Project>
                       
                    </div>
                    <div className="projects-bottom">
                    <Project title="eHacks Website &#10024;" about="eHacks" place="Enactus Hacks 2022" img={eHacksWebsite}
                            about1="eHacks is a technology and business focused Hackathon. Their website includes user accounts, applications and information on the hackathon"
                            about2=" This website was developed with the eHacks development team and includes responsive design, documentation and scalable code."
                            link="https://ehacks.ca/"
                            gitlink="https://github.com/sarahtan931/eHacks-Website-2021"
                            tools={this.toolsEhacks}
                        ></Project>
                        <Project title="Multiplayer Racing Game  🚗" about="Western University" place="Western University" img={RacingGame}
                            about1="Multiplayer Racing Game is a driving RPG game consists of two worlds with the option to player in singular and multiplayer mode. 
                            The player(s) goal is to complete levels whilst encountering obstacles, winning high scores and buying new and improved vehicles."
                            gitlink="https://github.com/sarahtan931/Multiplayer-Racing-Game"
                            tools={this.toolsRacingGame}
                        ></Project>
                       
                    </div>
                    <div className='projects-bottom'>
                    <Project title="InTouch &#9996;" about="Western University" place="Enactus Hacks 2020" img={InTouch}
                            about1="InTouch is an app to help university students who are affected by mental health issues.
                 InTouch's goal is to help students make meaningful relationships and get academic support. Each semester a student
                  is paired with other students who are
                taking the same course. Our app uses a machine-learning clustering algorithm to pair students
                 based on common interests."
                            tools={this.toolsInTouch}
                        ></Project>
                        <Project title="Cha Ching  &#128184;" about="Western University" place="Hack Western 2020" img={ChaChing}
                            about1="Cha-Ching is a chore app created for Hack Western 7. It is aimed at making the mundane fun, whilst teaching financial literacy skills. Cha-Ching provides parents with educational
                tools to help teach financial literacy by doing household chores. This mobile application incorporates the fundamental
                ideas of investing, loaning, and spending in a simple yet effective way."
                            link="https://devpost.com/software/cha-ching-yoh06m"
                            tools={this.toolsChaChing}
                        ></Project>
                        {/*<Project title="Transit Tracer &#128654;" about="Western University" place="SheHacks 2019" img={TransitTracer}
                about1="Transit Tracer is a fully functional user interface prototype for an LED bus
                 route indicator. Transit Tracer highlights bus stops using GPS data to improve accessibility
                  for public transit. Using the open data provided by London Transit, we created Arduino code to 
                get the GPS location of the bus and compare it with the extracted data from London Transit."
                link="https://devpost.com/software/transit-tracer"
                tools ={this.toolsTT}
        ></Project>*/}
                        {/*}
                <Project title="Caught in a Jam &#127918;" about="Western University" place="" img={CaughtInAJam}
                about1="Caught in a Jam is a fully functional RPG game. Caught in a Jam is a 2D game,
                 where the player can encounter new enemies and missions while navigating through
                  multiple worlds."
                about2=" This game includes character customization, different types of combat,
                and player movement. Caught in a Jam incorporates player stats and enemy stats to make 
                the game more interactive and challenging for the user."
                tools ={this.toolsGame}
                gitlink = "https://github.com/sarahtan931/Caught-in-a-Jam"
        ></Project> */}
                    </div>
                </div>
            </div>
        )
    }
}
