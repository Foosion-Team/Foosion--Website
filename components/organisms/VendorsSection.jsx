import React from 'react'
import styled from 'styled-components'

import HomepageContainer from '../molecules/HomepageContainer'

const Div = styled.div`
background: var(--Color1)
`
const FirstText = styled.h1`
font: normal normal 900 45px/55px Segoe UI;
padding-top:10px;
padding-bottom:0px;
`
const SecondText = styled.p`
font: normal normal 400 25px/35px Segoe UI;
padding-bottom:70px;
`
const ThirdText = styled.p`
background: var(--Color1)
`
const Img = styled.img`
width: ${(props) => props.width};
height: ${(props) => props.height};
`
const VendorsSection = () => {
  return (
    <HomepageContainer>
        <Div className='text-white flex justify-between rounded-tl-3xl rounded-bl-3xl'>
            <div className='p-16'>
                
            <Img src='/images/interface/Icon feather-shopping-bag.png' width='40px' height="44px" alt='vendors'/> 
            <FirstText>Vendors <br></br> Never Lack with <br></br> Foosion</FirstText>
            <SecondText>With the Foosion App at your Finger tips, you have access to restock your shelves withins minutes</SecondText>

            <ThirdText className='flex items-center'> <Img src='/images/interface/Icon ionic-md-help-circle.png' width='47px' height="47px" alt='vendors' className='mr-3'/> See How</ThirdText>
            </div>

            <div>
                <Img src="/images/vendors.jpeg" width="1000px" height="535px"/>
            </div>
        </Div>
    </HomepageContainer>
  )
}

export default VendorsSection