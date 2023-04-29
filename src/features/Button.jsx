import React from 'react'
import Button from '../components/Button'
import styled from 'styled-components'
import { AiOutlineRight } from "react-icons/ai"
import { HiOutlineBell } from "react-icons/hi"








function FeatureButton() {
  return (
  <>
  <Sttext>Button</Sttext>
  <div>
  <Button.Primary 
  outline 
  type ="large"
  icon = {<AiOutlineRight/>} 
  onClick = {()=>alert('Primary!')}>Large Primary Button</Button.Primary>
  <Button.Primary type ="midium">Medium</Button.Primary>
  <Button.Primary>Small</Button.Primary>
  </div>
  <div>
  <Button.Nagative 
  outline 
  type ="large"
  icon = {<HiOutlineBell/>} 
  onClick = {()=>prompt('Nagative!')}>Large Nagative Button</Button.Nagative>
  <Button.Nagative type ="midium">Medium</Button.Nagative>
  <Button.Nagative>Small</Button.Nagative>
  </div>
    




  </>
  )
  
}

export default FeatureButton

const Sttext = styled.div`
  padding : 20px 0px;
  font-size: 30px;
  font-weight: 700;
  


`