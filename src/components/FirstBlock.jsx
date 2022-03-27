import React from "react";
import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../assets/stylesheets/FirstBlock.scss";

const FirstBlock = () => {
  const el = React.useRef();
  const q = gsap.utils.selector(el);
  gsap.registerPlugin(ScrollTrigger);

  React.useEffect(() => {
    gsap.from(q(".fbText"), {
      scrollTrigger: {
        trigger: q(".fb__text"),
        start: "top 50%",
        end: "bottom top",
        toggleActions: 'play stop restart stop',
      },
      duration: 0.7,
      opacity: 0,
      y: 130,
      ease: Power3.easeOut,
    });
  }, []);

  return (
    <div className="fb" ref={el}>
      <div className="fb__text">
        <h1 className="fb__text__title fbText">Soluciones en frío</h1>
        <p className="fb__text__subtitle fbText">
          Con el mayor ahorro energético y la mejor tecnología en frío
        </p>
      </div>
    </div>
  );
};

export default FirstBlock;
