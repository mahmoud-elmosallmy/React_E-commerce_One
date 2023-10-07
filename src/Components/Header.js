import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import Nav from './Nav'

function Header() {
  return (
    <MainHeader>
        <NavLink to="/" >
            <img src='./images/logo.png' className='logo' alt='My Logo img' />
        </NavLink>
        <Nav />
    </MainHeader>
  )
}

const MainHeader = styled.header`
    padding: 0 4.8rem;
    height: 10rem;
    background-color: ${({theme}) => theme.colors.bg};
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;

    .logo {
        width: 160px;
    }

    @media screen and (max-width: ${({theme}) => theme.media.mobile}) {
      .logo {
        width: 125px;
      }
    }
`

export default Header