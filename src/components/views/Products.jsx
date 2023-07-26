import './Products.css'
import React from 'react'
import BoxInfo from '../common/BoxInfo'

const Products = ({title}) => {
  
  return (
    <div className='Products'>      
      <h2>{title}</h2>
      <div className="infor">
        <BoxInfo
          icon="fa-solid fa-pen-nib fa-flip" 
          title="Designer Gráfico" 
          text="Materialize suas ideias e pensamentos por meio de desenhos, imagens, grafismos, materiais, cores, tipografia, etc." 
          />
        <BoxInfo 
          icon="fa-solid fa-swatchbook fa-bounce" 
          title="Landing Pages" 
          text="Landing Page é uma página que conta com todos os elementos voltados à conversão, do visitante ao Lead ou da oportunidade ao cliente." 
          />
        <BoxInfo 
          icon="fa-brands fa-google fa-spin"
          title="Tráfego Pago" 
          text="Tráfego pago na internet é aquele que vem de anúncios feitos em mecanismos de busca, redes sociais e até mesmo em outros sites. É usado para conduzir visitantes a páginas estratégicas." 
          />
        <BoxInfo 
          icon="fa-brands fa-instagram fa-shake" 
          title="Gestão de mídias sóciais" 
          text="A gestão de mídias sociais é o processo de criar, planejar, publicar e monitorar conteúdo em plataformas de redes sociais com o objetivo de construir e fortalecer a presença online de uma marca ou empresa." 
          />
      </div>
    </div>
  )
}

export default Products
