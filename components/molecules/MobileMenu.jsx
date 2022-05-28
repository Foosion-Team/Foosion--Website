import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
const NavbarContainer = styled.nav`
   display: none;
    @media (max-width: 1024px) {
        display:block;
        background: rgba(0, 0, 0, 0.6);
        backdrop-filter: blur(40px);
        text-align:center;
        height: 100vh;
        z-index: 25;
        padding: 20px;
        width:100%;
        position: fixed;
        overflow-y: scroll;
    }
`
const List = styled.li`
margin-top: 40px;
font-weight: 700;
font-size:21px;
letter-spacing:1px;
`
const Button = styled.button`
background: ${(props) => props.color};
border-radius:11px;
font-size:20px;
font-weight: bold;
width:300px;
`
const MobileMenuClose = styled.div`
    display: flex;
    margin: 10px;
    width: 21px;
    height: 2px;
    padding: 0px;
    background: white;
    
    &:nth-child(2) {
        opacity: 0;
    }
    
    &:nth-child(1) {
        transform: translateY(12px) rotate(45deg);
    }
    
    &:nth-child(3) {
        transform: translateY(-12px) rotate(-45deg);
    }
`
const MobileMenu = ({ close }) => {
  return (
    <NavbarContainer>
      <ul onClick={() => close(false)}>
          <li>
              <MobileMenuClose></MobileMenuClose>
              <MobileMenuClose></MobileMenuClose>
              <MobileMenuClose></MobileMenuClose>
          </li>
      </ul>
      <ul className=' text-white align-middle'>
              <List>About us</List>
              <List>Vendors</List>
              <List>Join us</List>
              <List>
                <Link href='https://play.google.com/store/apps/details?id=com.foosion'>
                  <a target="_blank">
                    <Button className='p-5' color='black'>Get The App</Button>
                  </a>
              </Link>
            </List>
            <List>
                <Link href='/form'>
                  <a>
                    <Button className='p-5' color='#FFD500'>Join Us</Button>
                  </a>
                </Link>
            </List>
      </ul>
        
    </NavbarContainer>
  )
}

export default MobileMenu