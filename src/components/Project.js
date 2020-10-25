import React from 'react';
import styled from 'styled-components'

import { Button } from 'react-bootstrap'

const StyledProject = styled.div`
    height: 50vh;
    width: 100vw;

    .projectimage {
        margin-left: 5vw;
        margin-right: 5vw;
        border-radius: 50px;
        width: 30vw;
        height: 30vh;
    }

    .projectimage.small {
        display: none
    }

    @media (max-width: 700px) {
        .projectimage {
            width: 50vw;
        }
    }

    @media (max-width: 500px) {
        text-align: center;
        .projectimage.big {
            display: none
        }

        .projectimage.small {
            display: inline;
        }

        .projectimage {
            margin-left: auto;
            margin-right: auto;
            margin-bottom: 2vh;
            width: 90vw;
            height: 35vw;
        }
    }
`

const Project = ({ name, disabled, desc, url, image, aos, duration, github }) => (
    <StyledProject data-aos = {aos} data-os-duration = {duration ? duration : '2500'}>
        <img className = 'projectimage small' src = {image} alt = '매우 멋진 프로젝트' />
        <img className = 'projectimage big' src = {image} alt = '매우 멋진 프로젝트' align = 'left' />
        <h2>{name}</h2>
        <h4>{desc}</h4>
        {
            disabled ? 
            (<Button style = {{marginRight: '10px'}} variant = 'info' disabled>개발중</Button>)
            :
            (<Button style = {{marginRight: '10px'}} variant = 'info' href = {url ? url : '#'}>Go!</Button>)
        }
        {
            github ?
            (<Button variant = 'dark' href = {github}>Github</Button>)
            :
            (<Button variant = 'dark' disabled>Github</Button>)
        }
    </StyledProject>
)

export default Project