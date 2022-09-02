import React from 'react'
import { BsFillTrashFill } from 'react-icons/bs'

const ServiceCard = ({id, name, cost, description, key, handleRemove}: any) => {

  const remove = (e: any) => {
    e.preventDefault()
    return handleRemove(id, cost)
  }
  return (
    <div className="project_card">
        <h4>{name}</h4>
        <p>
            <span>Custo Total: </span>{cost}
        </p>
        <p>{description}</p>
        <div className="project_card_actions">
            <button onClick={remove}><BsFillTrashFill /> Excluir</button>
        </div>
    </div>
  )
}

export default ServiceCard