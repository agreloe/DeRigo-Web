import React from "react";
import lottie from "lottie-web/build/player/lottie_light";
import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import derigoLogo from "../assets/lottie/logo-derigo-lottie.json";
import "../assets/stylesheets/Contact.scss";
import arrow from "../assets/icons/arrow.svg";
import emailjs from '@emailjs/browser';
import { init } from "@emailjs/browser";

const Contact = () => {
  init("fmCoPVvWrO9k_JDN5");
  const contactRef = React.useRef();
  const animRef = React.useRef();
  const tl = React.useRef();
  const form = React.useRef();
  const nameRef = React.useRef();
  const mailRef = React.useRef();
  const msgRef = React.useRef();
  const q = gsap.utils.selector(contactRef);
  gsap.registerPlugin(ScrollTrigger);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_w24f2pr', 'template_jjuo9mr', form.current, 'fmCoPVvWrO9k_JDN5')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      setTimeout(() => {
        nameRef.current.value = ""
        mailRef.current.value = ""
        msgRef.current.value = ""
      }, 500)
  };

  React.useEffect(() => {
    gsap.defaults({ duration: 0.5 });
    tl.current = gsap
      .timeline()
      .from(q(".contact__title__subtitle"), {
        opacity: 0,
        y: 130,
        ease: Power3.easeOut,
      })
      .from(
        q(".contact__title__title"),
        {
          opacity: 0,
          y: 130,
          ease: Power3.easeOut,
        },
        "<"
      )
      .from(
        q(".contact__form"),
        {
          opacity: 0,
          y: 130,
          ease: Power3.easeOut,
        },
        "<0.25"
      );

    lottie.loadAnimation({
      container: document.querySelector("#derigo-logo"),
      animationData: derigoLogo,
      renderer: "svg",
      loop: false,
      autoplay: false,
    });

    ScrollTrigger.create({
      trigger: contactRef.current,
      start: "top 50%",
      end: "bottom top",
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
  }, []);

  return (
    <div className="contact" ref={contactRef}>
      <div className="contact__title">
        <p className="contact__title__subtitle">Contactanos</p>
        <h1 className="contact__title__title">
          Ideamos la mejor solución en frío para tu proyecto.
        </h1>
      </div>

      <form className="contact__form" ref={form}>
        <h3>Contacto</h3>
        <div className="contact__form__input">
          <input
          type="text"
          name="user_name"
          placeholder="Nombre"
          ref={nameRef}
          />
          <span />
        </div>
        <div className="contact__form__input">
          <input
          type="email"
          name="user_email"
          placeholder="E-mail"
          ref={mailRef}
          />
          <span />
        </div>
        <div className="contact__form__textarea">
          <textarea
          name="message"
          placeholder="Mensaje"
          ref={msgRef}
          />
          <span />
        </div>
        <button className="contact__form__button" onClick={sendEmail}>
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
