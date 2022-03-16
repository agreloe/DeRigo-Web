import React from 'react';
import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import '../assets/stylesheets/Banner.scss';

const Banner = () => {
  const banner = React.useRef();
  const q = gsap.utils.selector(banner);
  gsap.registerPlugin(ScrollTrigger);

  React.useEffect(() => {
    gsap.from(
      banner.current,
      {
        duration: 0.5,
        opacity: 0,
        ease: Power3.easeOut,
      }
    )

    gsap.to(q('.banner__photo'), {
      scrollTrigger: {
        trigger: q('.banner__photo'),
        start:'top 40%',
        end: 'bottom top',
        scrub: true,
        toggleActions: 'play pause reverse play'
      }, 
      scale: 1.2
    });
  },[])

  return (
    <div className='banner' ref={banner}>
        <div className='banner__photo'></div>
    </div>
  )
}

export default Banner