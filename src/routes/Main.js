import React from 'react';
import styled from 'styled-components'

import { Button } from 'react-bootstrap'

const StyledCarousel = styled.div`
    background-image: url(${`${process.env.PUBLIC_URL}/image/code.jpg`});
    background-size: 100%;

    width: 100vw;
    height: 50vh;

    color: white;
    
    text-align: center;

    h1 {
        padding-top: 17vh;
    }
    
    button {
        width: 200px;
    }
`

const Main = () => (
    <StyledCarousel>
        <h1>Team Kat</h1>
        <h3>푸른 소년 팀입니다</h3>
        <Button variant = 'outline-light'>지원하기</Button>
    </StyledCarousel>
)

export default Main