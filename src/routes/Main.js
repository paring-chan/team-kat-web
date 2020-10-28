import React from 'react';

import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

import Project from '../components/Project'

import StyledCarousel from '../components/styles/StyledCarousel'
import DescContainer from '../components/styles/DescContainer'
import ProjectContainer from '../components/styles/ProjectContainer'

const Main = () => (
    <>
        <StyledCarousel>
            <h1>Team Kat</h1>
            <h3>푸르르한 청소년 팀입니다</h3>
            <Link to = '/recruit'><Button variant = 'outline-light'>지원하기</Button></Link>
        </StyledCarousel>

        <DescContainer data-aos = 'fade-up' data-os-duration = '2500'>
            <h2>팀에 대해 궁금하신게 있나요?</h2>
            <h4>우리 팀은 푸르르한 10대들이 함께 개발을 하는 팀입니다</h4>
            <Link to = '/members' ><Button variant = 'success' className = 'descbutton'>팀원 소개</Button></Link>
            <Link to = '/recruit' className = 'descbutton'><Button variant = 'success'>팀원 지원</Button></Link>
            <Button variant = 'success' href = 'https://discord.gg/R5UG5mR' className = 'descbutton dittogenius'>디스코드 서버</Button>
        </DescContainer>

        <ProjectContainer>
            <Project aos = 'fade-right' image = {`${process.env.PUBLIC_URL}/image/verybeautifulproject.png`} name = 'Discommu' disabled = {true} desc = '게시판을 봇과 웹에서 사용하게 가능하는 프로젝트입니다'/>
            <Project aos = 'fade-left' image = {`${process.env.PUBLIC_URL}/image/verybeautifulproject.png`} name = 'ezform' disabled = {true} desc = '대충 설문지 사이트 입니다' />
        </ProjectContainer>
    </>
)

export default Main