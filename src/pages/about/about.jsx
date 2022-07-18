import React from 'react'
import styled from 'styled-components'
import Dot from '../../component/dot/dot'
import NavHeader from '../../component/nav/nav'
import './style.scss'

const Container = styled.div`
    height: 100%;
    background-image: url(https://cdn.dribbble.com/users/707385/screenshots/16254702/32_9_1.png?compress=1&resize=400x300);
    background-size: cover;
    postion: relative;
`
const ContainerTwo = styled.div`
    height: 100%;
    background-image: url(https://www.pngmagic.com/product_images/website-background-image-size-psd-vector-photo.jpg);
    background-size: cover;
    postion: relative;
`

const About = () => {
  const year = new Date().getFullYear()
  return (
    <>
    <Container>
      <NavHeader/>
      <div className="section-one mt-10">
        <div className="left-rectangle">
          <div className="rectangle-content">
            <p className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300">
                <svg height="80" width="90"><g fill="none"><path stroke="white" d="M5 40 l75 0" /></g></svg>
               <span>ABOUT US</span>
            </p>  
          </div>
          
        </div>
        <div className='rectangle-content-two'>
          <p className='text-white text-6xl'>Built for Saas <br/> and E-commerce</p>
        </div> 
        <div className='rectangle-content-three'>
        <p className='text-white'>Our tools are easy to set up and use with a user friendly dashboard that enables you to set up, launch, automate and manage multi-affliate campaigns in 5 minutes.</p>
        </div> 
      </div>
    </Container>
    <ContainerTwo>
      <div className="section-two">
        <div className='sec-two-title ml-auto'>
        <p className='text-white text-4xl'>Metricks was developed because just like you, we needed a product that could give us <strong>good value.</strong> </p>
        </div>
        <div className="sec-two-content">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          <div>
            <div className='sec-two-left mr-10'>
            <div className='sec-two-grid'>
            <div className='sec-two-grid-title'>
              <p className="number-one text-white">01</p>
              <p className="inline-flex items-center text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300">
                <svg height="80" width="90"><g fill="none"><path stroke="white" d="M5 40 l75 0" /></g></svg>
               <span>WHY US?</span>
              </p>  
              </div>
              <p className='text-white mx-auto'> We pride ourselves in our ability to innovate and create world-class tools that provide reliable and efficient touchpoints between advertisers and affiliates.</p>
            </div>
            <div className='dot-wraper'>
            <Dot/>
            </div>
            </div>
          </div>
          <div>
            <div className="sec-two-rect mx-auto pb-3">
            <div className='sec-two-grid'>
              <div className='sec-two-grid-title'>
              <p className="number-one text-white">02</p>
              <p className="inline-flex items-center text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300">
                <svg height="80" width="90"><g fill="none"><path stroke="white" d="M5 40 l75 0" /></g></svg>
               <span>GROWING WITH YOU</span>
              </p>  
              </div>
              <p className='text-white pl-3'> Leveraging the best technology, we have developed an all-in-one affiliate marketing tracking softaware, a genious tool to help you track, automate and optimize your influencer campaigns, all from one dashboard.</p>
              <p className='text-white pl-3 py-5'>Our team of experts are constantly brainstorming, testing and developing new solutions with only one thing in mind - your business growth. Your success is our success and by giving you the tools you need to scale, we grow as well.</p>
            </div>
            </div>
          </div>
        </div>
        </div>
        <div className="secton-three">
        <div className="question">
        <div className="sec-three-content">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          <div>
            <div className='sec-two-left mr-10'>
            <div className='sec-two-grid'>
              <p className='text-white text-3xl py-5'>Got a Question?</p>
              <p className='text-white mx-auto'>See how Metricks can help your business grow with best affiliate marketing tracking software.</p>
              <p className="inline-flex items-center py-2 text-sm font-medium text-center text-fuchsia-600 rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300">
                <span>Contact Us</span>
                <svg aria-hidden="true" className="mr-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </p>  
            </div>
            </div>
          </div>
          <div>
            
          </div>
        </div>
        </div>
        </div>
        <div className="feet">
        <div className="feet-wrap">
        <div className='grid grid-cols-5 md:grid-cols-5 lg:grid-cols-5 gap-2 px-5 feet-wrap-icon'>
                <div><i className="fa fa-youtube-play text-white" aria-hidden="true"></i></div>
                <div><i className="fa fa-facebook-official text-slate-300" aria-hidden="true"></i></div>
                <div><i className="fa fa-linkedin-square text-slate-300" aria-hidden="true"></i></div>
                <div><i className="fa fa-instagram text-slate-300" aria-hidden="true"></i></div>
                <div><i className="fa fa-twitter-square text-slate-300" aria-hidden="true"></i></div>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 px-5 pt-2 feet-wrap-icon'>
                <div className='text-slate-300'><p className='text-sm'>Terms of services</p></div>
                <div className='text-slate-300'><p className='text-sm'>Privacy policy</p></div>
            </div>
            <div className='px-5 pt-4 feet-wrap-icon'>
                <div className='text-slate-300'>
                  <p className='text-sm'>Copyright {year} @ Peddle Technologies. All Rights Reserved.</p>
                </div>
            </div>
        </div>
        </div>
        </div>
      </div>
    </ContainerTwo>
    </>
  )
}

export default About