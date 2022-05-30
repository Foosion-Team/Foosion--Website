import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
background:linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/cta1.jpeg');
height:100vh;
background-size:cover;
`
const FirstText = styled.h1`
font: normal normal 900 45px/55px Segoe UI;
padding-bottom:30px;
`
const SecondText = styled.p`
font: normal normal 400 25px/35px Segoe UI;
padding-bottom:45px;
`
const CTA1 = () => {
  return (
    <Div className='flex justify-center items-center text-center text-white'>
        <div>
            <FirstText>Join Us</FirstText>
        <SecondText>Get to Do your Best Work Here !</SecondText>
        </div>
    </Div>
  )
}

export default CTA1