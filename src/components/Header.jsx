import React from "react";
import "../assets/stylesheets/Header.scss";
import { gsap, Power3 } from "gsap";
import logo from "../assets/icons/Derigo_logo_Redesign.svg";

const Header = () => {
  const headerRef = React.useRef(null);
  const buttonRef = React.useRef(null);
  const q = gsap.utils.selector(headerRef);

  let tl = gsap.timeline({ paused: true, reversed: true });

  React.useEffect(() => {
    gsap.from(
      headerRef.current,
      {
        duration: 0.5,
        opacity: 0,
        ease: Power3.easeOut,
      }
    )

    gsap.defaults({duration: 0.3})
    tl.to(q('.midLine'), {
      x: 18,
      ease: Power3.easeOut,
    })
      .to(
        q('.topLine'),
        {
          x: 1,
          rotationZ: 45,
          ease: Power3.easeOut,
        },
      )
      .to(
        q('.bottomLine'),
        {
          x: 1,
          y: -1,
          rotationZ: -45,
          ease: Power3.easeOut,
        },
        "<"
      )
      .to(q('.menu-home'), {
        opacity: 1,
        y: 0,
        ease: Power3.easeOut,
      })
      .to(q('.menu-work'), {
        opacity: 1,
        y: 0,
        ease: Power3.easeOut,
      });
  }, []);

  const iconOnClick = () => {
    tl.reversed() ? tl.restart() : tl.reverse();
    buttonRef.current.ariaLabel === "open menu"
      ? (buttonRef.current.ariaLabel = "Close menu")
      : (buttonRef.current.ariaLabel = "Open menu");
    buttonRef.current.ariaPressed === "false"
      ? (buttonRef.current.ariaPressed = "true")
      : (buttonRef.current.ariaPressed = "false");
  };

  return (
    <header className="header" ref={headerRef}>
      <img className="header__logo" src={logo} alt="Logo de la empresa DeRigo Refrigeration" />
      <button
        type="button"
        aria-label="Open menu"
        aria-pressed="false"
        className="header__btn"
        ref={buttonRef}
        onClick={iconOnClick}
      >
        <svg
          id="Menu_Icon"
          className="header__btn__icon"
          data-name="Menu Icon"
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="15"
          viewBox="0 0 18 15"
        >
          <line
            className="topLine"
            x1="0"
            y1="0.5"
            x2="18"
            y2="0.5"
            strokeMiterlimit="10"
          />
          <line
            className="midLine"
            x1="0"
            y1="7.5"
            x2="18"
            y2="7.5"
            strokeMiterlimit="10"
          />
          <line
            className="bottomLine"
            x1="0"
            y1="14.5"
            x2="18"
            y2="14.5"
            strokeMiterlimit="10"
          />
        </svg>
      </button>
      <div className="header__modal">
        <ul>
          <li className="menu-home"
          onClick={() => {
            const anchor = document.querySelector('#contact')
            anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
          }}>Contact</li>
          <li
          className="menu-work"
          onClick={() => {
            const anchor = document.querySelector('#work')
            anchor.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }}
          >Work</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
