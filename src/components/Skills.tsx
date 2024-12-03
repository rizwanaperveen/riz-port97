import React from 'react';
import '../app/styles/skills.css';

const Skills = () => {
  return (
    <div id="skills" className='skills-container'>
        <div className='skills-grid'>
        <div data-aos="zoom-in-up" className='skills-left'>
        <h1 className='sk-head'>SKILLS</h1>
          <h2 className='skills-heading'>Technologies I work with</h2>
        <p className='skills-text'>I have a solid foundation in web development, specializing in HTML, CSS, JAVASCRIPT, TYPESCRIPT, NODE.JS, NEXT.JS, TAILWIND CSS</p>
        </div>
        
          <div className='skills-right'>
            <div className='skills-icons-grid'>
              <div className='skills-space'>
              <h2 data-aos="zoom-in-up">Taiwind CSS</h2>
              <h2 data-aos="zoom-in-up">Node.JS</h2>
              <h2 data-aos="zoom-in-up">React.JS</h2>
            </div>
            <div className='skills-space'>
              <h2 data-aos="zoom-in-up">Typescript</h2>
              <h2 data-aos="zoom-in-up">Next.JS</h2>
              <h2 data-aos="zoom-in-up">JavaScript</h2>
            
          </div>
        </div>
        </div>
        </div>

    </div>
  );
};

export default Skills