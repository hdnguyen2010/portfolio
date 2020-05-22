import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {
    render() {
        return (
            <div className="contact-body">
				<Grid className="contact-grid">
					<Cell col={6}>
						<h2>Huy Nguyen</h2>
						<img
							style={{height: '350px', width: '375px'}} 
							src="/images/avatar_1.png"
							alt="avatar"
						/>
						<p style={{ width: '75%', margin: 'auto', paddingTop:'1em'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
						</p>
					</Cell>
					<Cell col={6}>
						<h2>Contact Me</h2>
						<hr/>
						<div className="contact-list">
						<List>
						  
						  <ListItem>
						    <ListItemContent 
						    style={{fontSize: '30px', fontFamily: 'Anton', color: 'white'}}>
						    <i className="fa fa-envelope" aria-hidden="true"/>
						    <a style={{color: 'white'}} href={"mailto:" + this.props.email}>
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