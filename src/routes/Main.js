import React from 'react';
import styled from 'styled-components'

const styledimage = styled.img`
    width: 80vw;
    margin-left: 10vw;
    margin-right: 10vw;
    height: 30vh;
`

const Main = () => (
    <styledimage src = {`${process.env.PUBLIC_URL}/unknown.png`} alt = 'test'/>
)

export default Main