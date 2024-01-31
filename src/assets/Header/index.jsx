import React from 'react'
import styled from 'styled-components'

const HeaderDiv = styled.div`
    padding: 17px 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: var(--Main, #5361E4);
    width: 100%;
`

const LogoDiv = styled.div`
    color: var(--White, #FFF);
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;    
`

const Ul = styled.ul`
    display: flex;
    list-style: none;
    gap: 48px;  
`

const List = styled.li`
    color: var(--White, #FFF);
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`

const btnDiv = styled.div`
    display: flex;
    gap: 38px;
    align-items: center;
`
const Translate = styled.button`
    border: none;
    padding: 8px 24px;
    background-color: transparent;
    color: var(--White, #FFF);
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`
const Start = styled.button`
    color: var(--Main, #5361E4);
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    display: inline-flex;
    height: 46px;
    padding: 8px 24px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    flex-shrink: 0;
    border-radius: 12px;
    background: var(--White, #FFF);
    border: none;
`

export default function Header() {
  return (
    <HeaderDiv>
        <LogoDiv>
            <h2>Darkor</h2>
        </LogoDiv>
        <div>
            <Ul>
                <List>Vakansiyalar</List>
                <List>Kandidatlar</List>
                <List>Kompaniyalar</List>
                <List>Xizmatlar</List>
                <List>Ta’lim</List>
            </Ul>
        </div>
        <btnDiv>
            <Translate>O'zb</Translate>
            <Start>Boshlash</Start>
        </btnDiv>
    </HeaderDiv>
  )
}
