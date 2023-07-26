import './Designer.css'
import React from 'react'

const Designer = () => {
     
  return (
    <div className='Designer'>  
      <div className="box">
        <h2>DESIGNER GRÁFICO</h2>
        <p><strong>Designer </strong>é o especialista que estuda, cria e projeta soluções inovadoras. Ele trabalha em vários segmentos, como na área de comunicação impressa e/ou digital de uma empresa, no desenvolvimento de projetos de produtos ou na criação de conceitos visuais para ambientação de lojas ou eventos, por exemplo. O designer utiliza conhecimentos teóricos e/ou práticos, métodos e tecnologias para viabilizar um projeto com menor custo, com mais eficiência e que transmita o propósito da empresa. No âmbito dos produtos, ele ainda cria soluções mais inteligentes, bonitas, confortáveis e seguras para os consumidores. Sem esquecer dos aspectos estéticos, pois eles costumam atrair os clientes para a escolha de uma marca, produto ou serviço. Ou seja, o designer materializa ideias e pensamentos por meio de desenhos, imagens, grafismos, materiais, cores, tipografia, etc.</p>      
      </div>     
      <div className="box">
        <h2>LISTA DE SERVIÇOS</h2> 
          <span><i className="fa-solid fa-bullseye fa-beat"></i>Social Media</span>
          <span><i className="fa-solid fa-m fa-beat"></i>Motion</span>
          <span><i className="fa-solid fa-copyright fa-beat"></i>Identidade Visual</span>
          <span><i className="fa-solid fa-photo-film fa-beat"></i>Edição de Vídeo</span>
          <span><i className="fa-solid fa-draw-polygon fa-beat"></i>Logotipo</span>
          <span>e muito mais...  </span>
      </div>     

    </div>
  )
}

export default Designer
