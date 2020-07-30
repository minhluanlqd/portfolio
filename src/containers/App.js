import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from '../components/main';
import { NavLink} from 'react-router-dom';
import MouseParticles from 'react-mouse-particles';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <MouseParticles g={1} color="random" cull="col,image-wrapper"/>
      <Layout>
          <Header className="header-color" title={<NavLink style={{textDecoration: 'none', color: 'white'}} exact to="/">MyPortfolio</NavLink>} scroll>
              <Navigation>
                  <NavLink activeStyle={{color: '#fa923f', textDecoration: 'bold'}} to="/resume">Resume</NavLink>
                  <NavLink activeStyle={{color: '#fa923f', textDecoration: 'bold'}} to="/aboutme">About Me</NavLink>
                  <NavLink activeStyle={{color: '#fa923f', textDecoration: 'bold'}} to="/projects">Projects</NavLink>
                  <NavLink activeStyle={{color: '#fa923f', textDecoration: 'bold'}} to="/contact">Contact</NavLink>
              </Navigation>
          </Header>
          <Drawer title={<NavLink style={{textDecoration: 'none', color: 'black'}} exact to="/">MyPortfolio</NavLink>}>
              <Navigation>
                <NavLink activeStyle={{color: '#fa923f', textDecoration: 'bold'}} to="/resume">Resume</NavLink>
                <NavLink activeStyle={{color: '#fa923f', textDecoration: 'bold'}} to="/aboutme">About Me</NavLink>
                <NavLink activeStyle={{color: '#fa923f', textDecoration: 'bold'}} to="/projects">Projects</NavLink>
                <NavLink activeStyle={{color: '#fa923f', textDecoration: 'bold'}} to="/contact">Contact</NavLink>
              </Navigation>
          </Drawer>
          <Content>
              <div className="page-content" />
              <Main/>
          </Content>
      </Layout>
  </div>

    );
  }
}

export default App;