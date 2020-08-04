import React from 'react';
import './App.css';
import { Layout, Drawer, Navigation, Content } from 'react-mdl';
import Main from './components/main';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Pdf from './Documents/Resume.pdf';
import Particles from 'react-particles-js';

function App() {
    return (
      <Router>            
        <div>
<Particles
  style={{ position: "absolute" }}
  height="95%"
  width="95%"
  params={{
    particles: {
      color: {
        value: "#000000"
      },
      line_linked: {
        color: {
          value: "#000000"
        }
      },
      number: {
        value: 50
      },
      size: {
        value: 3
      }
    }
  }}
/>
          <Layout fixedDrawer>
              <Drawer 
              className="header-color"
              style={{width:"300px"}} 
              >
            <h2 className="full-name">Huy 'Jonny' Nguyen</h2>
              <img
              alt="avatar"
              style={{paddingLeft: '12%', width: '75%', height: '25%'}}
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
                      <Link style={{color: 'black'}} to="/skills">Skills</Link>            
                      <a style={{color: 'black'}} href={Pdf} traget="_blank">Resume</a>

                  </Navigation>
                  <div style={{float:'center', margin:'20px' }}>
                <hr style={{width:'83%', borderTop:'1px solid grey', margin:'auto'}}/>
                </div>
                <a className="email-button" href={"mailto:"}>
                  <i className="fa fa-envelope" style={{fontSize:'14px',paddingRight:'6px'}} aria-hidden="true"/>E-mail
                </a>
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