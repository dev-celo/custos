import React from 'react'
import { FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { Container } from '../../layout/container/Container'
import '../Contact/ContactModule.css'
import emailjs from '@emailjs/browser';
import { Input } from '../../Form/Inputs/Input';

const Contact = () => {
  function sendEmail(e: any) {
    e.preventDefault();

    emailjs.sendForm('service_bap6lhq', 'template_8ixlnrs', e.target, 'u2JAbqTi5XZLU2e9j')
      .then((result: any) => {
          alert('Mensagem enviada com sucesso')
      }, (error: any) => {
          console.log(error.text);
      });
      e.target.reset()
  }

  return (
    <section className="contact">
      <div className='container_contact'>
        <iframe className='iframe' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3868.951643602456!2d-39.73660738558054!3d-14.138940590097805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x738b3583a9ce49b%3A0x461df16e27b1f26d!2sPra%C3%A7a%20Rui%20Barbosa%20(Centro)!5e0!3m2!1spt-BR!2sbr!4v1661905500394!5m2!1spt-BR!2sbr" width="600" height="450" loading="lazy" ></iframe>
      
        <div className='adress'>
          <h4>Endereço:</h4>
          <p>
            <span>Rua:</span> R. Mariquinha Borges
          </p>
          <p>
            <span>Número:</span> 2-64
          </p>
          <p>
            <span>Bairro:</span> Cento
          </p>
          <p>
            <span>Cidade:</span> Ipiaú - BA
          </p>

          <div className='other_contacts'>
            <h4>Outros meios de contato:</h4>
            <ul className={`social_list`}>
              <li className={`social_item`}><FaInstagram /></li>
              <li className={`social_item`}><FaLinkedin /></li>
              <li className={`social_item`}><FaWhatsapp /></li>
            </ul>
          </div>

          <div className="form">
            <form onSubmit={sendEmail}>
              <Input
                type='text'
                text='Seu nome completo'
                name='name'
                placeholder='Digite seu nome completo'
                required
              />

              <Input
                type='email'
                text='Email'
                name='email'
                placeholder='Digite seu email'
                required
              />
              <textarea name="message" rows={7}  placeholder='Sua mensagem' required></textarea>

              <button className='btn btn-primary' type='submit'>Enviar</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact