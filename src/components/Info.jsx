import React from 'react';
import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import weberLogo from '../assets/icons/weber-logo.svg';
import '../assets/stylesheets/Info.scss';
import snowflake from '../assets/icons/derigo_cursor.svg';

const Info = () => {
  const infoRef = React.useRef();
  const q = gsap.utils.selector(infoRef);
  gsap.registerPlugin(ScrollTrigger);
  const tl = React.useRef();

  /* React.useEffect(() => {
    gsap.defaults({ duration: 0.5 });
    tl.current = gsap
      .timeline()
      .from(q(".info__col"), {
        opacity: 0,
        y: 130,
        stagger: 0.2,
        ease: Power3.easeOut,
      })

      ScrollTrigger.create({
        trigger: infoRef.current,
        start: "top 50%",
        end: "bottom top",
        animation: tl.current,
        markers:true,
        onEnter: () => {
          tl.current.play();

        },
        onLeave: () => {
          tl.current.reverse();

        },
        onEnterBack: () => {
          tl.current.play();

        },
        onLeaveBack: () => {
          tl.current.reverse();

        },
      });
  },[]) */

  return (
      <div className='info' ref={infoRef}>
        <div className="info__title">
          <p>Nuestra trayectoria</p>
          <h2>Sobre nosotros</h2>
        </div>
        <div className='info__col first'>
          <img src={snowflake} alt="Icono de copo de nieve" />
          <p>Con más de 40 años de experiencia en instalaciones Frigoríficas, estamos ubicados en el primer lugar en Argentina en lo que se refiere a ejecución de Obras con compresores a Tornillo.</p>
        </div>
        <div className='info__col second'>
          <img src={snowflake} alt="Icono de copo de nieve" />
          <p>Hemos llevado a cabo la Ingeniería, Instalación y Puesta en Marcha de los más importantes Centros de Distribución del país.</p>
        </div>
        <div className='info__col third'>
          <img src={snowflake} alt="Icono de copo de nieve" />
          <p>Trabajamos con tecnologías Green High Efficiency basadas en la aplicación de estrategias de ahorro energético como Low Condensing y Hot Gas Defrost, con las cuales hemos logrado un ahorro de energía de más del 30%.</p>
        </div>
        <div className='info__col fourth'>
          <img src={snowflake} alt="Icono de copo de nieve" />
          <p>Contamos con la respresentación oficial en Argentina de Weber Cooling, empresa de los Países Bajos dedicada a la fabricación de cámaras de enfriamiento al vacío.</p>
          <a href="https://webercooling.com/en/" rel='noreferer' target="_blank">
            <img className='info__col__weber' src={weberLogo} alt='logo de la empresa Weber Cooling' />
          </a>
        </div>
      </div>
  )
}

export default Info;

