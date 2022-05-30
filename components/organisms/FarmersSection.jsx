import React from 'react'
import styled from 'styled-components'

import HomepageContainer from '../molecules/HomepageContainer'

const Div = styled.div`
background: var(--Color2)
`
const FirstText = styled.h1`
font: normal normal 900 45px/55px Segoe UI;
padding-bottom:30px;
color: var(--Color3);
`
const SecondText = styled.p`
font: normal normal 400 25px/35px Segoe UI;
padding-bottom:45px;
color: var(--Color3);
`
const ThirdText = styled.p`
color: var(--Color3);
`
const Img = styled.img`
width:1000px;
height:500px;
`
const FarmersSection = () => {
  return (
    <HomepageContainer>
        <Div className='text-white flex justify-between rounded-tl-3xl rounded-bl-3xl'>
            <div className='p-16'>
                
            <FirstText>Foosion <br></br> Connects Farmer <br></br> Faster</FirstText>
            <SecondText>At Harvest, food wastage isn't a problem with Foosion why ? it's a network, everyone knows when you're ready to go</SecondText>

            <ThirdText>See How</ThirdText>
            </div>

            <div>
                <Img src="/images/farmers.jpg"/>
            </div>
        </Div>
    </HomepageContainer>
  )
}

export default FarmersSection