import React from 'react';
import styled from 'styled-components'

const StyledImage = styled.img`
    width: 80vw;
    margin-left: 10vw;
    margin-right: 10vw;
    height: 30vh;
`

const Main = () => (
    <StyledImage src = {`${process.env.PUBLIC_URL}/unknown.png`} alt = 'test'/>
)

export default Main