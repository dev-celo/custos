import { ProjectForm } from '../../Project/ProjectForm/ProjectForm'
import { useNavigate } from 'react-router-dom'
import './NewProjectModule.css'

const NewProject = () => {

  let navigate = useNavigate()

  function createPost(project: any) {
    //initialize costs and services
    project.cost = 0
    project.services = []

    fetch("http://localhost:5000/projects", {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(project),
    }).then((resp:any) => resp.json())
    .then((data:any) => {
      //redirect
      navigate('/projects', { state:{message: "Projeto criado com sucesso!"} })
    })
    .catch(err => console.log(err))
  }

  return (
    <section className='newproject_container'>
      <h1>Criar projeto</h1>
      <p>Crie seu projeto para depois adicionar os serviços!</p>
      <ProjectForm handleSubmit={createPost} btnText="Criar Projeto"/>
    </section>
  )
}

export default NewProject