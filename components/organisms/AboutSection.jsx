import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const AboutContainer = styled.section`
overflow:hidden;
& > *:nth-child(1) {
    flex: 1 1 60%;
}

& > *:nth-child(2) {
    flex: 1 1 50%;
}

@media (max-width: 1024px) {
& > *:nth-child(1) {
    flex: 1 1 70%;
  }
& > *:nth-child(2) {
    flex: 1 1 40%;
  }
}
@media (max-width: 930px) {
& > *:nth-child(1) {
    flex: 1 1 50%;
  }
& > *:nth-child(2) {
    flex: 1 1 25%;
  }
}
`
const HeadingText = styled.h1`
font: normal normal 900 48px/72px Segoe UI;
width:80%;
padding: 0 0 54px 0;
@media (max-width: 1024px) {
font: normal normal 900 40px/62px Segoe UI;
width:90%;
}
@media (max-width: 800px) {
font: normal normal 900 32px/55px Segoe UI;
width:99%;
padding: 0 0 34px 0;
}
@media (max-width: 600px) {
padding: 0 0 15px 0;
font: normal normal 900 27px/45px Segoe UI;
}
`
const ParagraphText = styled.p`
font: normal normal 400 21px/32px Segoe UI;
width:90%;
color: var(--AboutTextTwo);
text-align:justify;
@media (max-width: 800px) {
font: normal normal 400 21px/33px Segoe UI;
width:100%;
}
`
const Span = styled.span`
color: ${(props) => props.color}
`
const Imgs = styled.img`
width: 350px;
height: 500px;
@media (max-width: 1024px) {
width: 250px;
height: 400px;
}
@media (max-width: 600px) {
width: 350px;
height: 250px;
}
`
const ImgsTwo = styled.img`
width: 200px;
height: 320px;
left: 250px;
top:60px;
@media (max-width: 1024px) {
left: 170px;
width:150px;
height:270px;
}
@media (max-width: 930px) {
display:none;
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
background: ${(props) => props.bg};
color: ${(props) => props.color};
@media (max-width: 600px) {
width:140px;
font-size:17px;
margin-top:20px;
margin-right:10px;
padding: 15px;
margin-bottom: 112px;
}`

const AboutSection = () => {
  return (
    <AboutContainer className='pt-12 md:pt-36 xl:pt-52 xl:pb-40 md:flex md:items-center px-4 sm:px-12 xl:px-28'>

      <div>
        <HeadingText>Increasing <Span color='#FFD500'> Food Supply</Span> <Span color='#494949'>with Technology</Span></HeadingText>

        <ParagraphText>
          Today, the majority of the food energy required by the ever-increasing 
          population of the world is supplied by the industrial food industry, which 
          produces food with intensive agriculture and distributes it 
        </ParagraphText>

        <ParagraphText className='pt-8'>
          Addressing the carbon intensity of the food system and food waste 
          are important mitigation measures in the global response to climate 
          change through complex food processing and food distribution systems.
        </ParagraphText>
    
        <div className='flex justify-center pt-4 sm:hidden'>
          <Imgs src='/images/spoons-180.png' className='lg:z-10 -ml-2 md:-ml-0'/>
        </div>
        <div className='pt-2'>
          <Button bg='black' color='white'>Learn More</Button>
          <Link href=''>
            <Button bg='#FFD500' color='black'>Join Us</Button>
          </Link>
        </div>

      </div>
      <div className='lg:flex relative'>
        <Imgs src='/images/spoons-small.png' className='lg:z-10 hidden md:block' />
        <Imgs src='/images/louis-hansel.png' className='hidden md:block lg:mt-44 lg:z-10 lg:-ml-24'/>

        <ImgsTwo src='/images/interface/about-rect.png' className='absolute' />
      </div>
    </AboutContainer>
  )
}

export default AboutSection