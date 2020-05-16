import React from 'react';
import './App.css';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Main from './components/main';
import {BrowserRouter, Link} from 'react-router-dom';

function App() {
  return (
    <div className="demo-big-content">
    <Layout>
        <Header title="Title" scroll>
            <Navigation>
            <BrowserRouter>
                <Link to="/resume">Resume</Link>
                <Link to="/aboutme">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </BrowserRouter>
            </Navigation>
        </Header>
        <Drawer title="Title">
            <Navigation>
                <BrowserRouter>
                <Link to="/resume">Resume</Link>
                <Link to="/aboutme">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </BrowserRouter>
            </Navigation>
        </Drawer>
        <Content>
          <Main />
        </Content>
    </Layout>
  </div>
  );
}

export default App;

