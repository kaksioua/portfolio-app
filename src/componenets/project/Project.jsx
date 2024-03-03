import React from 'react'
import './project.css'
import project1 from '../../assets/portfolio-1.png'
import git from '../../assets/icon/gitgit.png'
import crudapp from '../../assets/crud-app.png'
import edupage from '../../assets/edu.jpg'
const Project = () => {
  return (
    <section id="project">
      <div className="project_container">
        <h1 className="exp-title">My project</h1>
        <div className="projects">
          <div className="project">
            <div className="project-img">
              <img src={crudapp} alt="" />
            </div>
            <div className="project-content">
              {/* <h3>2</h3> */}
              <h1 className="project-title">React js Crud-App</h1>
              <p className="project-desc">
                CRUD application equipped with an intuitive admin login feature.
                Seamlessly navigate through employee data with the ability to
                add, delete, and modify every aspect of employment records.
              </p>

              <div className="workd-button">
                <button>
                  <a href="https://jsreactcrudapp.netlify.app/">
                    <span>Live Preview</span>
                  </a>
                </button>
                <button>
                  <a href="https://github.com/kaksioua/crudapp">
                    <span>
                      <img src={git} alt="" />
                      github repo
                    </span>
                  </a>
                </button>
              </div>
            </div>
          </div>
          <div className="project">
            <div className="project-content">
              {/* <h3>2</h3> */}
              <h1 className="project-title">Multi-Page Educational Website</h1>
              <p className="project-desc">
                fully responsive multi-page educational school website using
                HTML, CSS and javascript.
              </p>
              <div className="workd-button">
                <button>
                  <a href="https://eduwebpage.netlify.app/">
                    <span>Live Preview</span>
                  </a>
                </button>
                <button>
                  <a href="https://github.com/kaksioua/edu-landingpage">
                    <span>github repo</span>
                  </a>
                </button>
              </div>
            </div>{' '}
            <div className="project-img">
              <img src={edupage} alt="" />
            </div>
          </div>
          <div className="project">
            <div className="project-img">
              <img src={project1} alt="" />
            </div>
            <div className="project-content">
              {/* <h3>2</h3> */}
              <h1 className="project-title">React js Crud-App</h1>
              <p className="project-desc">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Dignissimos harum in incidunt error laudantium asperiores
                aperiam nostrum totam blanditiis quos?
              </p>

              <div className="workd-button">
                <button className="btn">
                  <a href="">
                    <span> Live Preview</span>
                  </a>
                </button>
                <button>
                  <a href="">
                    <span>github repo</span>
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Project
