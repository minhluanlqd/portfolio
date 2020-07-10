import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';
import avatar from '../../assets/images/MyAvatar.png';
import {Icon} from '@iconify/react';
import leetcodeIcon from '@iconify/icons-simple-icons/leetcode';


class LandingPage extends Component{

    render(){
        return(
            <div style={{margin: 'auto', width: '100%'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img src={avatar} alt="Avatar" className="avatar-img"/>
                        <div className="banner-text">
                            <h1>Software Engineer with incredible passion on Machine Learning</h1>
                            <hr/>

                            <p>HTML/CSS/JavaScript | ReactJS/Redux/Hooks | Android | Python | Neuron Network-Deep Learning</p>

                            <div className="social-links">
                            {/* LinkedIn */}
                                <a href="https://www.linkedin.com/in/luanminhtran/" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true"/>
                                </a>

                            {/* GitHub */}
                                <a href="https://github.com/minhluanlqd" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true"/>
                                </a>

                            {/* LinkedIn */}
                                <a href="https://leetcode.com/luan_tran/" rel="noopener noreferrer" target="_blank">
                                    <Icon icon={leetcodeIcon} style={{color: 'white', fontSize: '5em', padding: '8px'}}/>
                                </a>
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }

}

export default LandingPage;