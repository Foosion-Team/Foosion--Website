import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
const NavbarContainer = styled.nav`
`
const List = styled.li`
margin-right:50px;
margin-top: 35px;
font-weight: 700;
font-size:21px;
letter-spacing:1px;
&:last-child {
    margin-top: 20px;
}
`
const Button = styled.button`
background: black;
border-radius:11px;
font-size:20px;
font-weight: bold;
width:190px;
`
const Navbar = () => {
  return (
    <NavbarContainer>
        <ul className='flex text-white align-middle justify-end'>
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
    </NavbarContainer>
  )
}

export default Navbar