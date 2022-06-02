import React from 'react';
import '../ProjectInfo';
import projects from '../ProjectInfo';

function ProjectContainer() {
    return (
        <div>
           {projects.map((project) => (
        <div className="card" key={project.id} >
          <div className="card-img-top">
            <img src={project.image} alt="project1" />
          </div>
          <div className="card-body">
            <h2 className="card-title">{project.title}</h2>
            <p class="card-text">{project.technology}</p>
            <p class="card-text">{project.description}</p>

            <a href={project.repo} target="_blank" rel="noreferrer" class="btn btn-light">
                Repository
            </a>
            <a href={project.link} target="_blank" rel="noreferrer" class="btn btn-light">
                Deployed Page
            </a>
          </div>
        </div>
      ))}
        </div>
        
    );
}

export default ProjectContainer;