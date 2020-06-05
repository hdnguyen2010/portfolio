import React, { Component } from 'react';
import { Grid, Cell, ProgressBar } from 'react-mdl';

class Skills extends Component {
    render() {
        return (
            <div style={{width: '80%', margin: 'auto'}}>
    <Grid className="skills-grid">
        <Cell col={12}>
        	{/* Simple Progress Bar */}
        	JavaScript
			80%<ProgressBar style={{backgroundColor:'black'}} progress={80}/>
			
			JavaScript
			80%<ProgressBar style={{backgroundColor:'black'}} progress={80}/>
        </Cell>
    </Grid>
    
</div>
        )
    }
}

export default Skills;
