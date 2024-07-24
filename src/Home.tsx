import React from 'react';
import Sidebar from './components/NavBar/Sidebar';
import './index.css'

import img1 from './assets/images/cpp.png';
import img2 from './assets/images/framer.png';
import img3 from './assets/images/gpt.png';
import img4 from './assets/images/mongo.png';
import img5 from './assets/images/mysql.png';
import img6 from './assets/images/py.png';
import img7 from './assets/images/react.png';
import img8 from './assets/images/tailwind.png';
import img9 from './assets/images/vite.png';
import img10 from './assets/images/svelte.png';
import p1 from './assets/images/mediwise.png';
import p2 from './assets/images/emotify.png';
import p3 from './assets/images/llmhub.png';
import p4 from './assets/images/aibotique.png';
import p5 from './assets/screenshare.mp4';
import p6 from './assets/images/guide.png';
import p7 from './assets/images/findIssue.png';
import p8 from './assets/n-queens.mp4';
import p9 from './assets/images/da-hackathon.png';

const Home: React.FC = () => {
    return (
      
      <div className="container flex">
        <Sidebar></Sidebar>
        <main className="main-content flex-grow">
          <section className="intro">
            <h2 className="hello">Hello there, स्वागत !</h2>
          </section>
          <section className="description">
            <p>
              Urvashi is a computer science student and tech enthusiast, transforming innovative ideas into practical solutions. She's currently a developer at Hyderabad Ammonia & Chemicals and actively participates in hackathons.
            </p>
          </section>
          <hr />
          <section id="projects">
            <h2>Projects</h2>
            <div className="projects-grid">
              <div className="project-card">
                <img src={p1} alt="Mediwise" width={400} height={250}/>
                <div className="project-details">
                  <div className="project-title">Mediwise ~ Winner | Ingenius 12.0</div>
                  <p className='p1'>
                    <a href='https://drive.google.com/file/d/1k-GV4wHAz74AnKLz7SpLgWI5RiZTXb9-/view?usp=sharing' target="_blank" rel="noopener noreferrer">Smart Inventory Management ↗</a>
                    
                    </p>
                </div>
              </div>
              
              <div className="project-card">
                <img src={p2} alt="Emotify" width={380} height={350}/>
                <div className="project-details">
                  <div className="project-title">Emotify | Arithemania 2.0</div>
                  <p className='p1'>
                  <a href="https://github.com/urvashii-b/Emotify" target="_blank" rel="noopener noreferrer">Music Recommendation System ↗</a>
                  </p>
                </div>
              </div>
  
              <div className="project-card">
                <img src={p3} alt="LLM-Hub" width={400} height={200}/>
                <div className="project-details">
                  <div className="project-title">LLM-Hub</div>
                  <p className='p1'>
                    <a href='https://github.com/urvashii-b/LLM-Hub' target="_blank" rel="noopener noreferrer">Repository of Generative AI Projects ↗</a>
                    </p>
                </div>
              </div>
  
              {/* Stack 2 */}
              <div className="project-card">
                <img src={p4} alt="AiBotique" width={380} height={350}/>
                <div className="project-details">
                  <div className="project-title">AiBotique ~ Top 10 | Kodikon 3.0</div>
                  <p className='p1'>
                    <a href='https://github.com/urvashii-b/ArBotique' target="_blank" rel="noopener noreferrer">DALL·E 2 for generating styles ↗</a>
                    
                  </p>
                </div>
              </div>
              <div className="project-card">
                <video src={p5} loop muted autoPlay playsInline width={400}></video>
                <div className="project-details">
                  <div className="project-title">Screen Share</div>
                  <p className='p1'>
                    <a href='https://github.com/urvashii-b/ScreenShare' target="_blank" rel="noopener noreferrer">View others screens on your own ↗</a>
                    </p>
                </div>
              </div>
              
              <div className="project-card">
                <img src={p6} alt="Guide" width={400}/>
                <div className="project-details">
                  <div className="project-title">Guide ~ SIH 2023</div>
                  <p className='p1'>Future help with AI prototype</p>
                </div>
              </div>
              {/* Stack 3 */}
              <div className="project-card">
                <img src={p7} alt="findIssue" width={400} height={600}/>
                <div className="project-details">
                  <div className="project-title">findIssue ~ Buildspace</div>
                  <p className='p1'>
      <a href="https://drive.google.com/file/d/1MSmPUrZy2sKfxWuKo1GD_yoDB37ne4s2/view?usp=sharing" target="_blank" rel="noopener noreferrer">
        Open-Source Contributing Assistant ↗
      </a>
    </p>
                </div>
              </div>
              <div className="project-card">
                <img src={p9} alt="Project 8" height={550} width={390}/>
                <div className="project-details">
                  <div className="project-title">Kaggle Rank: 32/300</div>
                  <p className='p1'>
                    <a href='https://github.com/urvashii-b/Stock-Price-Prediction' target="_blank" rel="noopener noreferrer">Stock Price Prediction ↗</a></p>
                </div>
              </div>
              <div className="project-card">
                <video src={p8} loop muted autoPlay playsInline width={400}></video>
                <div className="project-details">
                  <div className="project-title">Royal Resolve</div>
                  <p className='p1'>
                    <a href='https://github.com/urvashii-b/RoyalResolve' target="_blank" rel="noopener noreferrer"> N-Queens Python Game ↗</a>
                   </p>
                </div>
              </div>
            </div>
          </section>
          <hr />
          <section id='tech-stack'>
            <h2>Technology Stack</h2>
            <br></br>
            <div className="tech-stack-logos-container">
            <div className="tech-stack-logos">
              <img src={img1} alt="C++ Logo" className="tech-logo" />
              <img src={img2} alt="Framer Logo" className="tech-logo" />
              <img src={img3} alt="GPT Logo" className="tech-logo" />
              <img src={img5} alt="MySQL Logo" className="tech-logo" />
              <img src={img6} alt="Python Logo" className="tech-logo" />
              <img src={img8} alt="Tailwind CSS Logo" className="tech-logo" />
              <img src={img9} alt="Vite Logo" className="tech-logo" />
              <img src={img7} alt="React Logo" className="tech-logo" />
              <img src={img4} alt="Mongo Logo" className="tech-logo" />
              <img src={img10} alt="Svelte Logo" className="tech-logo" />
              <img src={img1} alt="C++ Logo" className="tech-logo" />
              <img src={img2} alt="Framer Logo" className="tech-logo" />
              <img src={img3} alt="GPT Logo" className="tech-logo" />
              <img src={img5} alt="MySQL Logo" className="tech-logo" />
              <img src={img6} alt="Python Logo" className="tech-logo" />
              <img src={img8} alt="Tailwind CSS Logo" className="tech-logo" />
              <img src={img9} alt="Vite Logo" className="tech-logo" />
              <img src={img7} alt="React Logo" className="tech-logo" />
              <img src={img4} alt="Mongo Logo" className="tech-logo" />  
              <img src={img10} alt="Svelte Logo" className="tech-logo" />
            </div>
          </div>
          <br></br>
          <br></br>
          </section>
          <section id='footer' className="footer">
          <h5>© Urvashi Bhargava</h5>
          <br></br>
          </section>
        </main>
      </div>
    );
  }
  
  export default Home;

  
