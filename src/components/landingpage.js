import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
    render() {
        return (
            <div style={{width: '100%', margin: 'auto'}}>
				<Grid className="landing-grid">
					<Cell col={12}>
						<img 
							src="https://gao2la.ch.files.1drv.com/y4mKWziT-JPmXjxWiuroGttiUTJ1yizSKZ1vj2VljZQkb9K2Wipw25jV9hkdbekr63Pe81ReT7xonYsS0YY-SFxxZ2Q2bZKBQ08jiJ-QAvRkAd3LRRlYA1GRTsB2xQQd_4kGhi6yLWy4ntvSCLYzSxhLwB0u8cNBv8Vzer7vy10KThokweecdUYnrxyDfzaiQgw-ads17SQ-nkealrAHqU_mQ?width=718&height=744&cropmode=none"
							atl="avatar"
							className="avatar-img"
						/>
						<div className="banner-text">
							<h1>Full Stack Web Developer</h1>
							<hr/>
							<p>JAVA | JavaScript | Bootstrap | HTML/CSS | React</p>
							<div className="social-links">
								{/*LinkedIn*/}
								<a href="http://google.com" rel="noopener noreferrer" target="_blank">
									<i className="fa fa-linkedin-square" aria-hidden="true" />
								</a>
							{/*Github*/}
								<a href="http://google.com" rel="noopener noreferrer" target="_blank">
									<i className="fa fa-github-square" aria-hidden="true" />
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