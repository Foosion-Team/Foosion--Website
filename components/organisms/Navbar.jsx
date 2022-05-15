import React, { useState } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import MobileMenu from '../molecules/MobileMenu' 
const NavbarContainer = styled.nav`
`
const List = styled.li`
margin-right:50px;
margin-top: 40px;
font-weight: 700;
font-size:21px;
letter-spacing:1px;
&:last-child {
    margin-top: 30px;
}
`
const Button = styled.button`
background: black;
border-radius:11px;
font-size:20px;
font-weight: bold;
width:190px;
`
const HamMenu = styled.div`
    display: flex;
    margin: 10px 0px 10px 7px;
    width: 35px;
    height: 4px;
    background: white;
    &:nth-child(2){
        width: 25px;
    }
    @media (max-width: 1024px) {
        margin: 10px 0px 10px 7px;
    }
    @media (max-width: 550px) {
        margin: 10px 0px 10px 10px;
    }
`
const Navbar = () => {
  const [show, setShow] = useState(false)
  return (
    <div>
    <NavbarContainer>
      { show &&  <MobileMenu close={setShow}></MobileMenu> }

        <ul className='flex text-white align-middle justify-end'>
            <ul className='hidden xl:flex align-middle justify-end'>
              <List>About us</List>
              <List>Vendors</List>
              <List>Join us</List>
              <List>
              <Link href='https://play.google.com/store/apps/details?id=com.foosion'>
                <a target="_blank">
                  <Button  className='p-4'>Get The App</Button>
                </a>
              </Link>
            </List>
            </ul>
            <List className='block xl:hidden' onClick={() => setShow(true)}>
              <HamMenu></HamMenu>
              <HamMenu></HamMenu>
              <HamMenu></HamMenu>
            </List>
        </ul>
    </NavbarContainer>

    
    </div>
  )
}

export default Navbar