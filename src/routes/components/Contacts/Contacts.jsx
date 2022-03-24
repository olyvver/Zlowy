import React from 'react'
import styled from "styled-components";
import whatsapp from "./whatsapp.png"
import gmail from "./gmail.png"

const Contacts = () => {
  return (
    <>
    <Main>
    <Contact1>
        <Number><img src={whatsapp} style={{height:70, paddingRight:20}}/>+44 (0)7440 123985 </Number>
    </Contact1>
    <Contact2>
      <Email><img src={gmail} style={{height:70, paddingRight:20}}/>myzlowy@gmail.com</Email>
    </Contact2>
    </Main>
    </>
  )
}

const Main = styled.div`
  height: 500px;
`
const Contact1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 250px;
  color:#0B233F;
`
const Contact2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 250px;
  color:#0B233F;
`

const Number = styled.div`
  font-family: Inter;
  font-size: 30px;
  margin:20px;
`
const Email = styled.div`
   font-family: Inter;
   font-size: 30px;
   margin:20px;
`

export default Contacts