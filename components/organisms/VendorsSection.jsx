import React from 'react'
import styled from 'styled-components'

import HomepageContainer from '../molecules/HomepageContainer'

const Div = styled.div`
background: var(--Color1)
`
const FirstText = styled.h1`
font: normal normal 900 45px/55px Segoe UI;
padding-bottom:40px;
`
const SecondText = styled.p`
font: normal normal 400 25px/35px Segoe UI;
padding-bottom:70px;
`
const ThirdText = styled.p`
background: var(--Color1)
`
const Img = styled.img`
width:1000px;
height:500px;
`
const VendorsSection = () => {
  return (
    <HomepageContainer>
        <Div className='text-white flex justify-between rounded-tl-3xl rounded-bl-3xl'>
            <div className='p-16'>
                
            <FirstText>Vendors <br></br> Never Lack with <br></br> Foosion</FirstText>
            <SecondText>With the Foosion App at your Finger tips, you have access to restock your shelves withins minutes</SecondText>

            <ThirdText>See How</ThirdText>
            </div>

            <div>
                <Img src="/images/vendors.jpeg"/>
            </div>
        </Div>
    </HomepageContainer>
  )
}

export default VendorsSection