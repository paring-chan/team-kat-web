import React from 'react';
import { Navbar, Nav } from 'react-bootstrap'

const Bar = () => (
    <Navbar collapseOnSelect bg = 'light' fixed = 'top' expand = 'lg'>
        <Navbar.Brand href = '/'><img style = {{width: '50px', height: '50px', borderRadius: '25px'}} src = {`${process.env.PUBLIC_URL}/teamkat.png`} alt = 'teamkat logo' /><span className = 'brandname'>Team Kat</span></Navbar.Brand>
        <Navbar.Toggle aria-controls = 'responsive-navbar-nav' />

        <Navbar.Collapse id = 'responsive-navbar-nav'>
            <Nav className = 'mr-auto'>
                <Nav.Link href = '/members'>Members</Nav.Link>
                <Nav.Link href = '/recruit'>Recruit</Nav.Link>
            </Nav>
            <hr />
            <Nav>
                <Nav.Link href = '/login'>Login</Nav.Link>
                <Nav.Link href = 'https://discord.gg/R5UG5mR'>Server</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
)

export default Bar