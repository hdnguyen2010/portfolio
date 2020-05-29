import React, { Component } from 'react';
import { Card, CardTitle, CardActions, Button, CardMenu, CardText } from 'react-mdl';

class Projects extends Component {
    render() {
        return (
            <div className="projects-grid">
	    			{/* Project 1 */}
	    			<Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>

	    				<CardTitle style={{color: 'black', height: '176px', background:'url(/images/vit-prev.png) center / cover'}}>Vitamin-DB</CardTitle>
	    			<div className="hover-content">
	    				<CardText>
	    					An app that keeps track of user’s health history, eye prescription, immunization and doctor information
	    				</CardText>
	    			</div>
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
	    				<CardTitle style={{color: 'black', height: '176px', background:'url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png) center / cover'}}>Travel-Consensus</CardTitle>
	    				<CardText>
	    					Web Application designed to help users reach an agreement with travel arrangements
	    				</CardText>
	    				<CardActions border>
	    				<Button href="https://github.com/hdnguyen2010/travel-consensus" colored>GitHub</Button>
	    				</CardActions>
	    				<CardMenu style={{color: '#fff'}}>
	    				</CardMenu>
	    			</Card>

	    			{/* Project 3 */}
	    			<Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
	    				<CardTitle style={{color: 'black', height: '176px', background:'url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png) center / cover'}}>My Portfolio</CardTitle>
	    				<CardText>
	    					A portfolio project that is bootstrapped with Create React App
	    				</CardText>
	    				<CardActions border>
	    				<Button href="https://github.com/hdnguyen2010/my-portfolio" colored>GitHub</Button>
	    				<Button href="/" colored>website</Button>
	    				</CardActions>
	    				<CardMenu style={{color: '#fff'}}>
	    				</CardMenu>
	    			</Card>
	    			
	    		</div>
        )
    }
}

export default Projects;