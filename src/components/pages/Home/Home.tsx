import React from 'react'
import './HomeModule.css'
import imageSectionHome from '../../../img/savings.png'
import LinkButton from '../../layout/Button/LinkButton'

const Home = () => {
  return (
    <section className='home_container'>
      <h1><span>Custos</span>o seu projeto começa aqui.</h1>
      <p>O melhor gerenciador de projetos online grátis!</p>
      <LinkButton to="/newproject" text="Cria projeto" />
      <img className='image_home' src={imageSectionHome} alt="ícone de poupança PNG foi desenvolvido por PNGWING e vem de https://www.pngwing.com/pt/free-png-socpu" />
      <div className='line'></div>
    </section>
  )
}

export default Home