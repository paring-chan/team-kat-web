import React from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const DivContainer = styled.div`
    background-color: grey;
    text-align: center;
    color: white;

    height: 30vh;
    width: 100vw;

    p {
        padding-top: 7vh;
    }
`

const Footer = () => (
    <DivContainer>
        <p>
            대표자: <a href = 'https://github.com/kiki7000'>kiki7000</a><br />
            <a href = 'https://github.com/Team-Kat'>GITHUB</a> | <a href = 'https://discord.gg/R5UG5mR'>Discord</a><br />
            <Link to = '/tos'>이용약관</Link> | <Link to = '/policy'>개인정보처리방침</Link><br />
            © 2020 Team Kat. All Right Reserved.
        </p>
    </DivContainer>
)

export default Footer