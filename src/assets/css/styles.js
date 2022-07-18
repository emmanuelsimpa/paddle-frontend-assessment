import styled from "styled-components";

// APP 
export const Wrap = styled.div`
margin: 0 15px;
overflow: hidden;
position: relative;
`

// LANDING
export const LandingContainer = styled.div`
    min-height: 1024px;
    background-image: url(https://t3.ftcdn.net/jpg/04/49/08/96/360_F_449089687_gLBwPJnCXL0OksLAZDI8tFetK8m63DN4.jpg);
    background-size: cover;
    postion: relative;
`
export const LandingWrap = styled.div`
display: flex;
justify-content: center;
margin-top: 1rem;
`

export const P = styled.p`
color: #fff;
font-weight: 800;
font-size: 4em;
text-align: center;
text-transform: uppercase;
@media (max-width: 1440px) {
    font-weight: 800;
    font-size: 3em;
}
@media (max-width: 1024px) {
    font-weight: 800;
    font-size: 2em;
}
@media (max-width: 425px) {
    font-weight: 800;
    font-size: 1em;
}
@media (max-width: 375px) {
    font-weight: 800;
    font-size: 0.5em;
}
`
export const PSmall = styled.p`
color: #fff;
padding: 25px 0;
font-size: 1.45em;
text-align: center;
@media (max-width: 1440px) {
    
    font-size: 18px;
}
@media (max-width: 1024px) {
    
    font-size: 18px;
}
@media (max-width: 425px) {
    
    font-size: 12px;
}
@media (max-width: 375px) {
    
    font-size: 8px;
}
`

export const Body = styled.div`
width: 50%;
margin-top: 0.5rem;
margin-bottom: 0.5rem;
`

// COUNTDOWN
export const DayWrap = styled.div`
padding: 10px 0px 10px 0px;
background: #fff;
`

// LANDINGFOOTER
export const Footer = styled.div`
    width: 100%;
    height: 50%;
    min-height: 187px;
    position: absolute;
    bottom: 0%;
    left: 0%;
    top: 80%;
    border-radius: 50% 50% 0 0 / 100% 100% 0 0;
    border: 1px solid gray;
    border-bottom: 1;
    margin-top: 10px;
    background-color: rgba(0,0,0,0.12228641456582634);
    display: flex;
    justify-content: center;   
`

export const FooterContainer = styled.div`
    max-height: 100%;
    min-height: 100%;   
`
export const FooterContent = styled.div`
    height: 100%;
    width: 50%;
    margin-top: 30px;
`
export const FooterIconCard = styled.div`
width: 100%;
height: 30%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`

export const Shadow = styled.div`
    position: absolute;
    bottom: 0;
    top: 96%;
    width: 76%;
    height: 10px;
    display: flex;
    left: 12%;
    justify-content: center;
    box-shadow: 0px 29px 11px 0px rgba(255,255,255,0.92);
    -webkit-box-shadow: 0px 29px 11px 0px rgba(255,255,255,0.92);
    -moz-box-shadow: 0px 29px 11px 0px rgba(255,255,255,0.92);
`