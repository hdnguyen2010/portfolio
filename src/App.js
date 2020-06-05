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
              style={{width:"300px"}} 
              >
            <h2 className="full-name">Huy Nguyen</h2>
              <img
              alt="avatar"
              style={{paddingLeft: '10%', width: '80%', height: '25%'}}
              src="/images/avatar_2.png"
            />
            <div className="social-links">
                {/*LinkedIn*/}
                <a href="https://www.linkedin.com/in/hdnguyen2010" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>
              {/*Github*/}
                <a href="https://github.com/hdnguyen2010" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>
              {/*Instagram*/}
                <a href="https://www.instagram.com/HuyJonnyNguyen/" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-instagram" aria-hidden="true" />
                </a>
              {/*Facebook*/}
                <a href="https://www.facebook.com/Jonny5Win/?viewas=100000686899395" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-facebook" aria-hidden="true" />
                </a>
              </div>
              <div style={{float:'center', margin:'20px' }}>
                <hr style={{width:'83%', borderTop:'1px solid grey', margin:'auto'}}/>
                </div>
                 <Navigation style={{paddingLeft:'10%', paddingTop:'0%'}}>
                      <Link style={{color: 'black'}} to="/">About Me</Link>
                      <Link style={{color: 'black'}} to="/projects">Projects</Link> 
                      <Link style={{color: 'black'}} to="/contact">Contact</Link>            
                      <a style={{color: 'black', fontweight:'bold'}} href={Pdf} traget="_blank">Resume</a>          
                  </Navigation>
              </Drawer>
                  
              <Content style={{marginLeft:'320px'}}>
                <Main />
              </Content>
          </Layout>
      </div>
    </Router>
    );
}

export default App;