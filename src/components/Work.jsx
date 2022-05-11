import React from "react";
import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../assets/stylesheets/Work.scss";
import arrow from "../assets/icons/arrow.svg";

const Work = () => {
  const workRef = React.useRef();
  const q = gsap.utils.selector(workRef);
  gsap.registerPlugin(ScrollTrigger);
  const toggleActions = 'play reverse play reverse';

  React.useEffect(() => {
    gsap.defaults({ duration:0.3 })

    gsap.from(q(".work__about"), {
      scrollTrigger: {
        trigger: q(".work__about"),
        start: "top 50%",
        end: "bottom top",
        toggleActions: toggleActions,
      },
      opacity: 0,
      y: 130,
      ease: Power3.easeOut,
    });

    gsap.utils.toArray(".fourth, .second").forEach(photo => {
      gsap.from(photo, {
        x: 50,
        opacity: 0,
        ease: Power3.easeOut,
        scrollTrigger: {
          trigger: photo,
          start: 'top bottom',
          end: 'bottom 40%',
          toggleActions: toggleActions,
        }
      });
    })
    gsap.utils.toArray(".first, .third").forEach(photo => {
      gsap.from(photo, {
        x: -50,
        opacity: 0,
        ease: Power3.easeOut,
        scrollTrigger: {
          trigger: photo,
          start: 'top bottom',
          end: 'bottom 40%',
          toggleActions: toggleActions,
        }
      });
    })

    gsap.utils.toArray(".work__photos__text").forEach(text => {
      gsap.from(text, {
        y: 25,
        opacity: 0,
        duration: 0.6,
        ease: Power3.easeOut,
        scrollTrigger: {
          trigger: text,
          start: 'top bottom',
          end: 'bottom 30%',
          toggleActions: toggleActions,
          
        }
      });
    })

  }, []);

  return (
    <div className="work" ref={workRef}>
      <div className="work__about">
        <div className="work__about__title workText">
          <p>Proyectos realizados</p>
          <h1>Trabajo destacado</h1>
        </div>
        <div className="work__about__subtitle workText">
          <p>Nuestro trabajo</p>
          <img src={arrow} alt="Flecha apuntando hacia abajo" />
        </div>
      </div>
      <div className="work__photos">
        <div className="work__photos__img first"></div>
        <p className="work__photos__text"><span>La Anónima - Centro de Distribución Robotizado</span>Instalación de 8 Compresores a Tornillo Bitzer Serie HS-85 con Potencia de 1045 Hp. Sistema Green High Efficiency.</p>
        <p className="work__photos__text"><span>Dia% - Centro de Distribución</span>Instalación de 8 Compresores a Tornillo Bitzer Serie HS-74 con Potencia de 600 Hp.</p>
        <div className="work__photos__img second"></div>
        <div className="work__photos__img third"></div>
        <p className="work__photos__text"><span>Walmart - Centro de distribución Moreno</span>Instalación de 6 Compresores a Tornillo Bitzer Serie HS-85 con Potencia de 795 Hp. Sistema Green High Efficiency.</p>
        <p className="work__photos__text"><span>Walmart - Centro de distribución Córdoba</span>Instalación de 6 Compresores a Tornillo Bitzer Serie HS-85 con Potencia de 840 Hp.</p>
        <div className="work__photos__img fourth"></div>
      </div>
    </div>
  );
};

export default Work;
