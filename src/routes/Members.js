import React, { Component } from 'react'

import StyledMembers from '../components/styles/StyledMembers'
import Member from '../components/Member'

import { get } from '../utils/requests'

class Members extends Component {
    state = {
        members: null
    }

    async componentDidMount() {
        const members = (await get('members')).data
        this.setState({ members })
    }

    render() {
        const { members } = this.state
        return (
            <StyledMembers>
                <h1>Members</h1>
                <hr />
                <div className = 'members'>
                    {
                        members ?
                        members.map(member => (<Member name = {member.name} avatar = {member.avatar} github = {member.github} desc = {member.description} />))
                        : <h1>로딩중..</h1>
                    }
                </div>
            </StyledMembers>
        )
    }
}

export default Members