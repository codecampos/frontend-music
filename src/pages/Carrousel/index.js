import React from 'react';
import 'antd/dist/antd.css';
import { Carousel } from 'antd';
import slideGuitar from '../../assets/slideGuitar.jpg'
import slideAcoustic from '../../assets/slideAcoustic.jpg'
import slideBass from '../../assets/slideBass.jpg'
import slideEletronics from '../../assets/slideEletronics.jpg'

const contentStyle = {
  height: '79vh',
};

const slideOne = {
  background: `url(${slideGuitar})`,
  height: '79vh',
  lineHeight: '500px',
  textAlign: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  color: '#fff',
  fontSize: '40px'

}

const slideTwo = {
  background: `url(${slideBass})`,
  height: '79vh',
  lineHeight: '500px',
  textAlign: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  color: '#fff',
  fontSize: '40px'
}

const slideThree = {
  background: `url(${slideAcoustic})`,
  height: '79vh',
  lineHeight: '500px',
  textAlign: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  color: '#fff',
  fontSize: '40px'

}

const slideFour = {
  background: `url(${slideEletronics})`,
  height: '79vh',
  lineHeight: '500px',
  textAlign: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  color: '#fff',
  fontSize: '40px'

}

export default function Carrousel() {

  return (
    <>
      <Carousel autoplay effect="fade" style={contentStyle}>
        <div>
          <h3 style={slideOne}>As melhores guitarras para os melhores músicos!</h3>
        </div>
        <div>
          <h3 style={slideTwo}>Baixos Signatures do artistas mais conhecidos!</h3>
        </div>
        <div>
          <h3 style={slideThree}>Violões feitos com madeiras nobres, trazendo um som limpo!</h3>
        </div>
        <div>
          <h3 style={slideFour}>Equipamentos eletrônicos de qualidade!</h3>
        </div>
      </Carousel>
    </>
  );
}
