import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './landingpage';
import Skills from './skills';
import Projects from './projects';

const Main = () => (
		<Switch>
			<Route exact path="/" component={LandingPage} />
			<Route path="/landingpage" component={LandingPage} />
			<Route path="/skills" component={Skills} />
			<Route path="/projects" component={Projects} />
		</Switch>
)

export default Main;