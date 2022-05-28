import React from 'react'
import styled from 'styled-components'

const AboutContainer = styled.section`
& > *:nth-child(1) {
    flex: 1 1 60%;
}

& > *:nth-child(2) {
    flex: 1 1 50%;
}
`
const HeadingText = styled.h1`
font: normal normal 900 50px/72px Segoe UI;
width:80%;
padding: 0 0 54px 0;
`
const ParagraphText = styled.p`
font: normal normal 400 21px/32px Segoe UI;
width:90%;
color: var(--AboutTextTwo);
`
const Span = styled.span`
color: ${(props) => props.color}
`
const Imgs = styled.img`
width: 350px;
height: 500px;
`
const ImgsTwo = styled.img`
width: 200px;
height: 320px;
left: 250px;
top:60px;
`
const AboutSection = () => {
  return (
    <AboutContainer className='pt-52 pb-40 flex px-5 xl:px-12'>
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

      </div>
      <div className='flex relative'>
        <Imgs src='/images/spoons-small.png' className='z-10'/>
        <Imgs src='/images/louis-hansel.png' className='mt-44 z-10 -ml-24'/>
        <ImgsTwo src='/images/interface/about-rect.png' className='absolute' />
      </div>
    </AboutContainer>
  )
}

export default AboutSection