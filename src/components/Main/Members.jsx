import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import Member from '../Member'

import MemberList from '../../data/Members'

const MembersContainer = styled.div`
    width: 100vw;

    text-align: center;
    margin-bottom: 100px;

    h1 {
        margin-top: 100px;
        font-weight: normal;
    }

    .trigger {
        margin-left: 20px;
    }
`

const Members = () => (
    <MembersContainer data-aos = 'fade-up' data-aos-duration = '2000'>
        <h1>팀원들이에요!</h1>
        {MemberList.map(m => <Member  {...m} />)}
    </MembersContainer>
)

export default Members