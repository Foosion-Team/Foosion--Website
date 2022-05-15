import React, { useState } from 'react'
import styled from 'styled-components'

const SecondHeadingText = styled.h2`
font: normal normal 600 20px/30px Segoe UI;
color: ${(props) => props.color};
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
  const [farmer, setFarmer ] = useState({
    name: '',
    farmSize: '',
    cropType: '',
    email: '',
    farmLocation: '',
    phone: '',
    yield: '',
    identity: ''
  })
  const [name, setName] = useState('')
  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setFarmer({...farmer, [name]: value})
  }
  return (
    <div>
      
       <form className='px-28 pt-10'>
        <div className='flex'>
          
          <div> 
            <Input type='text' width='575px' placeholder='Name' name='name' onChange={handleChange} value={farmer.name}/>
          </div>
          <div>
            <Input width='250px' type='text' placeholder='Farm Size' className='ml-24' name='farmSize' onChange={handleChange} value={farmer.farmSize} />
          </div>
        
          <div className='relative'>
            <Select width='275px' className='ml-20' name="cropType" onChange={handleChange} value={farmer.cropType}>
              <Option value="">Crop Type</Option>
              <Option>Crop Type2s</Option>
              <Option>Crop Type3s</Option>
            </Select>
            <img src="/images/interface/option-select.png" alt='icon' className='absolute top-1/2 right-5 w-4' />
          </div>
       
        </div>

        <div className='pt-10 flex'>
          <Input width="575px" placeholder='Email Address' name="email" onChange={handleChange} value={farmer.email}/>
          <Input width="450px" placeholder='Farm Location' className='ml-24' name="farmLocation" onChange={handleChange} value={farmer.farmLocation}/>
        </div>

        <div className='pt-10 flex'>
          <div>
            <Input width="350px" placeholder='Tel Phone' name="phone" onChange={handleChange} value={farmer.phone}/>
          </div>
          
          <div className='relative'>
            <Select width='200px' className='ml-8' name="yield" onChange={handleChange} value={farmer.yield}>
              <Option value="">Yield / Month</Option>
              <Option>Crop Type2s</Option>
              <Option>Crop Type3s</Option>
            </Select>
            <img src="/images/interface/option-select.png" alt='icon' className='absolute top-1/2 right-5 w-4' />
          </div>

          <div className='relative ml-24'>
            <label class="custom-file-upload">
              <img src="/images/interface/upload.svg" alt='icon' className='absolute top-1/3 right-8 w-10' />
              <input type="file" onChange={handleChange} name="identity" value={farmer.identity}/>
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

    </div>
  )
}

export default Farmers