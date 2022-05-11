import { useState } from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import Navbar from './Navbar'

const HeroSectionContainer = styled.div`
height:100vh;
background:linear-gradient(rgba(51, 43, 0, 0.4), rgba(51, 43, 0, 0.4)), url(/images/home6.png) repeat;
background-size:cover;
`
const BackgroundContainer = styled.div`
background: ;
height:100vh;
`
const SecondHeadingText = styled.h2`
font: normal normal 900 75px/75px Segoe UI;
width:60%;
`
const Button = styled.button`
opacity:0.9;
margin-top:40px;
margin-right:24px;
padding: 23px;
width:175px;
font-size:20px;
border-radius:11px;
background: ${(props) => props.color};
`
const HeroSection = () => {
  return (
    <HeroSectionContainer className='text-white'>
        <BackgroundContainer>
            <Navbar></Navbar>
                
            <div className='px-32'>
                <div className='pt-48'>
                    <Image src='/images/foosion-home-logo.png' width={291} height={117} alt="go" ></Image>
                </div>

                <SecondHeadingText>A Thriving Food Network</SecondHeadingText>
                <Button color='black'>Learn More</Button>
                <Button color='#FFD500'>Join Us</Button>
            </div>
        </BackgroundContainer>
    </HeroSectionContainer>
  )
}

export default HeroSection