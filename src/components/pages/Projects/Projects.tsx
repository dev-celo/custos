import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Message from '../../layout/Message/Message'
import './ProjectsModule.css'
import { Container } from '../../layout/container/Container'
import LinkButton from '../../layout/Button/LinkButton'
import ProjectCard from '../../Project/ProjectCard/ProjectCard'
import Loading from '../../layout/Loading/Loading'


interface CustomizedState {
  message: ""
}

const Projects = () => {
  const[projects, setProjects] = useState<any[]>([])
  const[removeLoading, setRemoveLoading] = useState(false)
  const[projectMessage, setProjectMessage] = useState('')

  const location = useLocation()
  const state = location.state as CustomizedState
  let message = ''
  

  if(location.state){
    message = state.message
  }

  useEffect(() => {

    setTimeout(() => {
      fetch('http://localhost:5000/projects', {
      method: 'GET',
      headers: {
        'Content-Type' : 'application/json'
      },
    }).then((resp )=> resp.json())
    .then((data) => {
    setProjects(data)
    setRemoveLoading(true)
    })
    .catch((err) => console.log(err))

    }, 300)

  }, [])

  function removeProject(id: any) {
    fetch(`http://localhost:5000/projects/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((resp) => resp.json)
    .then(() => {
      setProjects(projects.filter((project) => project.id !== id))
      setProjectMessage('Projeto removido com sucesso!')
    })
    .catch((err) => console.log(err))
  }

  return (
    <div className={`project_container`}>
      
      <div className={`title_container`}>
        <h1>Meus Projetos</h1>
        <LinkButton to='/newproject' text='Novo Projeto' />
      </div>

      {message && (
        <Message type={`success`} message={message}/>)
      }

      {projectMessage && (
        <Message type={`success`} message={projectMessage}/>)
      }
        

      <Container customClass="start">
        {projects.length > 0 &&
          projects.map((project) => (
            <ProjectCard 
            id={project.id}
            name={project.name}
            budget={project.budget}
            category={project.categories.name}
            key={project.id}
            handleRemove={removeProject}
             />
          ))
        }

        {!removeLoading && <Loading />}
        {removeLoading && projects.length == 0 &&(
          <p>Não há projetos cadastrados!</p>
        )}
      </Container>
    </div>
  )
}

export default Projects