import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Content } from 'react-mdl';
import Main from './components/main';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Pdf from './Documents/Resume.pdf';

function App() {
    return (
      <Router>
        <div className="demo-big-content">
          <Layout>
              <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">Huy 'Jonny' Nguyen</Link>} scroll>
                  <Navigation>
                      <Link to="/">Home</Link>
                      <Link to="/projects">Projects</Link> 
                      <Link to="/contact">Contact</Link>            
                      <a href={Pdf} traget="_blank"><span>Resume</span></a>          
                  </Navigation>          
              </Header>
                  
              <Content>
                <Main />
              </Content>
          </Layout>
      </div>
    </Router>
    );
}

export default App;