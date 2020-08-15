import React, { Component } from 'react';
import { Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, CardText } from 'react-mdl';

class Projects extends Component {
    render() {
        return (
            <Grid className="projects-grid">
	    			{/* Project 1 */}
	    			<Cell col={6}>
	    			<Card shadow={5} style={{width: '450px', margin: 'auto'}}>

	    				<CardTitle style={{height: '250px', background:'url(./images/vit-prev.PNG) center / cover'}}/>
	    			
	    				<CardText>
	    				<h5>Vitamin-DB</h5>
	    					An app that keeps track of user’s health history, eye prescription, immunization and doctor information
	    				</CardText>
	    	
	    				<CardActions border>
	    				<Button href="https://www.youtube.com/watch?v=vEFQblKqqkI&feature=youtu.be" colored>Video</Button>
	    				<Button href="https://github.com/hdnguyen2010/vitamin-db" colored>Code</Button>
	    				<Button href="http://vitamin-db.herokuapp.com/" colored>Demo</Button>
	    				</CardActions>
	    				<CardMenu style={{color: '#fff'}}>
	    				</CardMenu>
	    			</Card>
	    			</Cell>
	    			<Cell col={6}>
	    			{/* Project 2 */}
	    			<Card shadow={5} style={{width: '450px', margin: 'auto'}}>
	    				<CardTitle style={{height: '250px', background:'url(./images/react.png) center / cover'}}/>
	    				<CardText>
	    				<h5>Travel-Consensus</h5>
	    					Web Application designed to help users reach an agreement with travel arrangements
	    				</CardText>
	    				<CardActions border>
	    				<Button href="https://github.com/hdnguyen2010/travel-consensus" colored>Code</Button>
	    				</CardActions>
	    				<CardMenu style={{color: '#fff'}}>
	    				</CardMenu>
	    			</Card>
	    			</Cell>

	    			{/* Project 3 */}
	    			<Cell col={6}>
	    			<Card shadow={5} style={{width: '450px', margin: 'auto'}}>
	    				<CardTitle style={{height: '250px', background:'url(./images/port-prev.png) center / cover'}}/>
	    				<CardText>
	    				<h5>My Portfolio</h5>
	    					A portfolio project that is bootstrapped with Create React App
	    				</CardText>
	    				<CardActions border>
	    				<Button href="/" colored>website</Button>
	    				<Button href="https://github.com/hdnguyen2010/my-portfolio" colored>Code</Button>
	    				</CardActions>
	    				<CardMenu style={{color: '#fff'}}>
	    				</CardMenu>
	    			</Card>
	    			</Cell>
	    			{/* Project 4 */}
	    			<Cell col={6}>
	    			<Card shadow={5} style={{width: '450px', margin: 'auto'}}>
	    				<CardTitle style={{height: '250px', background:'url(./images/coming-soon.png) center / cover'}}/>
	    				<CardText>
	    				<h5>Project Place Holder</h5>
	    				</CardText>
	    				<CardActions border>
	    				<Button href="/" colored>website</Button>
	    				<Button href="/" colored>Code</Button>
	    				</CardActions>
	    				<CardMenu style={{color: '#fff'}}>
	    				</CardMenu>
	    			</Card>
	    			</Cell>
	    			{/* Project 5 */}
	    			<Cell col={6}>
	    			<Card shadow={5} style={{width: '450px', margin: 'auto'}}>
	    				<CardTitle style={{height: '250px', background:'url(./images/coming-soon.png) center / cover'}}/>
	    				<CardText>
	    				<h5>Project Place Holder</h5>
	    				</CardText>
	    				<CardActions border>
	    				<Button href="/" colored>website</Button>
	    				<Button href="/" colored>Code</Button>
	    				</CardActions>
	    				<CardMenu style={{color: '#fff'}}>
	    				</CardMenu>
	    			</Card>
	    			</Cell>
	    		{/* Project 6 */}
	    			<Cell col={6}>
	    			<Card shadow={5} style={{width: '450px', margin: 'auto'}}>
	    				<CardTitle style={{height: '250px', background:'url(./images/coming-soon.png) center / cover'}}/>
	    				<CardText>
	    				<h5>Project Place Holder</h5>
	    				</CardText>
	    				<CardActions border>
	    				<Button href="/" colored>website</Button>
	    				<Button href="/" colored>Code</Button>
	    				</CardActions>
	    				<CardMenu style={{color: '#fff'}}>
	    				</CardMenu>
	    			</Card>
	    			</Cell>


	    		</Grid>
        )
    }
}

export default Projects;