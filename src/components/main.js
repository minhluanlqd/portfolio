import React, {Suspense} from 'react';
import {Switch, Route} from 'react-router-dom';
import LandingPage from '../components/LandingPage/landingpage';

const Contact = React.lazy(() => import('../components/Contact/contact'));
const AboutMe = React.lazy(() => import('../components/AboutMe/aboutme'));
const Projects = React.lazy(() => import('../components/Projects/projects'));
const Resume = React.lazy(() => import('../components/Resume/resume'))

const Main = () => (
    <Switch>
        <Route exact path="/" component={LandingPage}/>
        <Route 
            path="/aboutme" 
            render={() => (
                <Suspense fallback={<div>Loading ...</div>}>
                <AboutMe/>
                </Suspense>
            )}
        />
        <Route 
            path="/contact" 
            render={() => (
                <Suspense fallback={<div>Loading ...</div>}>
                <Contact/>
                </Suspense>
            )}
        />
        <Route 
            path="/resume" 
            render={() => (
                <Suspense fallback={<div>Loading ...</div>}>
                <Resume/>
                </Suspense>
            )}
        />
        <Route 
            path="/projects" 
            render={() => (
                <Suspense fallback={<div>Loading ...</div>}>
                <Projects/>
                </Suspense>
            )}
        />
    </Switch>
)

export default Main;