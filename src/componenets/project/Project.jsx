import React from 'react'
import './project.css'
import project1 from '../../assets/portfolio-1.png'
const Project = () => {
  return (
    <section id="project">
      <div className="project_container">
        <h1 className="exp-title">My project</h1>
        <div className="projects">
          <div className="project">
            <div className="project-img">
              <img src={project1} alt="" />
            </div>
            <div className="project-content">
              <h3>2</h3>
              <h1 className="project-title">React js Crud-App</h1>
              <p className="project-desc">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Dignissimos harum in incidunt error laudantium asperiores
                aperiam nostrum totam blanditiis quos?
              </p>
              <span>github icon</span>
            </div>
          </div>
          <div className="project">
            <div className="project-content">
              <h3>2</h3>
              <h1 className="project-title">React js Crud-App</h1>
              <p className="project-desc">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Dignissimos harum in incidunt error laudantium asperiores
                aperiam nostrum totam blanditiis quos? <span>github icon</span>
              </p>
            </div>{' '}
            <div className="project-img">
              <img src={project1} alt="" />
            </div>
          </div>
          <div className="project">
            <div className="project-img">
              <img src={project1} alt="" />
            </div>
            <div className="project-content">
              <h3>2</h3>
              <h1 className="project-title">React js Crud-App</h1>
              <p className="project-desc">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Dignissimos harum in incidunt error laudantium asperiores
                aperiam nostrum totam blanditiis quos?
              </p>
              <span>github icon</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Project
