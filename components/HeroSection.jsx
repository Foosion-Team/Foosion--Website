import { useState, useEffect } from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import Navbar from './Navbar'
const HeroSectionContainer = styled.div`
height:100%;
background:linear-gradient(rgba(51, 43, 0, 0.4), rgba(51, 43, 0, 0.4)), url(${props => props.img}) repeat;
transition:all 3s ease-in-out;
background-size:cover;
`
const SecondHeadingText = styled.h2`
font: normal normal 900 85px/85px Segoe UI;
width:60%;
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
`
const Bgchange = styled.span`
margin:0 5px;
padding:0px 9px ;
border-radius: 50%;
opacity:0.5;
`

const HeroSection = () => {
  let count = 1
  const [bg, setBg] = useState(1)
  

  useEffect(() => {
    const interval = setInterval(() => {
      setBg(bg => bg + 1 > 8 ? 1 : bg + 1)
    }, 3000)
    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <HeroSectionContainer className='text-white' img={`/images/home${bg}.png`}>
            <Navbar></Navbar>
                
            <div className='px-24'>
                <div className='pt-28'>
                    <Image src='/images/foosion-home-logo.png' width={291} height={117} alt="go" ></Image>
                </div>

                <SecondHeadingText>A Thriving Food Network</SecondHeadingText>
                <Button color='black'>Learn More</Button>
                <Button color='#FFD500'>Join Us</Button>

              <div className='pt-28 text-center pb-10'>
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