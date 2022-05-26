import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
const FooterContainer = styled.footer`
`
const FirstText = styled.h2`
letter-spacing: 0px;
color: var(--FooterText);
text-align:center;
font: normal normal 300 21px/55px Segoe UI;
opacity:0.7;
`
const FooterListHead = styled.li`
padding: 40px 0 0;
font: normal normal bold 21px/45px Segoe UI;
color: var(--FooterTextTwo);
cursor: pointer;
:hover {
    color: var(--FooterTextFour);
}
`

const FooterList = styled.li`
font: normal normal 400 21px/60px Segoe UI;
color: var(--FooterTextThree);
cursor: pointer;
`
const Line = styled.div`
background:white;
border-top: 0.8px solid var(--FooterText);
padding:1px;
height:1px;
opacity:0.7;
width:100%;
`
const FooterBottomList = styled.li`
font: normal normal 600 22px/50px Segoe UI;
color: var(--FooterTextTwo);
margin-left:20px;
:nth-child(1){
margin-left:0px;
}
`
const Footer = () => {
  return (
        <FooterContainer className='px-11'>
            <FirstText className=''>Foosion, A <b>New</b> Way to Health Living</FirstText>

            <Line></Line>


            <div className='flex justify-between pb-16 pt-2'>
                <ul className='flex items-center flex-col'>
                    <FooterListHead>
                         <Image src='/images/foosion-secondary-logo.png' width={180} height={60} alt="go" objectFit='contain'></Image>
                    </FooterListHead>
                    <li className='-mt-5'>
                        <Image src="/images/google-play-badge-US.svg" width={100} height={100} objectFit='contain' alt="footer-logo" />
                    </li>
                    <li className='-mt-10'>
                        <Image src="/images/Download_on_the_App_Store_Badge_US-UK.svg" width={100} height={100} objectFit='contain' alt="footer-logo" />
                    </li>
                </ul>
                <ul>
                    <FooterListHead>Join Us</FooterListHead>
                    <FooterList>Careers</FooterList>
                    <FooterList>Safety</FooterList>
                    <FooterList>Locations</FooterList>
                    <FooterList>Foosioniers</FooterList>
                    <FooterList>Press</FooterList>
                    <FooterList>F-Blog</FooterList>
                    <FooterList>PBM Nation</FooterList>
                    <FooterList>Insurance</FooterList>
                </ul>
                <ul>
                    <FooterListHead>About</FooterListHead>
                    <FooterList>Vendors</FooterList>
                    <FooterList>Farmers</FooterList>
                    <FooterList>PBM</FooterList>
                    <FooterList>Foosion Lab</FooterList>
                    <FooterList>Distribution</FooterList>
                </ul>
                <ul>
                    <FooterListHead>Facilities</FooterListHead>
                    <FooterList>Foosion Lab</FooterList>
                    <FooterList>R & D Zones</FooterList>
                    <FooterList>Test Labs</FooterList>
                    <FooterList>GreenHouses</FooterList>
                </ul>
                <ul className='pr-10'>
                    <FooterListHead>Find Us Here</FooterListHead>
                    <FooterList>English</FooterList>
                    <FooterList>Help</FooterList>
                </ul>
            </div>

            <Line></Line>

            <div className='py-7'>
                <ul className='flex'>
                    <FooterBottomList>2022 Foosion</FooterBottomList>
                    <FooterBottomList>User Agreement</FooterBottomList>
                    <FooterBottomList>Privacy Policy</FooterBottomList>
                    <FooterBottomList>Data Requests</FooterBottomList>
                    <FooterBottomList>Legal Bases</FooterBottomList>
                    <FooterBottomList>Data Requests</FooterBottomList>
                </ul>

                <div>
                </div>
            </div>
        </FooterContainer>
  )
}

export default Footer