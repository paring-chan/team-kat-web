import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import Button from '../../components/Button'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faDiscord } from '@fortawesome/free-brands-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const AboutContainer = styled.div`
    width: 100vw;
    height: 100vh;

    margin-top: 25vh;

    .first.section {
        padding-bottom: 20px;

        h1, h3, button {
            margin-left: 10vw;
        }

        @media (max-width: 340px) {
            h1, h3, button {
                margin-left: 5vw !important;
            }
        }

        @media (max-width: 360px) {
            button {
                margin-top: 10px;
            }
        }
    }

    .second.section {
        text-align: right;
        h1, h3, button {
            margin-right: 10vw;
        }

        @media (max-width: 340px) {
            h1, h3, button {
                margin-right: 5vw !important;
            }
        }

        @media (max-width: 360px) {
            button {
                margin-top: 10px;
            }
        }
    }
`

const About = () => (
    <AboutContainer>
        <div className = 'first section' data-aos = 'fade-right' data-aos-duration = '2000'>
            <hr />
            <h1>고야이 고야이!</h1>
            <h3>이 팀은 10대로 이루어진 개발 팀입니다!<br />우리는 주로 웹사이트나 봇 등을 만들어요</h3>

            <a type = 'button' href = 'https://discord.gg/R5UG5mR'><Button style = {{color: 'white', backgroundColor: '#2185d0'}}><FontAwesomeIcon icon = {faDiscord} /> 디스코드 서버</Button></a>
            <a type = 'button' href = 'https://github.com/Team-Kat'><Button style = {{color: 'white', backgroundColor: 'black', marginLeft: '10px'}}><FontAwesomeIcon icon = {faGithub} /> 깃허브</Button></a>
        </div>

        <div className = 'second section' data-aos = 'fade-left' data-aos-duration = '2000'>
            <hr />
            <h1>같이 일하실래요?</h1>
            <h3>자기 정보 제출 후 디스코드에서의 면접으로 팀원이 되실수 있어요!</h3>

            <Link to = '/recruit'><Button style = {{color: 'white', backgroundColor: '#2185d0', marginBottom: '20px'}}><FontAwesomeIcon icon = {faPlus} /> 지원하기</Button></Link>
            <hr />
        </div>

    </AboutContainer>
)

export default About