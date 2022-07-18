import React from 'react'
import Countdown from '../../component/countdown/countdown'
import LandingFooter from '../../component/footer/footer'
import FormInput from '../../component/form/FormInput'
import NavHeader from '../../component/nav/nav'
import { Body, LandingWrap, P, PSmall, LandingContainer } from '../../assets/css/styles'

const Landing = () => {
  return (
    <LandingContainer>
       <div className="container mx-auto test">
            <NavHeader/>
            <LandingWrap >
               <Body>
                <P>Something awesome is coming soon</P>
                <PSmall>Your all-in-one affiliate marketing tracking software <strong>track, automate</strong> and <strong>optimisze</strong> your campaigns</PSmall>
                <Countdown/>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 px-5">
                    <div>
                        <FormInput label="First Name"/>
                    </div>
                    <div>
                        <FormInput label="Last Name"/>
                    </div>
                </div>
                <div className='p-5'>
                <form className="w-full max-w-full border-none rounded-full bg-[#fff]">
                <div className="flex items-center border-none">
                    <input className=" w-full appearance-none bg-transparent text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Enter your email address..."/>
                    <button className="bg-blue-700 hover:bg-blue-500 text-white font-bold py-2 rounded-full w-full" type="button">
                    Join our waiting list
                    </button>
                </div>
                </form>
                </div>
               </Body>
            </LandingWrap>
            <LandingFooter/>
        </div>  
    </LandingContainer> 
  )
}

export default Landing