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
width:70%;
margin:auto;
`
const Button = styled.button`
margin-right:24px;
padding: 20px;
width:50%;
font-size:25px;
border-radius:11px;
background: transparent;
border: 3px solid black;
@media (max-width: 600px) {
width:240px;
font-size:17px;
padding: 15px;
}`

const CTA2 = () => {
  return (
    <Div className='flex justify-center items-center text-center'>
        <div>
            <FirstText>Find Us From Anywhere Around the World</FirstText>
            <Button>See Locations</Button>
        </div>
    </Div>
  )
}

export default CTA2