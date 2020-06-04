import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Content } from 'react-mdl';
import Main from './components/main';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Pdf from './Documents/Resume.pdf';

function App() {
    return (
      <Router>
        <div>
          <Layout>
              <Header className="header-color" title={<Link style={{color: 'black'}} to="/">Huy 'Jonny' Nguyen</Link>} scroll>
                  <Navigation>
                      <Link style={{color: 'black'}} to="/">Home</Link>
                      <Link style={{color: 'black'}} to="/projects">Projects</Link> 
                      <Link style={{color: 'black'}} to="/contact">Contact</Link>            
                      <a style={{color: 'black', fontweight:'bold'}} href={Pdf} traget="_blank">Resume</a>          
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