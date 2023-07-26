import Display from '../common/Display'
import './Footer.css'
import React from 'react'

const Footer = () => {
  return (
   <footer className="Footer">      

   <div className="box">
        <Display icon="fa-solid fa-envelope" text="agenciaagility@agility.com.br" bgcolor="#FE750C" />
        <Display icon="fa-brands fa-whatsapp" text="(85) 98998-9889" bgcolor="#F33746" />
      </div>
      <div className="box">
        <Display icon="fa-brands fa-instagram" text="@agagility" bgcolor="#286EA2" />
        <Display icon="fa-brands fa-facebook" text="/agagility" bgcolor="#A492C6" />
      </div>
      
      <div className="box">
        <p>Desenvolvido por <strong>Agência Agility</strong> - Todos os Direitos Reservados - &copy; {new Date().getFullYear()}</p>
      </div>
   </footer>
  )
}

export default Footer
