import React from 'react'
import styled from 'styled-components'

import { Link } from 'react-router-dom'

const Navbar = styled.div`
    @import 'https://fonts.googleapis.com/css?family=Raleway';

    font-family: Raleway;
    margin-top: 10px;
    text-align: center;

    width: 90vw;
    height: 50px;

    .item {
        text-decoration: none;
        color: black;
        font: 20px Raleway;
    }
`

const NavBar = () => (
    <Navbar>
        <Link className = 'item head' to = '/'>Team Kat</Link>
    </Navbar>
)

export default NavBar