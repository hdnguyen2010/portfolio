import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
    render() {
        return (
            <div style={{width: '100%', margin: 'auto'}}>
				<Grid className="landing-grid">
					<Cell col={12}>
						<img
							alt="avatar"
							style={{paddingTop: '80px', width: '400', height: '350px'}}
							src="/images/avatar_2.png"
							
						/>
						<div className="banner-text">
							<h1>Student</h1>
							<h2>I am studying for a B.S. in Computer Game Development at Lamar University. I expect to graduate in Fall 2021.</h2>
							<hr/>
							<h2>Skills: JAVA | JavaScript | Bootstrap | HTML/CSS | React</h2>
							<hr/>
							<div className="social-links">
								{/*LinkedIn*/}
								<a href="https://www.linkedin.com/in/hdnguyen2010" rel="noopener noreferrer" target="_blank">
									<i className="fa fa-linkedin-square" aria-hidden="true" />
								</a>
							{/*Github*/}
								<a href="https://github.com/hdnguyen2010" rel="noopener noreferrer" target="_blank">
									<i className="fa fa-github-square" aria-hidden="true" />
								</a>
							{/*Instagram*/}
								<a href="https://www.instagram.com/jonnyboy8p/" rel="noopener noreferrer" target="_blank">
									<i className="fa fa-instagram" aria-hidden="true" />
								</a>
							{/*Facebook*/}
								<a href="https://www.facebook.com/Jonny5Win/?viewas=100000686899395" rel="noopener noreferrer" target="_blank">
									<i className="fa fa-facebook" aria-hidden="true" />
								</a>
							</div>
						</div>
					</Cell>
				</Grid>
			</div>
        )
    }
}

export default Landing;