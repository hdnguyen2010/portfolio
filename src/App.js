import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { BrowserRouter as Router, Link } from 'react-router-dom';

function App() {
    return (
      <Router>
        <div className="demo-big-content">
          <Layout>
              <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">MyPortfolio</Link>} scroll>
                  <Navigation>            
                      <Link to="/resume">Resume</Link>
                      <Link to="/aboutme">About Me</Link>
                      <Link to="/projects">Projects</Link>
                      <Link to="/contact">Contact</Link>           
                  </Navigation>          
              </Header>
              <Drawer title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">MyPortfolio</Link>}>
                  <Navigation>            
                      <Link to="/resume">Resume</Link>
                      <Link to="/aboutme">About Me</Link>
                      <Link to="/projects">Projects</Link>
                      <Link to="/contact">Contact</Link>            
                  </Navigation>
              </Drawer>       
              <Content>
                <Main />
              </Content>
          </Layout>
      </div>
    </Router>
    );
}

export default App;