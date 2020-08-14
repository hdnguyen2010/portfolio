import React, { Component } from 'react';

class Landing extends Component {
    render() {
        return (
            <div className= "banner-text">
				<h1 style= {{fontWeight: "bold", fontFamily: "Open Sans"}}>Graduating in Fall 2021</h1>

				<h3 style= {{fontFamily: "Open Sans"}}>I am a Computer Science Game Development student at Lamar University. JavaScript is my primary programming language but JAVA is what I code in school. My interest is being dedicated to growing as an engineer and as an individual.</h3>

				<h2 className= "copyright">Copyright © Huy 'Jonny' Nguyen 2020</h2>
			</div>
        )
    }
}

export default Landing;

