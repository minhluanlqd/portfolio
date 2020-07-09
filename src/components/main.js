import React from 'react';
import {Switch, Route} from 'react-router-dom';
import LandingPage from '../components/LandingPage/landingpage';
import Contact from '../components/Contact/contact';
import AboutMe from '../components/AboutMe/aboutme';
import Projects from '../components/Projects/projects';
import Resume from '../components/Resume/resume';

const Main = () => (
    <Switch>
        <Route exact path="/" component={LandingPage}/>
        <Route path="/aboutme" component={AboutMe}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/resume" component={Resume}/>
        <Route path="/projects" component={Projects}/>
    </Switch>
)

export default Main;