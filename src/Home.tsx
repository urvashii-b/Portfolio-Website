import React from 'react';
import Sidebar from './components/NavBar/Sidebar';
import './index.css'
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
                <img src="src\images\mediwise.png" alt="Mediwise" width={400} height={250}/>
                <div className="project-details">
                  <div className="project-title">Mediwise ~ Winner | Ingenius 12.0</div>
                  <p className='p1'>Smart Inventory Management</p>
                </div>
              </div>
              
              <div className="project-card">
                <img src="src\images\emotify.png" alt="Emotify" width={380} height={350}/>
                <div className="project-details">
                  <div className="project-title">Emotify | Arithemania 2.0</div>
                  <p className='p1'>Music Recommendation System ↗</p>
                </div>
              </div>
  
              <div className="project-card">
                <img src="src\images\llmhub.png" alt="LLM-Hub" width={400} height={200}/>
                <div className="project-details">
                  <div className="project-title">LLM-Hub</div>
                  <p className='p1'>Repository of Generative AI Projects ↗</p>
                </div>
              </div>
  
              {/* Stack 2 */}
              <div className="project-card">
                <img src="src\images\aibotique.png" alt="AiBotique" width={380} height={350}/>
                <div className="project-details">
                  <div className="project-title">AiBotique ~ Top 10 | Kodikon 3.0</div>
                  <p className='p1'>DALL·E 2 for generating styles ↗</p>
                </div>
              </div>
              <div className="project-card">
                <video src="src\assets\screenshare.mp4" loop muted autoPlay playsInline width={400}></video>
                <div className="project-details">
                  <div className="project-title">Screen Share</div>
                  <p className='p1'>View others screens on your own ↗</p>
                </div>
              </div>
              
              <div className="project-card">
                <img src="src\images\guide.png" alt="Guide" width={400}/>
                <div className="project-details">
                  <div className="project-title">Guide ~ SIH 2023</div>
                  <p className='p1'>Future help with AI prototype</p>
                </div>
              </div>
              {/* Stack 3 */}
              <div className="project-card">
                <img src="src\images\findissue.png" alt="findIssue" width={400} height={600}/>
                <div className="project-details">
                  <div className="project-title">findIssue ~ Buildspace</div>
                  <p className='p1'>Open-Source Contributing Assistant ↗</p>
                </div>
              </div>
              <div className="project-card">
                <img src="src\images\da-hackathon.png" alt="Project 8" height={550} width={390}/>
                <div className="project-details">
                  <div className="project-title">Kaggle Rank: 32/300</div>
                  <p className='p1'>Stock Price Prediction ↗</p>
                </div>
              </div>
              <div className="project-card">
                <video src="src\assets\n-queens.mp4" loop muted autoPlay playsInline width={400}></video>
                <div className="project-details">
                  <div className="project-title">Royal Resolve</div>
                  <p className='p1'>N-Queens Python Game ↗</p>
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
              <img src="src/images/cpp.png" alt="C++ Logo" className="tech-logo" />
              <img src="src/images/framer.png" alt="Framer Logo" className="tech-logo" />
              <img src="src/images/gpt.png" alt="GPT Logo" className="tech-logo" />
              <img src="src/images/mysql.png" alt="MySQL Logo" className="tech-logo" />
              <img src="src/images/py.png" alt="Python Logo" className="tech-logo" />
              <img src="src/images/tailwind.png" alt="Tailwind CSS Logo" className="tech-logo" />
              <img src="src/images/vite.png" alt="Vite Logo" className="tech-logo" />
              <img src="src/images/react.png" alt="React Logo" className="tech-logo" />
              <img src="src/images/mongo.png" alt="Mongo Logo" className="tech-logo" />
              <img src="src/images/cpp.png" alt="C++ Logo" className="tech-logo" />
              <img src="src/images/framer.png" alt="Framer Logo" className="tech-logo" />
              <img src="src/images/gpt.png" alt="GPT Logo" className="tech-logo" />
              <img src="src/images/mysql.png" alt="MySQL Logo" className="tech-logo" />
              <img src="src/images/py.png" alt="Python Logo" className="tech-logo" />
              <img src="src/images/tailwind.png" alt="Tailwind CSS Logo" className="tech-logo" />
              <img src="src/images/vite.png" alt="Vite Logo" className="tech-logo" />
              <img src="src/images/react.png" alt="React Logo" className="tech-logo" />
              <img src="src/images/mongo.png" alt="Mongo Logo" className="tech-logo" />
            </div>
          </div>
          <br></br>
          <br></br>
          </section>
          <section id='footer' className="footer">
          <h5>© Urvashi Bhargava</h5>
          </section>
        </main>
      </div>
    );
  }
  
  export default Home;

  
