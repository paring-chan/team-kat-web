import React from 'react';
import CardRow from './CardRow'
import { Container } from 'react-bootstrap'
import StyledMember from './styles/StyledMember'

const Member = ({ name, avatar, github, desc }) => (
    <StyledMember>
        <Container>
            <CardRow className = 'one' sm1 = {4} sm2 = {8} name = {name} avatar = {avatar} github = {github} desc = {desc}/>
            <CardRow className = 'two' sm1 = {6} sm2 = {6} name = {name} avatar = {avatar} github = {github} desc = {desc}/>
        </Container>
        <CardRow className = 'normal' sm1 = {6} sm2 = {6} name = {name} avatar = {avatar} github = {github} desc = {desc}/>
    </StyledMember>
)

export default Member