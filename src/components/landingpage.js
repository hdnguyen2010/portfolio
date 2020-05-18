import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
    render() {
        return (
            <div style={{width: '100%', margin: 'auto'}}>
				<Grid className="landing-grid">
					<Cell col={12}>
						<img 
							src="https://egqxca.ch.files.1drv.com/y4mKknh6ZfeAtfB_Nv56yaLj4w_2EoWXDPLfNEOSMdBfKpVx3usODrk_SIARK117gRAxahT4iEGZRkZIYsCIJ2-juJL0WGGXo87CTvZpJP5I_HiWUbkgHV7MorjbFvQRPY_a403KZbMdb9O9orAvjuiZ5zqe6DbLzNPHQ4Zu1vQ9HLt8qyDH3Wb0xMegfQgi67q6um4Fpz1LF_UlZLz4Hgn-A?width=600&height=600&cropmode=none"
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