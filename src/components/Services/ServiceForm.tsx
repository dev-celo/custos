import { useState } from 'react'
import { Input } from '../Form/Inputs/Input'
import Submit from '../Form/Submit/Submit'

import '../Project/ProjectForm/ProjectFormModule.css'

export const ServiceForm = ({handleSubmit, btnText, projectData}: any) => {
    const[service, setService] = useState({})
    
    function submit(e:any) {
        e.preventDefault()
        projectData.services.push(service)
        handleSubmit(projectData)
    }

    const handleChange = (e: any) => {
        setService({...service, [e.target.name]: e.target.value})
    }

    return ( 
        <form onSubmit={submit} className={`form`}>
            <Input 
              type="text"
              text="Nome do Serviço"
              name="Name"
              placeholder="Insira o nome do serviço"
              handleOnChange={handleChange}
            />

            <Input 
              type="number"
              text="Valor do Serviço"
              name="Cost"
              placeholder="Insira o valor do serviço"
              handleOnChange={handleChange}
            />

            <Input 
              type="text"
              text="Descrição do Serviço"
              name="Description"
              placeholder="Descreva o serviço"
              handleOnChange={handleChange}
            />

            <Submit text={btnText} />
        </form>
    )
}
