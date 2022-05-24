import { useState, useEffect } from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'


import Navbar from '../organisms/Navbar'
const HeroSectionContainer = styled.div`
height:100vh;
background:linear-gradient(rgba(51, 43, 0, 0.5), rgba(51, 43, 0, 0.5)), url(${props => props.img}) repeat;
transition:background 3s ease-in-out;
background-size:cover;
@media (max-width: 800px) {
height:100%;
}
`
const SecondHeadingText = styled.h2`
font: normal normal 900 85px/95px Segoe UI;
width:67%;
@media (max-width: 1024px) {
font: normal normal 900 75px/85px Segoe UI;
width: 85%;
}
@media (max-width: 800px) {
font: normal normal 900 60px/70px Segoe UI;
width: 93%;
}
@media (max-width: 600px) {
font: normal normal 900 35px/45px Segoe UI;
width: 93%;
}
`
const LogoImage = styled.div`
width:300px;
@media (max-width: 1024px) {
width:250px;  
}
@media (max-width: 600px) {
width:150px;
}
`
const Button = styled.button`
opacity:0.9;
margin-top:40px;
margin-right:24px;
padding: 20px;
width:170px;
font-size:20px;
border-radius:11px;
background: ${(props) => props.color};
@media (max-width: 600px) {
width:140px;
font-size:17px;
margin-top:20px;
margin-right:10px;
padding: 15px;
margin-bottom: 112px;
}
`
const Bgchange = styled.span`
margin:0 5px;
padding:0px 9px ;
border-radius: 50%;
opacity:0.5;
`

const HeroSection = () => {

  const [bg, setBg] = useState(1)

  const text = ['nil', 'A Thriving Food Network', "A Complete Mix of the Market", "Regulating Food Supply", "Sourcing From the Ground Up","Connecting You to Stores Round You", "Connecting You to Stores Round You", "All Fresh Fruits and Vegetables", "Making Agriculture Smarter"]

  useEffect(() => {
    const interval = setInterval(() => {
      setBg(bg => bg + 1 > 8 ? 1 : bg + 1)
    }, 5000)
    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <HeroSectionContainer className='text-white' img={`/images/home${bg}.jpg`}>
            <Navbar></Navbar>
                
            <div className='px-4 sm:px-12 xl:px-24'>
                <LogoImage className='pt-6 md:pt-28 w-36 md:w-64 '>
                    <Image src='/images/foosion-home-logo.png' width={291} height={117} alt="foosion logo" ></Image>
                </LogoImage>

                <SecondHeadingText>{text[bg]}</SecondHeadingText>
                <Button color='black'>Learn More</Button>
                <Link href='/form'>
                  <Button color='#FFD500'>Join Us</Button>
                </Link>

              <div className='hidden md:flex pt-28 text-center pb-10'>
              <Bgchange onClick={() => setBg(1)} className={ bg === 1 ? 'bg-yellow-500' : 'bg-white' }></Bgchange>
              <Bgchange onClick={() => setBg(2)} className={ bg === 2 ? 'bg-yellow-500' : 'bg-white' }></Bgchange>
              <Bgchange onClick={() => setBg(3)} className={ bg === 3 ? 'bg-yellow-500' : 'bg-white' }></Bgchange>
              <Bgchange onClick={() => setBg(4)} className={ bg === 4 ? 'bg-yellow-500' : 'bg-white' }></Bgchange>
              <Bgchange onClick={() => setBg(5)} className={ bg === 5 ? 'bg-yellow-500' : 'bg-white' }></Bgchange>
              <Bgchange onClick={() => setBg(6)} className={ bg === 6 ? 'bg-yellow-500' : 'bg-white' }></Bgchange>
              <Bgchange onClick={() => setBg(7)} className={ bg === 7 ? 'bg-yellow-500' : 'bg-white' }></Bgchange>
              <Bgchange onClick={() => setBg(8)} className={ bg === 8 ? 'bg-yellow-500' : 'bg-white' }></Bgchange>
              </div>
            
            </div>
    </HeroSectionContainer>
  )
}

export default HeroSection