import React from 'react';
import './App.css';
import profilePhoto from './img/me.jpg';
import yogaImg from './img/yoga.png';
import repetioImg1 from './img/repetio.png';
import repetioImg2 from './img/repetio2.png';
import resumePdf from './files/Resume 2025_10_6.pdf';

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <div className="nav-container">
          <div className="brand">Jason DSouza</div>
          <ul className="nav-links">
            <li><a href="#home">Links</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#work">Work Experience</a></li>
            <li><a href="#resume">Resume</a></li>
          </ul>
        </div>
      </nav>

      <main id="home" className="hero">
        <div className="hero-content"> 
          <div className="hero-text">
            <h1 className="hero-title">Hi, I'm <span className="accent">Jason</span></h1>
            <h2 className="hero-subtitle">a full stack Developer.</h2>
            <div className="hero-socials">
              <a href="https://github.com/jrdsouza3" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://www.linkedin.com/in/jason-d-16016b12b/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>
          <div className="hero-photo-wrap">
            <img className="profile-photo" src={profilePhoto} alt="Profile" />
          </div>
        </div>
      </main>

      <section id="projects" className="section projects">
        <div className="projects-inner">
          <h3 className="projects-heading">Projects</h3>
          <div className="projects-grid">
            <article className="project-card">
              <div className="project-media">
                <img className="project-img" src={yogaImg} alt="YogaFlow app screenshot" />
              </div>
              <div className="project-content">
                <h4 className="project-title">YogaFlow</h4>
                <p className="project-desc">Built an app that creates custom yoga flows using an OpenAI-powered API. React on the front, Flask REST on the back, with Supabase for data. Deployed on Vercel and Railway.</p>
                <a className="project-cta" href="https://yogaflow-two.vercel.app/" target="_blank" rel="noopener noreferrer">View live ↗</a>
              </div>
            </article>

            <article className="project-card">
              <div className="project-media project-media-grid">
                <img className="project-img" src={repetioImg1} alt="Repetio app dashboard" />
                <img className="project-img" src={repetioImg2} alt="Repetio spaced repetition view" />
              </div>
              <div className="project-content">
                <h4 className="project-title">Repetio</h4>
                <p className="project-desc">A spaced‑repetition study buddy that reminds you to review flashcards at just the right moment. Uses a CatBoost model, DynamoDB, and AWS Amplify with a React UI. Took <span className="accent">1st place</span> at UT Austin’s 2023 Senior Design Showcase.</p>
              </div>
            </article>
          </div>
        </div>
      </section>
      <section id="skills" className="section skills">
        <div className="skills-inner">
          <h3 className="projects-heading">Skills</h3>
          <div className="skills-grid">
            <div className="skill-category">
              <h4 className="skill-title">Programming Languages</h4>
              <div className="skill-list">
                <span className="skill-chip">Python</span>
                <span className="skill-chip">Java</span>
                <span className="skill-chip">JavaScript</span>
                <span className="skill-chip">TypeScript</span>
                <span className="skill-chip">C</span>
                <span className="skill-chip">C++</span>
                <span className="skill-chip">COBOL</span>
              </div>
            </div>

            <div className="skill-category">
              <h4 className="skill-title">Web and API Development</h4>
              <div className="skill-list">
                <span className="skill-chip">React</span>
                <span className="skill-chip">HTML</span>
                <span className="skill-chip">CSS</span>
                <span className="skill-chip">RESTful APIs</span>
                <span className="skill-chip">GraphQL</span>
                <span className="skill-chip">JSON</span>
                <span className="skill-chip">Flask</span>
                <span className="skill-chip">Spring Framework</span>
                <span className="skill-chip">OpenAI API</span>
              </div>
            </div>

            <div className="skill-category">
              <h4 className="skill-title">Database</h4>
              <div className="skill-list">
                <span className="skill-chip">MongoDB</span>
                <span className="skill-chip">PostgreSQL</span>
                <span className="skill-chip">OrientDB</span>
                <span className="skill-chip">SQL</span>
              </div>
            </div>

            <div className="skill-category">
              <h4 className="skill-title">DevOps</h4>
              <div className="skill-list">
                <span className="skill-chip">Jenkins</span>
                <span className="skill-chip">AWS (Amplify, EC2, DynamoDB)</span>
                <span className="skill-chip">Heroku</span>
                <span className="skill-chip">Docker</span>
                <span className="skill-chip">GitLab</span>
                <span className="skill-chip">Git</span>
                <span className="skill-chip">Agile</span>
                <span className="skill-chip">CI/CD</span>
                <span className="skill-chip">Vercel</span>
                <span className="skill-chip">Railway</span>
              </div>
            </div>

            <div className="skill-category">
              <h4 className="skill-title">Languages</h4>
              <div className="skill-list">
                <span className="skill-chip">English (native)</span>
                <span className="skill-chip">Spanish (working proficiency)</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="work" className="section work">
        <div className="work-inner">
          <h3 className="projects-heading">Work</h3>

          <article className="work-card">
            <div className="work-logo" aria-label="Deloitte">
              <span className="deloitte-text">Deloitte</span>
              <span className="deloitte-dot" aria-hidden="true"></span>
            </div>
            <div className="work-content">
              <div className="work-header">
                <h4 className="work-title">Product Engineer</h4>
                <span className="work-dates">August 2023 – April 2025</span>
              </div>
              <ul className="work-list">
                <li>Developed and shipped a product for large‑scale refactoring of migrated Java files using DSL scripts, AST transforms, and the Spoon library — built custom features for JPMorgan Chase and Vanguard; deployed to JPMorgan Chase.</li>
                <li>Built endpoints, service classes, and updated business logic for a Spring Boot backend mining z/OS program files from IBM Mainframe.</li>
                <li>Implemented a TensorFlow neural network to recognize languages in mystery files; used to flag legacy code like JCL, PL/I, and assembler variants.</li>
              </ul>
            </div>
          </article>

          <article className="work-card">
            <div className="work-logo" aria-label="Deloitte">
              <span className="deloitte-text">Deloitte</span>
              <span className="deloitte-dot" aria-hidden="true"></span>
            </div>
            <div className="work-content">
              <div className="work-header">
                <h4 className="work-title">Product Engineering Summer Scholar Intern</h4>
                <span className="work-dates">June 2022 – August 2022</span>
              </div>
              <ul className="work-list">
                <li>Built a local React + Spring Boot app to browse IBM datasets.</li>
                <li>Improved the tooling to be OS and IDE agnostic.</li>
                <li>Wrote unit tests, joined code reviews, and followed the full SDLC.</li>
              </ul>
            </div>
          </article>
        </div>
      </section>
      <section id="resume" className="section resume">
        <div className="resume-inner">
          <a className="project-cta" href={resumePdf} download>
            Download Resume
          </a>
        </div>
      </section>
    </div>
  );
}

export default App;
