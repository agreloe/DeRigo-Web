import React from 'react'
import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import '../assets/stylesheets/HorizontalCarousel.scss'

 const HorizontalCarousel = () => {
   /* React.useEffect(()=>{
        gsap.utils.toArray(".section").forEach((section)=>{
            const cardsWrap = section.querySelector('.section__cards') 
            const oneCard = section.querySelector('.section__card') 
            gsap.to(cardsWrap, {
                x: () => { return -( cardsWrap.scrollWidth - oneCard.offsetWidth ) },
                ease: "none",
                scrollTrigger: {
                  trigger: section,
                  start:() => "top bottom",
                  end: () => "+=" + (cardsWrap.scrollWidth - oneCard.offsetWidth),
                  scrub: true,
                  pin: true,
                  invalidateOnRefresh: true,
                  anticipatePin: 1,
                },        
              });
        })
    },[]) */
  return (
    <section class="section horizontal">
        <div class="section__cards">

          <div class="section__card">
            <h1 class="section__title">Section 3a</h1>
          </div>

          <div class="section__card">
            <h1 class="section__title">Section 3b</h1>
          </div>

          <div class="section__card">
            <h1 class="section__title">Section 3c</h1>
          </div>

          <div class="section__card">
            <h1 class="section__title">Section 3d</h1>
          </div>

          <div class="section__card">
            <h1 class="section__title">Section 3e</h1>
          </div>

          <div class="section__card">
            <h1 class="section__title">Section 3f</h1>
          </div>

        </div>
</section>
  )
}

export default HorizontalCarousel