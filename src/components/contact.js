import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {
    render() {
        return (
            <div className="contact-body">
				<Grid className="contact-grid">
					<Cell col={6}>
						<img
							style={{height: '350px', width: '375px'}} 
							src="/images/avatar_1.png"
							alt="avatar"
						/>
					</Cell>
					<Cell col={6}>
						<h2>Contact Me</h2>
						<hr/>
						<div className="contact-list">
						<List> 
						  <ListItem>
						    <ListItemContent 
						    style={{fontSize: '30px', fontFamily: 'Anton', color: 'white'}}>
						    
						    <a style={{color: 'black'}} href={"mailto:" + this.props.email}>
						    <i className="fa fa-envelope" aria-hidden="true"/>
						   		hdnguyen2010@gmail.com
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