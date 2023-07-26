import './Form.css'
import React from 'react'

const Form = () => {
  return (
    <div className='Form'>
     <h2>FALE CONOSCO</h2>
     <div className="box-contact">
      <form action="">
        <div className="mb-3">
          <input type="text" name="" id="" className="form-control" placeholder="Nome" aria-describedby="helpId"/>
        </div>
        <div className="mb-3">
          <input type="text" name="" id="" className="form-control" placeholder="Nome da Empresa" aria-describedby="helpId"/>
        </div>
        <div className="mb-3">
          <input type="text" name="" id="" className="form-control" placeholder="Whatsapp" aria-describedby="helpId"/>
        </div>
        <div className="mb-3">
          <input type="email" name="" id="" className="form-control" placeholder="Seu Email" aria-describedby="helpId"/>
        </div>
        <div class="mb-3">
          <label for="" class="form-label"></label>
          <textarea class="form-control" name="" id="" rows="3" placeholder='Sua Mensagem'></textarea>
        </div>
      </form>
        <button type="button" className="btn btn-success">Enviar</button>
      {/* <img src={image1} alt='imagem' /> */}
     </div>
    </div>
  )
}

export default Form
