import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText } from 'react-mdl';

class Projects extends Component {
    render() {
        return (
            <div className="projects-grid">
	    			{/* Project 1 */}
	    			<Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
	    				<CardTitle style={{color: 'black', height: '176px', background:'url(/images/vit-prev.png) center / cover'}}>Vitamin-DB</CardTitle>
	    				<CardText>
	    					An app that keeps track of user’s health history, eye prescription, immunization and doctor information
	    				</CardText>
	    				<CardActions border>
	    				<Button href="https://www.youtube.com/watch?v=vEFQblKqqkI&feature=youtu.be" colored>Video</Button>
	    				<Button href="https://github.com/hdnguyen2010/vitamin-db" colored>GitHub</Button>
	    				<Button href="http://vitamin-db.herokuapp.com/" colored>LiveDemo</Button>
	    				</CardActions>
	    				<CardMenu style={{color: '#fff'}}>
	    				</CardMenu>
	    			</Card>
	    			
	    			{/* Project 2 */}
	    			<Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
	    				<CardTitle style={{color: 'black', height: '176px', background:'url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png) center / cover'}}>React Project #2</CardTitle>
	    				<p>
	    					Lorem Ipsum is simply dummy text of the printing and typesetting industry.
	    				</p>
	    				<CardActions border>
	    				<Button colored>GitHub</Button>
	    				</CardActions>
	    				<CardMenu style={{color: '#fff'}}>
	    				</CardMenu>
	    			</Card>
	    			
	    		</div>
        )
    }
}

export default Projects;