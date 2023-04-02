import React from 'react'
import './skills.css' 
import {DiCssdeck} from 'react-icons/di'
const Skills = () => {
  return (
    <section id="Skills">
      <h1>My Skills</h1>

      <div className="container experience_container">
        
        <div className="frontend">
          <h3>Frontend development</h3>
          <div className="content">
          <DiCssdeck/>
          <div><h4>HTML</h4>
          <small className='tex-light'>Advanced</small></div>
          </div>

          <div className="content">
          <DiCssdeck/>
          <div>
          <h4>CSS</h4>
          <small className='tex-light'>Advanced</small>
          </div>
          </div>

          <div className="content">
          <DiCssdeck/>
          <div><h4>Javascipt</h4>
          <small className='tex-light'>Intermediate</small></div>
          </div>

          <div className="content">
          <DiCssdeck/>
          <div><h4>React</h4>
          <small className='tex-light'>Intermediate</small></div>
          </div>


        </div>
        <div className="backend">
        <h3>Backend development</h3>
          <div className="content">
          <DiCssdeck/>
          <div><h4>PHP</h4>
          <small className='tex-light'>Basic</small></div>
          </div>

          <div className="content">
          <DiCssdeck/>
          <div><h4>Django</h4>
          <small className='tex-light'>Basic</small></div>
          </div>
        </div>

        <div className="languages">
        <h3>Programming Languages</h3>
          <div className="content">
          <DiCssdeck/>
          <div><h4>C</h4>
          <small className='tex-light'>Advanced</small></div>
          </div>

          <div className="content">
          <DiCssdeck/>
          <div><h4>C++</h4>
          <small className='tex-light'>Intermediate</small></div>
          </div>

          <div className="content">
          <DiCssdeck/>
          <div><h4>Python</h4>
          <small className='tex-light'>Advanced</small></div>
          </div>

          <div className="content">
          <DiCssdeck/>
          <div><h4>SQL</h4>
          <small className='tex-light'>Advanced</small></div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Skills
