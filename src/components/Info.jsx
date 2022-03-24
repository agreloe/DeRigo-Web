import React from 'react';
import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import weberLogo from '../assets/icons/weber-logo.svg';
import '../assets/stylesheets/Info.scss';

const Info = () => {
  gsap.registerPlugin(ScrollTrigger);
  const tl = React.useRef();

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

    tl.current = gsap
    .timeline()
    .from(
      '.copo_green',
      {
        x: 30,
        opacity: 0,
        duration: 0.5
      }
      )
      .from(
        '.copo_blue',
        {
          x: -30,
          opacity: 0,
          duration: 0.5
        },
        '<'
      )

      ScrollTrigger.create({
        trigger: '.info__wrapper__copo',
        start:'top 80%',
        end: 'bottom top',
        animation: tl.current,
        //markers: true,
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

  }, [])

  return (
      <div className='info'>
        <div className='info__title paragraph'>
          <h1>Sobre nosotros</h1>
        </div>
        <div className="info__wrapper">
        <div className="info__wrapper__text">
          <div className='info__wrapper__text__text1 paragraph'>
            <p>Con más de 40 años de experiencia en instalaciones Frigoríficas, estamos ubicados en el primer lugar en Argentina en lo que se refiere a ejecución de Obras con compresores a Tornillo.</p>
          </div>

          <div className='info__wrapper__text__text2 paragraph'>
            <p>Hemos llevado a cabo la Ingeniería, Instalación y Puesta en Marcha de los más importantes Centros de Distribución del país.</p>
          </div>

          <div className='info__wrapper__text__ghe paragraph'>
            <p>Trabajamos con tecnologías Green High Efficiency basadas en la aplicación de estrategias de ahorro energético como Low Condensing y Hot Gas Defrost, con las cuales hemos logrado un ahorro de energía de más del 30%.</p>
          </div>

          <div className='info__wrapper__text__weber paragraph'>
            <p>Contamos con la respresentación oficial en Argentina de Weber Cooling, empresa de los Países Bajos dedicada a la fabricación de cámaras de enfriamiento al vacío.</p>
            <a href="https://webercooling.com/en/" target='_blank' rel='noreferrer'>
              <img src={weberLogo} alt="Logo de Weber Cooling" />
            </a>
          </div>
        </div>

        <div className='info__wrapper__copo'>
          <svg viewBox="0 0 250 252" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g className='copo_green'>
              <path d="M3.90857 125.699H126.132" stroke="#00BB29" strokeMiterlimit="10"/>
              <path d="M39.7079 212.626L126.132 125.699" stroke="#00BB29" strokeMiterlimit="10"/>
              <path d="M39.7079 38.7711L126.132 125.699" stroke="#00BB29" strokeMiterlimit="10"/>
              <path d="M74.5429 14.2132V61.6605C74.5432 65.5713 76.087 69.3219 78.8351 72.0885L121.653 115.166V47.8122L84.2781 10.1776" stroke="#00BB29" strokeMiterlimit="10"/>
              <path d="M15.3026 177.588H62.5062C66.3943 177.588 70.1232 176.035 72.8738 173.271L115.692 130.214H54.7823C50.8942 130.214 47.1653 131.767 44.4147 134.531L11.2385 167.901" stroke="#00BB29" strokeMiterlimit="10"/>
              <path d="M84.3196 14.109C86.4782 14.109 88.2282 12.3489 88.2282 10.1777C88.2282 8.00646 86.4782 6.24634 84.3196 6.24634C82.1609 6.24634 80.411 8.00646 80.411 10.1777C80.411 12.3489 82.1609 14.109 84.3196 14.109Z" fill="#00BB29"/>
              <path d="M74.5429 18.2072C76.7016 18.2072 78.4515 16.4471 78.4515 14.2758C78.4515 12.1046 76.7016 10.3445 74.5429 10.3445C72.3843 10.3445 70.6344 12.1046 70.6344 14.2758C70.6344 16.4471 72.3843 18.2072 74.5429 18.2072Z" fill="#00BB29"/>
              <path d="M74.5429 237.184V189.789C74.5432 185.878 76.087 182.128 78.8351 179.361L121.653 136.294V203.637L84.2781 241.23" stroke="#00BB29" strokeMiterlimit="10"/>
              <path d="M84.3196 245.162C86.4782 245.162 88.2282 243.402 88.2282 241.23C88.2282 239.059 86.4782 237.299 84.3196 237.299C82.1609 237.299 80.411 239.059 80.411 241.23C80.411 243.402 82.1609 245.162 84.3196 245.162Z" fill="#00BB29"/>
              <path d="M74.5429 241.064C76.7016 241.064 78.4515 239.303 78.4515 237.132C78.4515 234.961 76.7016 233.201 74.5429 233.201C72.3843 233.201 70.6344 234.961 70.6344 237.132C70.6344 239.303 72.3843 241.064 74.5429 241.064Z" fill="#00BB29"/>
              <path d="M39.7701 42.7548C41.9288 42.7548 43.6787 40.9947 43.6787 38.8234C43.6787 36.6522 41.9288 34.8921 39.7701 34.8921C37.6114 34.8921 35.8615 36.6522 35.8615 38.8234C35.8615 40.9947 37.6114 42.7548 39.7701 42.7548Z" fill="#00BB29"/>
              <path d="M3.90861 129.63C6.06726 129.63 7.81718 127.87 7.81718 125.699C7.81718 123.528 6.06726 121.768 3.90861 121.768C1.74995 121.768 0 123.528 0 125.699C0 127.87 1.74995 129.63 3.90861 129.63Z" fill="#00BB29"/>
              <path d="M11.28 171.592C13.4386 171.592 15.1886 169.832 15.1886 167.661C15.1886 165.49 13.4386 163.73 11.28 163.73C9.12132 163.73 7.3714 165.49 7.3714 167.661C7.3714 169.832 9.12132 171.592 11.28 171.592Z" fill="#00BB29"/>
              <path d="M15.5618 181.52C17.7204 181.52 19.4703 179.76 19.4703 177.589C19.4703 175.417 17.7204 173.657 15.5618 173.657C13.4031 173.657 11.6532 175.417 11.6532 177.589C11.6532 179.76 13.4031 181.52 15.5618 181.52Z" fill="#00BB29"/>
              <path d="M11.1037 83.6532L44.4459 117.2C47.1989 119.96 50.9262 121.512 54.8134 121.517H115.381L72.3347 78.2098C69.5841 75.4457 65.8552 73.8929 61.9671 73.8926H15.116" stroke="#00BB29" strokeMiterlimit="10"/>
              <path d="M15.23 77.7094C17.3886 77.7094 19.1386 75.9493 19.1386 73.778C19.1386 71.6068 17.3886 69.8467 15.23 69.8467C13.0713 69.8467 11.3214 71.6068 11.3214 73.778C11.3214 75.9493 13.0713 77.7094 15.23 77.7094Z" fill="#00BB29"/>
              <path d="M11.28 87.7722C13.4386 87.7722 15.1886 86.0121 15.1886 83.8409C15.1886 81.6697 13.4386 79.9095 11.28 79.9095C9.12132 79.9095 7.3714 81.6697 7.3714 83.8409C7.3714 86.0121 9.12132 87.7722 11.28 87.7722Z" fill="#00BB29"/>
              <path d="M39.8738 216.391C42.0324 216.391 43.7823 214.631 43.7823 212.46C43.7823 210.288 42.0324 208.528 39.8738 208.528C37.7151 208.528 35.9651 210.288 35.9651 212.46C35.9651 214.631 37.7151 216.391 39.8738 216.391Z" fill="#00BB29"/>
              <path d="M74.5429 240.99C76.7016 240.99 78.4515 239.23 78.4515 237.059C78.4515 234.888 76.7016 233.128 74.5429 233.128C72.3843 233.128 70.6344 234.888 70.6344 237.059C70.6344 239.23 72.3843 240.99 74.5429 240.99Z" fill="#00BB29"/>
              <path d="M84.3299 245.151C86.4886 245.151 88.2385 243.391 88.2385 241.22C88.2385 239.049 86.4886 237.288 84.3299 237.288C82.1713 237.288 80.4214 239.049 80.4214 241.22C80.4214 243.391 82.1713 245.151 84.3299 245.151Z" fill="#00BB29"/></g>
              <g className='copo_blue'>
              <path d="M249.931 130.287H215.397L245.224 160.288C244.405 163.167 243.483 165.992 242.477 168.787L204.21 130.287H135.784L183.962 178.735H238.392C237.148 181.447 235.79 184.095 234.359 186.692H191.852L216.444 211.417C215.459 212.46 214.453 213.502 213.427 214.545C212.401 215.588 211.354 216.631 210.317 217.58L185.704 192.918V235.672C183.119 237.125 180.482 238.481 177.794 239.739V184.992L129.626 136.544V205.369L167.882 243.848C165.118 244.87 162.304 245.791 159.443 246.611L129.626 216.62V251.314C128.102 251.314 126.567 251.398 125.043 251.398C123.519 251.398 121.995 251.398 120.471 251.314V0.0834238C121.995 0.0834238 123.509 0 125.043 0C126.578 0 128.102 0 129.626 0.0834238V34.8086L159.433 4.82815C162.294 5.64153 165.111 6.5592 167.882 7.58114L129.626 46.0604V114.885L177.794 66.4679V11.7106C180.489 12.9689 183.126 14.3246 185.704 15.7775V58.5322L210.275 33.8179C211.312 34.8607 212.349 35.8201 213.386 36.8525C214.422 37.8848 215.459 38.9381 216.413 39.9808L191.842 64.6534H234.349C235.78 67.25 237.138 69.8674 238.371 72.61H183.942L135.763 121.069H204.19L242.446 82.5895C243.483 85.3738 244.385 88.2102 245.193 91.0779L215.376 121.069H249.9C249.962 122.591 249.994 124.124 249.994 125.668C250.014 127.221 249.983 128.765 249.931 130.287Z" fill="#3D4AA1"/></g>
            </svg>
            </div>

        </div>
      </div>
  )
}

export default Info;

