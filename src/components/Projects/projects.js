import React, { Component } from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText} from 'react-mdl';
import Background from '../../assets/images/RutgersMenu.png';

class Projects extends Component{

    constructor(props){
        super(props);
        this.state = {
            activeTab: 0
        };
    }

    toggleCategories(){
        if(this.state.activeTab === 0){
            return(
                <div className="projects-grid">
                    {/* Project 1 */}

                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: 'black', height: '250px', background: `url(${Background}) center / cover`}}>
                            Rutgers Menu
                        </CardTitle>
                        
                        <CardText>
                            Hello Hello Hello
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share"/>
                        </CardMenu>
                    </Card>

                    {/* Project 2 */}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: 'black', height: '250px', background: `url(${Background}) center / cover`}}>
                            Rutgers Menu
                        </CardTitle>
                        
                        <CardText>
                            Hello Hello Hello
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share"/>
                        </CardMenu>
                    </Card>

                    {/* Project 3 */}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: 'black', height: '250px', background: `url(${Background}) center / cover`}}>
                            Rutgers Menu
                        </CardTitle>
                        
                        <CardText>
                            Hello Hello Hello
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share"/>
                        </CardMenu>
                    </Card>
                </div>
            )
        }else if(this.state.activeTab === 1){
            return(
                <div>
                    <h1>NodeJS</h1>
                </div>
            )
        }else if(this.state.activeTab === 2){
            return(
                <div>
                    <h1>Java/Android</h1>
                </div>
            )
        }
    }

    render(){
        return(
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>ReactJS/Redux/Hooks</Tab>
                    <Tab>NodeJS/MongoDB</Tab>
                    <Tab>Java/Android</Tab>
                </Tabs>
                <Grid>
                    <Cell col={12}>
                        <div className="content">
                            {this.toggleCategories()}
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }

}

export default Projects;