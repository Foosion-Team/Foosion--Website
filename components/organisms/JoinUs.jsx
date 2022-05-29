import React, { useState } from 'react'
import styled from 'styled-components'
import Distributers from '../molecules/Forms/Distributers'
import Farmers from '../molecules/Forms/Farmers'
import Retailers from '../molecules/Forms/Retailers'
import NavbarSecondary from '../organisms/NavbarSecondary'

const FormContainer = styled.div`
background: #F7F7F7 0% 0% no-repeat padding-box;
`
const FirstHeadingText = styled.h1`
font: normal normal bold 37px/60px Segoe UI;
@media (max-width: 1024px) {
font: normal normal bold 25px/30px Segoe UI;
}
`
const SecondHeadingText = styled.h2`
font: normal normal 600 20px/30px Segoe UI;
color: ${(props) => props.color};
`
const ButtonContainer = styled.div`
background: #FFFFFF 0% 0% no-repeat padding-box;
border-radius: 36px;
@media (max-width: 1024px) {
  display:flex;
  justify-content:center;
  width:fit-content;
  margin:30px auto 0;
`
const Button = styled.button`
font: normal normal 600 20px/30px Segoe UI;
width:150px;
border-radius: 36px;
height: 65px;
`
const JoinUs = () => {
  const [farmer, setFarmer] = useState(true)
  const [distributor, setDistributor] = useState(false)
  const [retailer, setRetailer] = useState(false)

  const farmers = () => {
    setFarmer(true)
    setDistributor(false)
    setRetailer(false)
  }
  const distributors = () => {
    setDistributor(true)
    setFarmer(false)
    setRetailer(false)

  }
  const retailers = () => {
    setRetailer(true)
    setDistributor(false)
    setFarmer(false)
  }


  return (
    <div>
      
      <div>
        <NavbarSecondary></NavbarSecondary>
      </div>

      <FormContainer className='pt-8'>
       <div className='px-10 xl:px-28'>
        <div className='xl:flex justify-between items-center'>
         <div>
          <FirstHeadingText>Set up Your Foosion Account</FirstHeadingText>
          <SecondHeadingText color='#909090'>You've been invited to join the Foosion Community Network</SecondHeadingText>
         </div>

         <ButtonContainer>
          <Button onClick={farmers} className={farmer ? 'bg-zinc-700 text-white' : 'bg-white text-zinc-700'} >Farmer</Button>
          <Button onClick={distributors} className={distributor ? 'bg-zinc-700 text-white' : 'bg-white text-zinc-700'}>Distributor</Button>
          <Button onClick={retailers} className={retailer ? 'bg-zinc-700 text-white' : 'bg-white text-zinc-700'}>Retailers</Button>
         </ButtonContainer>
        </div>
       </div>

       { farmer && <Farmers></Farmers> }
       
       { distributor && <Distributers></Distributers> } 

       { retailer && <Retailers></Retailers> }

    
      </FormContainer>

    </div>
  )
}

export default JoinUs