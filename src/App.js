import React from 'react';
import './App.css';
import { Layout, Drawer, Navigation, Content } from 'react-mdl';
import Main from './components/main';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Pdf from './Documents/Resume.pdf';

function App() {
    return (
      <Router>
        <div >
          <Layout fixedDrawer>
              <Drawer 
              className="header-color"
              // style={{width= }}
              >
            <h2>Huy Nguyen</h2>
              <img
              alt="avatar"
              style={{width: '100%', height: '25%'}}
              src="/images/avatar_2.png"
            />
                  <Navigation>
                      <Link style={{color: 'black'}} to="/">Home</Link>
                      <Link style={{color: 'black'}} to="/projects">Projects</Link> 
                      <Link style={{color: 'black'}} to="/contact">Contact</Link>            
                      <a style={{color: 'black', fontweight:'bold'}} href={Pdf} traget="_blank">Resume</a>          
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