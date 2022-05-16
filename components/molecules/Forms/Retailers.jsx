import React, { useState } from 'react'
import styled from 'styled-components'

const SecondHeadingText = styled.h2`
font: normal normal 600 20px/30px Segoe UI;
color: ${(props) => props.color};
@media (max-width: 1024px) {
font: normal normal 600 18px/25px Segoe UI;
}
`
const Input = styled.input`
background: #FFFFFF 0% 0% no-repeat padding-box;
border: 3px solid #E3E3E3;
border-radius: 13px;
height: 75px;
font: normal normal 600 20px/30px Segoe UI;
padding:18px;
width: ${(props) => props.width};
@media (max-width: 1024px) {
width:100%;
margin-bottom:20px;  
}
@media (max-width: 1024px) {
font: normal normal 600 18px/25px Segoe UI;
}
`
const Select = styled.select`
width: ${(props) => props.width};
background: #FFFFFF 0% 0% no-repeat padding-box;
border: 3px solid #E3E3E3;
color: #909090;
font: normal normal 600 18px/25px Segoe UI;
padding:20px;
border-radius: 13px;
height: 75px;
width: ${(props) => props.width};
@media (max-width: 1024px) {
width:100%;
margin-bottom:20px;   
}
`
const Option = styled.option`
width: ${(props) => props.width};
margin: 20px;
`
const SubmitButton = styled.button`
width: 250px;
padding: 15px;
color: black;
font: normal normal 600 18px/25px Segoe UI;
background: #FFD500 0% 0% no-repeat padding-box;
border-radius: 11px;
`
const CustomFileupload = styled.label`
  border: 3px dashed #ccc;
  display: inline-block;
  background: white;
  color: #909090;
  width: 575px;
  height: 75px;
  border-radius: 13px;
  font: normal normal 600 18px/25px Segoe UI;
  padding:20px 0px 0 20px;
  cursor: pointer;
  @media (max-width: 1024px) {
  width:100%;
  margin-bottom:20px;  
}
`
const Retailers = () => {
  const [retailer, setRetailer ] = useState({
    name: '',
    workingHours: '',
    recipes: '',
    email: '',
    itemsSold: '',
    phone: '',
    yield: '',
    identity: ''
  })
  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setRetailer({...retailer, [name]: value})
  }
  return (
    <div>
      
        <form className='px-5 md:px-24 lg:px-44 pt-10'>
        <div className='xl:flex'>
          
          <div> 
            <Input type='text' width='575px' placeholder='Name' name='name' onChange={handleChange} value={retailer.name}/>
          </div>
          <div>
            <Input width='250px' type='text' placeholder='Working Hours' className='xl:ml-24' name='workingHours' onChange={handleChange} value={retailer.workingHours} />
          </div>
        
          <div className='relative'>
            <Select width='275px' className='xl:ml-20' name="recipes" onChange={handleChange} value={retailer.recipes}>
              <Option value="">Recipes</Option>
              <Option>Crop Type2s</Option>
              <Option>Crop Type3s</Option>
            </Select>
            <img src="/images/interface/option-select.png" alt='icon' className='absolute top-1/2 right-5 w-4' />
          </div>
       
        </div>

        <div className='xl:pt-10 xl:flex'>
          <Input width="575px" placeholder='Email Address' name="email" onChange={handleChange} value={retailer.email}/>
          <Input width="450px" placeholder='Items Sold' className='xl:ml-24' name="itemsSold" onChange={handleChange} value={retailer.itemsSold}/>
        </div>

        <div className='xl:pt-10 xl:flex'>
          <div>
            <Input width="350px" placeholder='Tel Phone' name="phone" onChange={handleChange} value={retailer.phone}/>
          </div>
          
          <div className='relative'>
            <Select width='200px' className='xl:ml-8' name="yield" onChange={handleChange} value={retailer.yield}>
              <Option value="">Yield / Month</Option>
              <Option>Crop Type2s</Option>
              <Option>Crop Type3s</Option>
            </Select>
            <img src="/images/interface/option-select.png" alt='icon' className='absolute top-1/2 right-5 w-4' />
          </div>

          <div className='relative xl:ml-24 w-full'>
            <CustomFileupload class="custom-file-upload">
              <img src="/images/interface/upload.svg" alt='icon' className='absolute top-1/3 right-8 w-10' />
              <input type="file" onChange={handleChange} name="identity" value={retailer.identity}/>
              Means of Identification
           </CustomFileupload>
          </div>       
  
          </div>

        <div className='py-10 flex items-center'>
          <input type='checkbox' className='h-6 bg-white p-10 w-6 border-2 rounded border-gray-300' />
          <SecondHeadingText className='ml-5 text-black'>I agree with Terms , Privacy Policy and E- Sign Consent</SecondHeadingText>
        </div>

        <SubmitButton type='submit' className='mb-10'>Submit</SubmitButton>

        </form>

    </div>
  )
}

export default Retailers