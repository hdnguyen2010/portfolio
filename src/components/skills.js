import React, { Component } from 'react';
import { ProgressBar, Grid, Cell } from 'react-mdl';

class Skills extends Component {
    render() {
        return (
            <Grid className="demo-grid-2">
         	<Cell col={6}>
			    <div style={{paddingTop:'20px'}}>
			    <h5>JavaScript</h5>
				<ProgressBar class="mdl-progress mdl-js-progress mdl-progress-black" progress={85}/>
				</div>
				<div style={{marginTop:'50px'}}>
				<h5>Java</h5>
				<ProgressBar class="mdl-progress mdl-js-progress mdl-progress-black" progress={80}/>
				</div>
				<div style={{marginTop:'50px'}}>
				<h5>HTML/CSS</h5>
				<ProgressBar class="mdl-progress mdl-js-progress mdl-progress-black" progress={83}/>
				</div>
				<div style={{marginTop:'50px'}}>
				<h5>React</h5>
				<ProgressBar class="mdl-progress mdl-js-progress mdl-progress-black" progress={50}/>
				</div>	
				<div style={{marginTop:'50px'}}>
				<h5>Bootstrap</h5>
				<ProgressBar class="mdl-progress mdl-js-progress mdl-progress-black" progress={75}/>
				</div>
				<div style={{marginTop:'50px'}}>
				<h5>Microsoft Office</h5>
				<ProgressBar class="mdl-progress mdl-js-progress mdl-progress-black" progress={95}/>
				</div>
    		
    	</Cell>
    	<Cell col={6}>
    			<div style={{paddingTop:'20px'}}>
			    <h5>Git</h5>
				<ProgressBar class="mdl-progress mdl-js-progress mdl-progress-black" progress={85}/>
				</div>
				<div style={{marginTop:'50px'}}>
				<h5>NodeJS</h5>
				<ProgressBar class="mdl-progress mdl-js-progress mdl-progress-black" progress={80}/>
				</div>
    	</Cell>
    	</Grid>
        )
    }
}

export default Skills;
