import React, { useState } from 'react'
import styled from 'styled-components'
import NavbarSecondary from '../../organisms/NavbarSecondary'

const FormContainer = styled.div`
background: #F7F7F7 0% 0% no-repeat padding-box;
`
const FirstHeadingText = styled.h1`
font: normal normal bold 37px/60px Segoe UI;
`
const SecondHeadingText = styled.h2`
font: normal normal 600 20px/30px Segoe UI;
color: ${(props) => props.color};
`
const ButtonContainer = styled.div`
background: #FFFFFF 0% 0% no-repeat padding-box;
border-radius: 36px;
`
const Button = styled.button`
font: normal normal 600 20px/30px Segoe UI;
width:150px;
border-radius: 36px;
height: 65px;
`
const Input = styled.input`
background: #FFFFFF 0% 0% no-repeat padding-box;
border: 3px solid #E3E3E3;
border-radius: 13px;
height: 75px;
font: normal normal 600 20px/30px Segoe UI;
padding:18px;
width: ${(props) => props.width};
`
const Select = styled.select`
width: ${(props) => props.width};
background: #FFFFFF 0% 0% no-repeat padding-box;
border: 3px solid #E3E3E3;
color: #909090;
font: normal normal 600 20px/30px Segoe UI;
padding:20px;
border-radius: 13px;
height: 75px;
width: ${(props) => props.width};
`
const Option = styled.option`
width: ${(props) => props.width};
margin: 20px;
`
const SubmitButton = styled.button`
width: 250px;
padding: 15px;
color: black;
font: normal normal 600 20px/30px Segoe UI;
background: #FFD500 0% 0% no-repeat padding-box;
border-radius: 11px;
`
const Farmers = () => {
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
      
      <div className='px-16 pb-5'>
        <NavbarSecondary></NavbarSecondary>
      </div>

      <FormContainer className='pt-8'>
       <div className='px-28'>
        <div className='flex justify-between items-center'>
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

       <form className='px-28 pt-10'>
        <div className='flex'>
          
          <div> 
            <Input type='text' width='575px' placeholder='Name'  />
          </div>
          <div>
            <Input width='250px' type='text' placeholder='Farm Size' className='ml-24' />
          </div>
        
          <div className='relative'>
            <Select width='275px' className='ml-20'>
              <Option value="">Crop Type</Option>
              <Option>Crop Type2s</Option>
              <Option>Crop Type3s</Option>
            </Select>
            <img src="/images/interface/option-select.png" alt='icon' className='absolute top-1/2 right-5 w-4' />
          </div>
       
        </div>

        <div className='pt-10 flex'>
          <Input width="575px" placeholder='Email Address'/>
          <Input width="450px" placeholder='Farm Location' className='ml-24'/>
        </div>

        <div className='pt-10 flex'>
          <div>
            <Input width="350px" placeholder='Tel Phone'/>
          </div>
          
          <div className='relative'>
            <Select width='200px' className='ml-8'>
              <Option value="">Yield / Month</Option>
              <Option>Crop Type2s</Option>
              <Option>Crop Type3s</Option>
            </Select>
            <img src="/images/interface/option-select.png" alt='icon' className='absolute top-1/2 right-5 w-4' />
          </div>

          <div className='relative ml-24'>
            <label class="custom-file-upload">
              <img src="/images/interface/upload.svg" alt='icon' className='absolute top-1/3 right-8 w-10' />
              <input type="file"/>
              Means of Identification
           </label>
          </div>       
  
          </div>

        <div className='py-10 flex items-center'>
          <input type='checkbox' className='h-6 bg-white p-10 w-6 border-2 rounded border-gray-300' />
          <SecondHeadingText className='ml-5 text-black'>I agree with Terms , Privacy Policy and E- Sign Consent</SecondHeadingText>
        </div>

        <SubmitButton type='submit' className='mb-10'>Submit</SubmitButton>

     </form>

      </FormContainer>

    </div>
  )
}

export default Farmers