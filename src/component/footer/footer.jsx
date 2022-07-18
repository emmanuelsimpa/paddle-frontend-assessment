import React from 'react'
import { Footer, FooterContainer, FooterContent, FooterIconCard, Shadow } from '../../assets/css/styles'

const LandingFooter = () => {
    const year = new Date().getFullYear()
  return (
    <FooterContainer>
       <Footer>
        <FooterContent>
            <FooterIconCard>
            <div className='grid grid-cols-5 md:grid-cols-5 lg:grid-cols-5 gap-6 px-5'>
                <div><i className="fa fa-youtube-play text-white" aria-hidden="true"></i></div>
                <div><i className="fa fa-facebook-official text-slate-300" aria-hidden="true"></i></div>
                <div><i className="fa fa-linkedin-square text-slate-300" aria-hidden="true"></i></div>
                <div><i className="fa fa-instagram text-slate-300" aria-hidden="true"></i></div>
                <div><i className="fa fa-twitter-square text-slate-300" aria-hidden="true"></i></div>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 px-5'>
                <div className='text-slate-300'>Terms of services</div>
                <div className='text-slate-300'>Privacy policy</div>
            </div>
            <div className='px-5 '>
                <div className='text-slate-300'>Copyright {year} @ Peddle Technologies. All Rights Reserved.</div>
            </div>
            </FooterIconCard>
        </FooterContent>
       </Footer>
       <Shadow>.</Shadow>
    </FooterContainer>
  )
}

export default LandingFooter