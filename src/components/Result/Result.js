import React from 'react'
import styled from 'styled-components'

export const Result = ({ data, dark }) => {
    let joined = new Date(data.created_at);
    let date = joined.getDate() + "-" + joined.toLocaleString("en-us", { month: "short" }) + "-" + joined.getFullYear();


    return (
        <Wrapper dark={dark}>
            <Header>
                <Img src={data.avatar_url} />
                <About>
                    <Name dark={dark}>{data.name}</Name>
                    <Login>@{data.login}</Login>
                    <Joined dark={dark}>Joind {date}</Joined>
                </About>
            </Header>
            <Bio dark={dark}>{data.bio ? data.bio : 'This profile has no bio'}</Bio>
            <Followers dark={dark}>
                <Repo>
                    <RepoText dark={dark}>Repos</RepoText>
                    <Number dark={dark}>{data.public_repos}</Number>
                </Repo>
                <Repo>
                    <RepoText dark={dark}>Followers</RepoText>
                    <Number dark={dark}>{data.followers}</Number>
                </Repo>
                <Repo>
                    <RepoText dark={dark}>Following</RepoText>
                    <Number dark={dark}>{data.following}</Number>
                </Repo>
            </Followers>
            <Social>
                <SocGroup>
                    <Link>
                        <LinkImg style={{ fill: '#ffffff' }} src='assets/location.svg' />
                        {data.location ? <LinkText dark={dark}>{data.location}</LinkText> : <LinkText dark={dark}>Not Available</LinkText>}
                    </Link>
                    <Link>
                        <LinkImg src='assets/website.svg' />
                        {data.blog ? <LinkLink dark={dark} href={data.blog} target={'_blank'}>{data.blog}</LinkLink> : <LinkText dark={dark}>Not Available</LinkText>}
                    </Link>
                </SocGroup>
                <SocGroup>
                    <Link>
                        <LinkImg src='assets/twitter.svg' />
                        {data.twitter_username ? <LinkText dark={dark}>{data.twitter_username}</LinkText> : <LinkText dark={dark}>Not Available</LinkText>}
                    </Link>
                    <Link>
                        <LinkImg src='assets/company.svg' />
                        {data.company ? <LinkText dark={dark}>{data.company}</LinkText> : <LinkText dark={dark}>Not Available</LinkText>}
                    </Link>
                </SocGroup>
            </Social>
        </Wrapper >
    )
}

const Wrapper = styled.div`
    width: 100%;
    height: 517px;
    background-color: ${props => props.dark ? 'var(--purple)' : 'var(--white)'};
    border-radius: 15px;
    transition: all .5s;
    margin-top: 16px;
    padding: 32px 24px;
    @media screen and (min-width: 600px) {
        padding: 40px; 
    }
`

const Header = styled.div`
    display: flex;
    gap: 20px;
    @media screen and (min-width: 600px) {
        gap: 41px; 
    }
`

const Img = styled.img`
    width: 70px;
    border-radius: 50%;
    @media screen and (min-width: 600px) {
        width: 117px; 
    }
`
const About = styled.div`

`
const Name = styled.h1`
    font-size: 16px;
    font-weight: 700;
    color: ${props => props.dark ? 'var(--white)' : 'var(--black)'};
    transition: all .5s;
    @media screen and (min-width: 600px) {
        font-size: 26px;
        margin-bottom: 10px;
    }
`
const Login = styled.h1`
    font-size: 13px;
    color: var(--blue);
    font-weight: 400;
    @media screen and (min-width: 600px) {
        font-size: 16px;
        margin-bottom: 15px;
    }
`
const Joined = styled.h1`
    font-size: 13px;
    font-weight: 300;
    color: ${props => props.dark ? 'var(--white)' : 'var(--gray)'};
    transition: all .5s;
    @media screen and (min-width: 600px) {
        font-size: 15px;
    }
`

const Bio = styled.h1`
    font-size: 13px;
    margin-top: 35px;
    text-align: center;
    color: ${props => props.dark ? 'var(--white)' : 'var(--gray)'};
    transition: all .5s;
    @media screen and (min-width: 600px) {
        font-size: 15px;
    }
`

const Followers = styled.div`
    height: 85px;
    background-color: ${props => props.dark ? 'var(--black)' : 'var(--body)'};
    border-radius: 10px;
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    padding: 0 30px;
    transition: all .5s;
`

const Repo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const RepoText = styled.h1`
    font-size: 11px;
    font-weight: 400;
    color: ${props => props.dark ? "var(--white)" : 'var(--gray)'};
    transition: all .5s;
    @media screen and (min-width: 600px) {
        font-size: 13px; 
    }
`
const Number = styled.h1`
    font-size: 16px;
    margin-top: 8px;
    color: ${props => props.dark ? 'var(--white)' : 'var(--black)'};
    transition: all .5s;
    @media screen and (min-width: 600px) {
       font-size: 22px; 
    }
`

const Social = styled.div`
    @media screen and (min-width: 600px) {
        width: 100%;
        display: flex; 
        justify-content: space-between;
        gap: 50px;
        margin-top: 30px;
    }
`

const SocGroup = styled.div`

`

const Link = styled.div`
    display: flex;
    align-items:center;
    gap: 19px;
    margin-top: 17px;
`

const LinkImg = styled.img`
    
`
const LinkText = styled.h1`
    font-size: 13px;
    font-weight: 400;
    color: ${props => props.dark ? 'var(--white)' : 'var(--gray)'};
    transition: all .5s;
    width: 220px;
    word-break: break-all;
    @media screen and (min-width: 600px) {
       font-size: 15px;
    }
`

const LinkLink = styled.a`
    font-size: 13px;
    font-weight: 400;
    color: ${props => props.dark ? 'var(--white)' : 'var(--gray)'};
    transition: all .5s;
    width: 220px;
    word-break: break-all;
    @media screen and (min-width: 600px) {
       font-size: 15px;
    }
`