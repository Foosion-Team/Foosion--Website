import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'


import App from '../molecules/App'


const LineHeader = styled.div`
background: transparent linear-gradient(270deg, #FFF950 0%, #00F0C8 100%) 0% 0% no-repeat padding-box;
height:100px;
`
const LineHeaderText = styled.h1`
font: normal normal 400 48px/65px Raleway;
@media (max-width: 768px) {
font: normal normal 400 16px/16px Raleway;
}
`
const LineHeaderTextBold = styled.span`
font: normal normal 900 48px/65px Raleway;
@media (max-width: 768px) {
font: normal normal 900 16px/16px Raleway;
}
`
const Div = styled.div`
::-webkit-scrollbar {
  width: 0;}
`
const ImageContainer = styled.div`
width:200px;
`

const AppSection = () => {
  return (
      <div>

        <LineHeader className='px-4 sm:px-12 xl:px-28 flex justify-between items-center'>
            <LineHeaderText>
                <LineHeaderTextBold>Foosion</LineHeaderTextBold> Mobile
            </LineHeaderText>

            <ul className='flex'>
                <li>
                    <Image src="/images/footer/google-play-badge-US.svg" width={150} height={100} objectFit='contain' alt="footer-logo" />
                </li>
                <li>
                    <Image src="/images/footer/Download_on_the_App_Store_Badge_US-UK.svg" width={100} height={100} objectFit='contain' alt="footer-logo" />
                </li>
            </ul>
        </LineHeader>
        
        
        <Div className='flex justify-between px-4 sm:px-12 xl:px-28 pt-32 pb-28 overflow-x-scroll'>
            {
                App.map(x => {
                    return (
                        <div>
                            <ImageContainer key={x.id} className='ml-10'>
                                <img src={x.image} />
                            </ImageContainer>
                        </div>
                    )
                })
            }
        </Div>
    </div>
  )
}

export default AppSection