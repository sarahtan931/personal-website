import React, { Component } from 'react'
import Cheerleading from "../assets/Cheerleading.jpg";
import Hiking from "../assets/Hiking.jpg";
import Reading from "../assets/Reading.jpg";
import Crochet from "../assets/Crochet.jpg";
import Picnic from "../assets/Picnic.jpg";
import Coding from "../assets/Coding.jpg";
import Plant from "../assets/PlantMom.jpg";
import Coffee from "../assets/Coffee.jpg";

export default class about extends Component {
    constructor() {
        super();
        this.state = { text: '' }
    }

    handleChange = param => e => {
        this.setState({ text: param });
    }

    onMouseout(e) {
        this.setState({ text: '' })
    }


    render() {
        return (
            <div className="about-box" id="about-page">
                <div className="about-img-page">
                    <div class="img-description">
                        I am ...
                        <br className='mobile-break'/> 
                        <span className="description" id="description">{this.state.text}</span></div>
                    <div className="img-box">
                        <img class="img-about" src={Cheerleading} alt="" onMouseEnter={this.handleChange("A Western Cheerleader ✨")} onMouseLeave={this.onMouseout.bind(this)} />
                        <img class="img-about" src={Coffee} alt="" onMouseEnter={this.handleChange("A Coffee Lover☕")} onMouseLeave={this.onMouseout.bind(this)} />
                    
                       <img class="img-about" src={Reading} alt="" onMouseEnter={this.handleChange("A Book Worm 📚")} onMouseLeave={this.onMouseout.bind(this)} />
                       <img class="img-about" src={Hiking} alt="" onMouseEnter={this.handleChange("An Outdoors Adventurer 🌄")} onMouseLeave={this.onMouseout.bind(this)} />
                     
                        <img class="img-about" src={Crochet} alt="" onMouseEnter={this.handleChange("An Artsy Crocheter🧶")} onMouseLeave={this.onMouseout.bind(this)} />
                      
                        <img class="img-about" src={Plant} alt="" onMouseEnter={this.handleChange("A Plant Mom💐")} onMouseLeave={this.onMouseout.bind(this)} />
                    </div>
                </div>
            </div>
        )
    }
}
