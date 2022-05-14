import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
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
background: #F1F1F1;
border-radius:11px;
font-size:20px;
font-weight: bold;
width:190px;
`
const NavbarSecondary = () => {
  return (
    <NavbarContainer className='flex align-middle justify-between items-center'>

       <Link href='/'>
           <div className='pt-5'>
               <Image src='/images/foosion-home.png' width={180} height={60} alt="go" objectFit='contain'></Image>
           </div>
       </Link>
        
        <ul className='flex text-black'>
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

export default NavbarSecondary