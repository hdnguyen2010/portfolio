import React, { Component } from 'react';

class Landing extends Component {
    render() {
        return (
            <div className= "banner-text">
				<h1 style= {{fontWeight: "bold", fontFamily: "Lato", paddingTop: "60px", backgroundColor: "white"}}>Hi, my name is Huy 'Jonny' Nguyen</h1>

				<h2 style= {{fontFamily: "Lato", color:"grey"}}>Building things for the web.</h2>

				<p style= {{fontFamily: "Lato", fontSize: "25px", paddingTop: "60px", width: "95%",backgroundColor: "white"}}>I am a student at Lamar University majoring in Computer Science Game Development. My expected graduation date is December 2021. My interest in web development started back in 2016 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!</p>

				<p className= "copyright">Designed & Built by Huy 'Jonny' Nguyen</p>
			</div>
        )
    }
}

export default Landing;

