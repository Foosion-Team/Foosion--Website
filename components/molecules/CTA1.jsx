import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
background:linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/cta1.jpeg');
height:100vh;
background-size:cover;
`
const FirstText = styled.h1`
font: normal normal 900 75px/55px Segoe UI;
padding-bottom:30px;
`
const SecondText = styled.p`
font: normal normal 400 45px/35px Segoe UI;
padding-bottom:45px;
`
const Button = styled.button`
margin-right:24px;
padding: 20px;
width:50%;
font-size:25px;
border-radius:11px;
background: transparent;
border: 2px solid white;
@media (max-width: 600px) {
width:240px;
font-size:17px;
padding: 15px;
}
`
const CTA1 = () => {
  return (
    <Div className='flex justify-center items-center text-center text-white'>
        <div>
            <FirstText>Join Us</FirstText>
            <SecondText>Get to Do your Best Work Here !</SecondText>
            <Button>Explore</Button>
        </div>
    </Div>
  )
}

export default CTA1