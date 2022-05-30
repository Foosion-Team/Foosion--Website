import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
background:linear-gradient(rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.4)), url('/images/cta2.jpeg');
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
const CTA2 = () => {
  return (
    <Div className='flex justify-center items-center text-center'>
        <div>
            <FirstText>Find Us From Anywhere Around the World</FirstText>
        </div>
    </Div>
  )
}

export default CTA2