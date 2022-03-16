import React from "react";
import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../assets/stylesheets/Work.scss";
import arrow from "../assets/icons/arrow.svg";

const Work = () => {
  const [show1, setShow1] = React.useState(false);
  const [show2, setShow2] = React.useState(false);
  const [show3, setShow3] = React.useState(false);
  const [show4, setShow4] = React.useState(false);
  const workRef = React.useRef();
  const q = gsap.utils.selector(workRef);
  gsap.registerPlugin(ScrollTrigger);
  const toggleActions = 'play reverse play reverse';

  const onEnter1 = () => {
    if(show1 == false){
      setShow1(true)
    } else {
      setShow1(false)
    }
  }
  const onEnter2 = () => {
    if(show2 == false){
      setShow2(true)
    } else {
      setShow2(false)
    }
  }
  const onEnter3 = () => {
    if(show3 == false){
      setShow3(true)
    } else {
      setShow3(false)
    }
  }
  const onEnter4 = () => {
    if(show4 == false){
      setShow4(true)
    } else {
      setShow4(false)
    }
  }

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

    gsap.utils.toArray(".work__photos__img").forEach(photo => {
      gsap.from(photo, {
        y: 130,
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
        y: 130,
        opacity: 0,
        duration: 0.6,
        ease: Power3.easeOut,
        scrollTrigger: {
          trigger: text,
          start: 'top bottom',
          end: 'bottom 40%',
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
        <div className="work__photos__img first" onMouseOver={onEnter1} onMouseLeave={onEnter1} style={show1 == false ? {backgroundImage: `url('https://ik.imagekit.io/c9tj2d0xqow/tr:w-auto/2014-la-anonima-10_Rc3Tap7ch8V.jpg')`, transition: `500ms`} : {backgroundImage: `url('https://ik.imagekit.io/c9tj2d0xqow/tr:w-auto/2012-wallmart-moreno-5_lFjv-SvPK5d.jpg')`, transition: `500ms`}}></div>
        <p className="work__photos__text"><span>La Anónima - Centro de Distribución Robotizado</span>Instalación de 8 Compresores a Tornillo Bitzer Serie HS-85 con Potencia de 1045 Hp. Sistema Green High Efficiency.</p>
        <p className="work__photos__text"><span>Dia% - Centro de Distribución</span>Instalación de 8 Compresores a Tornillo Bitzer Serie HS-74 con Potencia de 600 Hp.</p>
        <div className="work__photos__img second" onMouseOver={onEnter2} onMouseLeave={onEnter2} style={show2 == false ? {backgroundImage: `url('https://ik.imagekit.io/c9tj2d0xqow/tr:w-auto/dia-centrodedistribucion-2_zTJGN_NK-nfr.jpg')`, transition: `500ms`} : {backgroundImage: `url('https://ik.imagekit.io/c9tj2d0xqow/tr:w-auto/dia-centrodedistribucion-1_degPqnhFwEKL.jpg')`, transition: `500ms`}}></div>
        <div className="work__photos__img third" onMouseOver={onEnter3} onMouseLeave={onEnter3} style={show3 == false ? {backgroundImage: `url('https://ik.imagekit.io/c9tj2d0xqow/tr:w-auto/2012-wallmart-moreno-1_lXhdnQrQ2OI0j.jpg')`, transition: `500ms`} : {backgroundImage: `url('https://ik.imagekit.io/c9tj2d0xqow/tr:w-auto/2012-wallmart-moreno-5_lFjv-SvPK5d.jpg')`, transition: `500ms`}}></div>
        <p className="work__photos__text"><span>Walmart - Centro de distribución Moreno</span>Instalación de 6 Compresores a Tornillo Bitzer Serie HS-85 con Potencia de 795 Hp. Sistema Green High Efficiency.</p>
        <p className="work__photos__text"><span>Walmart - Centro de distribución Córdoba</span>Instalación de 6 Compresores a Tornillo Bitzer Serie HS-85 con Potencia de 840 Hp.</p>
        <div className="work__photos__img fourth" onMouseOver={onEnter4} onMouseLeave={onEnter4} style={show4 == false ? {backgroundImage: `url('https://ik.imagekit.io/c9tj2d0xqow/tr:w-auto/wallmart-cordoba-1_sB9UGSJvQYkzg.jpg')`, transition: `500ms`} : {backgroundImage: `url('https://ik.imagekit.io/c9tj2d0xqow/tr:w-auto/wallmart-cordoba-2.jpg')`, transition: `500ms`}}></div>
      </div>
    </div>
  );
};

export default Work;
