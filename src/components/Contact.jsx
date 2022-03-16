import React from "react";
import lottie from "lottie-web/build/player/lottie_light";
import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import derigoLogo from "../assets/lottie/logo-derigo-lottie.json";
import "../assets/stylesheets/Contact.scss";
import arrow from '../assets/icons/arrow.svg'

const Contact = () => {
  const contactRef = React.useRef();
  const animRef = React.useRef();
  const tl = React.useRef();
  const q = gsap.utils.selector(contactRef);
  gsap.registerPlugin(ScrollTrigger);

  React.useEffect(() => {
    gsap.defaults({ duration:0.5 })
    tl.current = gsap
    .timeline()
    .from(
      q('.contact__title__subtitle'),
      {
        opacity: 0,
        y: 130,
        ease: Power3.easeOut
      },
    )
    .from(
      q('.contact__title__title'),
      {
        opacity: 0,
        y: 130,
        ease: Power3.easeOut
      },
      '<'
    )
    .from(
      q('.contact__form'),
      {
        opacity: 0,
        y: 130,
        ease: Power3.easeOut
      },
      '<0.25'
    )

    lottie.loadAnimation({
      container: document.querySelector("#derigo-logo"),
      animationData: derigoLogo,
      renderer: "svg",
      loop: false,
      autoplay: false,
      });

    ScrollTrigger.create({
      trigger: contactRef.current,
      start:'top 50%',
      end: 'bottom top',
      animation: tl.current,
      onEnter: () => {
        tl.current.play();
        lottie.play();
      },
      onLeave: () => {
        tl.current.reverse();
        lottie.stop();
      },
      onEnterBack: () => {
        tl.current.play();
        lottie.play();
      },
      onLeaveBack: () => {
        tl.current.reverse();
        lottie.stop();
      },
    });

  },[])

  return (
      <div className="contact" ref={contactRef}>
        <div className="contact__title">
          <p className="contact__title__subtitle">Contactanos</p>
          <h1 className="contact__title__title">Ideamos la mejor solucion en frio para tu proyecto.</h1>
        </div>
        <form className="contact__form">
          <h3>Contacto</h3>
          <div className="contact__form__input">
            <input type="text" placeholder="Nombre" />
            <span />
          </div>
          <div className="contact__form__input">
            <input type="email" placeholder="E-mail" />
            <span />
          </div>
          <div className="contact__form__textarea">
            <textarea name="mensaje" placeholder="Mensaje" />
            <span />
          </div>
          <button className="contact__form__button">
            <span className="contact__form__button__text">Enviar</span>
            <img
            className="contact__form__button__icon"
            src={arrow}
            alt="Flecha apuntando a la derecha"
            />
          </button>
        </form>

        <div id="derigo-logo" className="contact__lottie" ref={animRef}></div>
      </div>
  );
};

export default Contact;