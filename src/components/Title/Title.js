import React from 'react'
import styled from 'styled-components'

export const Title = ({ setDark, dark }) => {
    return (
        <Wrapper>
            <Text dark={dark}>devfinder</Text>
            <Button onClick={() => { setDark(current => !current) }}>{dark ? <Theme dark={dark}>LIGHT</Theme> : <Theme dark={dark}>DARK</Theme>}{dark ? <Img src='assets/sun.svg' /> : <Img src='assets/moon.svg' />}</Button>
        </Wrapper>
    )
}


const Wrapper = styled.div`
    width: 327px;
    height: 39px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 35px;
    @media screen and (min-width: 600px) {
    width: 570px;
  }
`

const Text = styled.h1`
    font-size: 26px;
    color: ${props => props.dark ? "var(--white)" : 'var(--black)'};
    transition: all .5s;
`
const Theme = styled.h1`
    font-size: 13px;
    color: ${props => props.dark ? "var(--white)" : 'var(--gray)'};
    transition: all 1.5s;
`
const Img = styled.img`
    transition: all 1.5s;
`

const Button = styled.button`
    border: none;
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
    transition: all .5s;
    cursor: pointer;
`