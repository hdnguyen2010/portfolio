import React, { Component } from 'react';

class Landing extends Component {
    render() {
        return (
            <div className= "banner-text">
				<h1 style= {{fontWeight: "bold", fontFamily: "Lato"}}>Hi, I'm Huy 'Jonny' Nguyen</h1>

				<h2 style= {{fontFamily: "Lato", color:"grey"}}>Full-time Student</h2>

				<h3 style= {{fontFamily: "Lato"}}>I am a Computer Science Game Development student at Lamar University and a future front-end developer in Texas. I have completed few projects with a team of four or more. My other interests also included techs, video games, and exercising and also being dedicated to growing as a programmer and as an individual,  </h3>

				<h2 className= "copyright">Copyright © Huy 'Jonny' Nguyen 2020</h2>
			</div>
        )
    }
}

export default Landing;

