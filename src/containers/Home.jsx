import React from 'react'
import Header from '../components/Header'
import FirstBlock from '../components/FirstBlock'
import Banner from '../components/Banner'
import Info from '../components/Info'
import Work from '../components/Work'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import '../assets/stylesheets/Home.scss'

const Home = () => {
  const workSection = React.useRef();
  gsap.registerPlugin(ScrollTrigger);

  React.useEffect(() => {
    ScrollTrigger.create({
      trigger: workSection.current,
      start:'top 50%',
      end:'bottom 50%',
      onEnter: () => gsap.to("body", {backgroundColor:'#3d4aa1', ease: Power3.easeOut}),
      onLeave: () => gsap.to("body", {backgroundColor:'white', ease: Power3.easeOut}),
      onLeaveBack: () => gsap.to("body", {backgroundColor:'white', ease: Power3.easeOut}),
      onEnterBack: () => gsap.to("body", {backgroundColor:'#3d4aa1', ease: Power3.easeOut}),
    });
  },[])

  return (
      <section className='home'>
        <section className='home__container'>
          <Header />
          <FirstBlock />
          <Banner />
        </section>

        <section className='home__container'>
          <Info />
        </section>

        <section ref={workSection} className='home__container'>
          <Work />
        </section>

        <section className='home__container'>
          <Contact />
          <Footer />
        </section>
      </section>
  )
}

export default Home