import React, { Component } from 'react';
import {Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl';
import avatar from '../../assets/images/MyAvatar.png';

class Contact extends Component{

    render(){
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Luan Tran</h2>
                        <img src={avatar} alt="My avatar" className="avatar-img"/>
                        <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>Rising Senior at Rutgers University</p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr/>
                        
                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{fontSize: "30px", fontFamily: "Anton"}}>
                                        <i className="fa fa-phone-square" aria-hidden="true"/>
                                        (732) 532 7512
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize: "30px", fontFamily: "Anton"}}>
                                        <i className="fa fa-envelope" aria-hidden="true"/>
                                        minhluanlqd@gmail.com 
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize: "30px", fontFamily: "Anton"}}>
                                        <i className="fa fa-linkedin-square" aria-hidden="true"/>
                                        <a href="https://www.linkedin.com/in/luanminhtran/" rel="noopener noreferrer" target="_blank" style={{color: "black", textDecoration: "none"}}>
                                            LinkedIn
                                        </a>
                                    </ListItemContent>
                                </ListItem>
                            </List>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }

}

export default Contact;