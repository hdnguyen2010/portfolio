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
							src="https://egqwca.ch.files.1drv.com/y4mVju52JiZxIx6Cq4Lnc73POeYRebUfK3SOF6bORYa2EvxkTESRw5N2O4XXNbarjg9NelMFPV1eJD2pkGi1onb2SbJ4oFiQCGDTQHgaQKWMe_-VcaWJsoqYo6vtXEq76SNOwvhXa5T4vQ6PdQwZ-Xk0t3DCFthiQKKqzr5SQ1qaZQHuHCtQYKq9rcMJHED477pdWFdh6P9FNk94WeuAzglRQ?width=600&height=600&cropmode=none"
							alt="avatar"
							style={{height: '250px'}}
						/>
						<p style={{ width: '75%', margin: 'auto', paddingTop:'1em'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
					</Cell>
					<Cell col={6}>
						<h2>Contact Me</h2>
						<hr/>
						<div className="contact-list">
						<List>
						  <ListItem>
						    <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
						    <i className="fa fa-phone-square" aria-hidden="true"/>
						    (123)504-5881</ListItemContent>
						  </ListItem>

						  <ListItem>
						    <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
						    <i className="fa fa-envelope" aria-hidden="true"/>
						    hdnguyen2010@gmail.com</ListItemContent>
						  </ListItem>

						  <ListItem>
						    <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
						    <i className="fa fa-phone-square" aria-hidden="true"/>
						    (123)504-5881</ListItemContent>
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