import React from 'react'
import './CompanyModule.css'

const Company = () => {
  return (
    <section className='company'>
        <h2>Sobre o Custos</h2>
        <p>O custos foi um projeto desenvolvido em react por <a href="">Marcelo Silva</a> junto ao professor Matheus Battisti, no curso Hora de codar.
          O Custos é um gerenciador de projetos, onde tem por finalidade gerenciar os custos de projetos.
          Vôce pode criar um projeto e definir um valor de orçamento para o mesmo.
          <br/>
          Logo depois ficará disponível para adição de serviços dentro de um projeto.
          <br/>
          Além disso você pode editar projetos já criados, excluir projetos e ainda pode excluir serviços dentro do projeto!
        </p>
    </section>
  )
}

export default Company