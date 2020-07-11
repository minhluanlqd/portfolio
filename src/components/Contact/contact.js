import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';
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
                        
                    </Cell>
                </Grid>
            </div>
        )
    }

}

export default Contact;