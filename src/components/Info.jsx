import React from 'react';
import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import weberLogo from '../assets/icons/weber-logo.svg';
import gHE from '../assets/icons/greenHighEfficiency.svg';
import '../assets/stylesheets/Info.scss';

const Info = () => {
  gsap.registerPlugin(ScrollTrigger);

  React.useEffect(() => {
    gsap.defaults({ duration:0.3 })

    gsap.utils.toArray(".paragraph").forEach(text => {
      gsap.from(text, {
        y: 130,
        opacity: 0,
        ease: Power3.easeOut,
        scrollTrigger: {
          trigger: text,
          start: "top bottom",
          end: "bottom 20%",
          toggleActions: 'play reverse restart reverse',
        }
      });
    })

  }, [])

  return (
      <div className='info'>
        <h1 className='info__title paragraph'>Sobre nosotros</h1>
        <div className='info__text1 paragraph'>
          <p>Con más de 40 años de experiencia en instalaciones Frigoríficas, estamos ubicados en el primer lugar en Argentina en lo que se refiere a ejecución de Obras con compresores a Tornillo.</p>
        </div>
        <div className='info__text2 paragraph'>
          <p>Hemos llevado a cabo la Ingeniería, Instalación y Puesta en Marcha de los más importantes Centros de Distribución del País.</p>
        </div>
        <div className='info__ghe paragraph'>
          <img src={gHE} alt="Logo de Green High Efficiency" />
          <p>Trabajamos con tecnologías Green High Efficiency basadas en la aplicación de estrategias de ahorro energético como  Low Condensing y Hot Gas Defrost, con las cuales hemos logrado un ahorro de energía de más del 30%.</p>
        </div>
        <div className='info__weber paragraph'>
          <p>Contamos con la respresentación oficial en Argentina de Weber Cooling, empresa de los Países Bajos dedicada a la fabricación de cámaras de enfriamiento al vacío.</p>
          <a href="https://webercooling.com/en/" target='_blank' rel='noreferrer'>
            <img src={weberLogo} alt="Logo de Weber Cooling" />
          </a>
        </div>
      </div>
  )
}

export default Info;