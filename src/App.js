
import './App.scss';
import Navigation from './components/navigation';
import Home from './pages/home';
import About from './pages/about'
import Projects from './pages/projects';
import Resume from './pages/resume';
import React, { Component } from 'react';
import NavigationMobile from './components/navigationMobile';

class App extends Component {
  constructor() {
    super();
    this.state = {
    }
}

componentWillMount() {
    window.addEventListener('scroll', this.navHighlighter);
}

navHighlighter() {}

/*<div className='nav-top'>
        <NavigationMobile></NavigationMobile>
        </div> */

render(){
  return (
    <div class="body">
      <div class="container">
        <div className='flex-nav'>
        <div class="nav-background">
        <Navigation></Navigation>
        </div>
        </div>
     
        <div className='nav-top'>
          <NavigationMobile></NavigationMobile>
          </div>
        <div className="content">
          <Home title="home-page" id="home-page"></Home>
          <About title="about-page"></About>
          <Projects title="project-page"></Projects>
          <Resume title="resume-page"></Resume>
        </div>
      </div>
    </div>
  );
}
}

export default App;
