import React from 'react'
import lottie from "lottie-web/build/player/lottie_light";
import derigoLogo from "../assets/lottie/logo-derigo-lottie.json";
import { gsap, Power3 } from "gsap";
import '../assets/stylesheets/Loading.scss'

const Loading = () => {
  const loaderRef = React.useRef();
  const containerRef = React.useRef();

  React.useEffect(() => {
    lottie.loadAnimation({
        container: loaderRef.current,
        animationData: derigoLogo,
        renderer: "svg",
        loop: false,
        autoplay: true,
    });
    
    gsap.to(
        containerRef.current,
        {
            delay: 1.8,
            duration: .2,
            opacity: 0,
            ease: Power3.easeOut
        }
    )
    
  },[])

  return (
    <div className='loader' ref={containerRef}>
        <div className='loader__lottie' ref={loaderRef}></div>
    </div>
  )
}

export default Loading