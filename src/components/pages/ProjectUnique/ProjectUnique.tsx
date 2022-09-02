import React, { useEffect, useState } from 'react'
import './ProjectUniqueModule.css'
import Loading from '../../layout/Loading/Loading'
import { Container } from '../../layout/container/Container'
import { useParams } from 'react-router-dom'
import { ProjectForm } from '../../Project/ProjectForm/ProjectForm'
import Message from '../../layout/Message/Message'
import { ServiceForm } from '../../Services/ServiceForm'
import { parse, v4 as uuidv4 } from 'uuid'
import ServiceCard from '../../Services/ServiceCard/ServiceCard'

export const ProjectUnique = () => {
  const { id } = useParams()
  const[project, setProject] = useState<any>([])
  const [showProjectForm, setShowProjectForm] = useState(false)
  const[showServiceForm, setShowServiceForm] = useState(false)
  const[message, setMessage] = useState('')
  const[type, setType] = useState('')
  const[services, setServices] = useState<any>([])

  useEffect(() => {
    setTimeout(() => {
      fetch(`http://localhost:5000/projects/${id}`, {
      'method': 'GET',
      'headers': {
        'Content-Type': 'application/json'
      },
    }).then((resp) => resp.json())
    .then((data) => {
      setProject(data)
      setServices(data.services)
    }).catch((err) => console.log(err))
    }, 2000)
  }, [id])

  const editPost = (project: any) => {
    setMessage('')

    //budget validation
    if(project.budget < project.cost) {
      //message
      setMessage('O orçamento não pode ser menor que o custo do projeto')
      setType('error')
      return false
    }

    fetch(`http://localhost:5000/projects/${project.id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(project)
    })
    .then(resp => resp.json())
    .then((data) => {
      setProject(data)
      setShowProjectForm(false)
      //message
      setMessage('Projeto atualizado com sucesso!')
      setType('success')
    })
    .catch(err => console.log(err))
  }

  const toggleProjectForm = () => {
    setShowProjectForm(!showProjectForm)
  }

  const toggleServiceForm = () => {
    setShowServiceForm(!showServiceForm)
  }

  const createService = () => {
    let lastService = project.services[project.services.length-1]
    lastService.id = uuidv4()

    let lastServiceCost = lastService.Cost
    let newCost = parseFloat(project.cost) + parseFloat(lastServiceCost)
    //maximum value validation

    console.log(`New cost ${newCost}`)
    console.log(`budget ${parseFloat(project.budget)}`)
    if(newCost > parseFloat(project.budget)) {
      setShowServiceForm(false)
      setMessage('Orçamento ultrapassado, verifique o valor do serviço')
      setType('error')
      setTimeout(() => {
        setMessage('')
        setType('')
      }, 3000);
      project.services.pop()
      return false
    }
    

    //add service cost to project total project
    project.cost = newCost

    //update project
    fetch(`http://localhost:5000/projects/${project.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(project)
    }).then((resp) => resp.json())
    .then(data => {
      setShowServiceForm(false)
      setMessage('Serviço adicionado com sucesso!')
      setType('success')
      setTimeout(() => {
        setMessage('')
        setType('')
      }, 3000);
      //exibir serviços
      console.log(data)
    })
    .catch(err => console.log(err))
  }
  
  function removeService(id: any, cost: any) {
    const servicesUpdated = project.services.filter(
      (service: any) => service.id !== id 
    )
    

    const projectUpdated = project
    projectUpdated.services = servicesUpdated

    projectUpdated.cost = parseFloat(projectUpdated.cost) - parseFloat(cost)

    fetch(`http://localhost:5000/projects/${projectUpdated.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(projectUpdated)
    }).then((resp: any) => resp.json())
    .then((data) => {
      setProject(projectUpdated)
      setServices(servicesUpdated)
      setMessage('Serviço removido com sucesso!')
    }).catch(err => console.log(err))
  }

  return (
    <>
    {project.name ? (
      <div className='project_details'>
        <Container customClass="column">
          {message && (<Message type={type} message={message} />)}
          <div className='detail_container'>
            <h1>Projeto: {project.name}</h1>
            <button className='btn' onClick={toggleProjectForm}>
              {!showProjectForm ? 'Editar Projeto' : 'Fechar'}
            </button>
            {!showProjectForm ? (
              <div className='project_info'>
                <p>
                  <span>Categoria: </span> {project.categories.name}
                </p>
                <p>
                  <span>Total de orçamento: </span> {project.budget}
                </p>
                <p>
                  <span>Total Utilizado: </span> {project.cost}
                </p>
              </div>
            ) : (
              <div className='project_info'>
                <ProjectForm handleSubmit={editPost} btnText="Concluir edição" projectData={project}/>
              </div>
            )}
          </div>
          <div className="service_form_container">
            
            <h2>Adicionar Serviço:</h2>

            <button className='btn' onClick={toggleServiceForm}>
              {!showServiceForm ? 'Adicionar Serviço' : 'Fechar'}
            </button>
            
            <div className='project_info'>
              {showServiceForm && (
                <div>
                  <ServiceForm 
                    handleSubmit={createService}
                    btnText="Adicionar Serviço"
                    projectData={project}
                  />
                </div>
              )}
            </div>
          </div>
          <h2>Serviços</h2>
          <Container customClass='start'>
            {services.length > 0 &&
              services.map((service: any) => (
                <ServiceCard
                  id={service.id}
                  name={service.Name}
                  cost={service.Cost}
                  description={service.Description}
                  key={service.key}
                  handleRemove={removeService}
                />
              ))
            }
            {services.length === 0 && <p>Não há serviços Cadastrados.</p>}
          </Container>
        </Container>
      </div>
    ) : (
      <Loading />
    )}
    </>
  )
}
