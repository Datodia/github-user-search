import React from 'react'
import styled from 'styled-components'
import Axios from 'axios'
import { useState, useEffect } from 'react'

export const Search = ({ dark, name, setName, setData }) => {
    const [error, setError] = useState("")


    useEffect(() => {
        Axios.get(`https://api.github.com/users/${name}`, {
            method: 'GET',
            headers: {
                Authorization: "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"
            }
        })
            .then((res) => {
                setData(res.data)
            })

    }, [])

    const fetchAPI = () => {
        Axios.get(`https://api.github.com/users/${name}`, {
            method: 'GET',
            headers: {
                Authorization: "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"
            }
        })
            .then((res) => {
                setData(res.data)
                console.log(res.data)
                setError("")
            })
            .catch((error) => {
                if (error.response.status === 404) {
                    console.log(error.response.status);
                    setError("No result")
                }
            });
    }

    return (
        <Wrapper dark={dark}>
            <Img src='assets/search.svg' />
            <Input onChange={(e) => { setName(e.target.value) }} dark={dark} placeholder='Search GitHub username…' />
            <Error>{error}</Error>
            <Button onClick={fetchAPI}>Search</Button>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 100%;
    height: 60px;
    background-color: ${props => props.dark ? 'var(--purple)' : 'var(--white)'};
    border-radius: 15px;
    box-shadow: ${props => props.dark ? null : "rgba(149, 157, 165, 0.2) 0px 8px 24px"};
    display: flex;
    align-items:center;
    justify-content: space-between;
    padding: 0 10px;
    transition: all .5s;
`

const Img = styled.img`

`
const Error = styled.h1`
    font-size: 13px;
    color: red;
    width: 40px;
    text-align: center;
`

const Input = styled.input`
    width: 120px;
    background-color: transparent;
    border: none;
    color: ${props => props.dark ? 'var(--white)' : 'var(--black)'};
    outline: none;
    font-size: 13px;
    font-family: 'Space Mono';
    /* margin-right: 40px; */
`

const Button = styled.button`
    width: 84px;
    height: 46px;
    font-family: 'Space Mono';
    border-radius: 10px;
    border: none;
    background-color: var(--blue);
    font-weight: 700;
    color: var(--white);
`