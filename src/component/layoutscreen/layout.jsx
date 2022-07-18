import React from 'react';
import styled, {keyframes} from 'styled-components';

const spin = keyframes`
to { transform: rotate(360deg); }
`

const Main = styled.main`
    height: 100vh;
    width: 100vw;
    background-color: rgb(231, 212, 240);
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    margin: 0;
    padding: 0;
`

const Spin = styled.div`
height: 14rem;
width: 14rem;
border: 20px solid rgb(133, 106, 214);
border-left: 20px solid rgb(96, 47, 153);
border-radius: 50%;
display: flex;
justify-content: center;
align-items: center;
animation: ${spin} infinite 1.5s linear;
`

const SpinText = styled.p`
position: absolute;
    font-size: 14px;
    color: rgb(54, 54, 54);
    font-weight: 600;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    font-family: sans-serif;
`

const Layout = () => {
  return (
    <div>
        <Main>
        <SpinText>
            loading...
        </SpinText>
        <Spin></Spin>
        </Main>
    </div>
  )
}

export default Layout


