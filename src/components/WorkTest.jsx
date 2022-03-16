import React from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import '../assets/stylesheets/WorkTest.scss'
import arrow from "../assets/icons/arrow.svg";


const WorkTest = () => {
    gsap.registerPlugin(ScrollTrigger);
    const everythingRef = React.useRef();
    const q = gsap.utils.selector(everythingRef)

    React.useEffect(() => {

        ScrollTrigger.scrollerProxy(".container", {
            getBoundingClientRect() {
            return {
                left: 0,
                top: 0,
                width: window.innerWidth,
                height: window.innerHeight
            };
            }
        });

        let pinWrap = document.querySelector(".pin-wrap");

        gsap.to(".pin-wrap", {
            scrollTrigger: {
                trigger: ".container",
                scrub: 1,
                pin: true,
                //anticipatePin: 1,
                start: "top 50%",
                end: pinWrap.offsetWidth
            },
            x: -(pinWrap.offsetWidth - window.innerWidth),
            ease: "none"
        });

        ScrollTrigger.refresh();

    },[])

  return (

        <div className="container">
            <section id="sectionPin">
                <div className="pin-wrap">

                    <div className="pin-img"></div>
                    <div className="pin-img"></div>
                    <div className="pin-img"></div>
                    <div className="pin-img"></div>
                    <div className="pin-img"></div>
                    <div className="pin-img"></div>

                </div>
            </section>
        </div>

  )
}

export default WorkTest