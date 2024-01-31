import React from 'react'
import styled from 'styled-components'

const Label = styled.label`
width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const LabelP = styled.p`
color: var(--Dark, #2A2941);
  font-size: 14px;
  font-style: normal;
  font-weight: 450;
  line-height: normal;
`

const LeabelPspan = styled.span`
color: var(--Dark, #FF2424);
  font-size: 14px;
  font-style: normal;
  font-weight: 450;
  line-height: normal;
`

const LabelInp = styled.input`
border: 1px solid #E3E3E3;
  border-radius: 16px;
  padding: 18px;
  color: var(--Gray, #6E6D77);
  font-size: 14px;
  font-style: normal;
  font-weight: 450;
  line-height: normal;
`

export default function Input(props) {
  return (
    <>
      <Label>
        <LabelP>{props.label} <LeabelPspan>*</LeabelPspan></LabelP>
        <LabelInp type="text" name="" id="" placeholder={props.pls}/>
      </Label>
    </>
  )
}