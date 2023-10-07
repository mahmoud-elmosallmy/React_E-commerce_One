import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import { FiShoppingCart } from "react-icons/fi";
import { CgMenuRightAlt , CgClose } from "react-icons/cg";
import { useCartContext } from '../Context/CartContext';
import { Button } from '../styles/Button';

export default function Nav() {
  const {total_item} = useCartContext()
  const [menuIcon , setMenuIcon] = useState()

  const Nav= styled.nav`
    .navbar-lists {
      display: flex;
      gap: 4.8rem;
      align-items: center;
      
      .navbar-link {
        &:link,
        &:visited {
          display: inline-block;
          text-decoration: none;
          font-size: 1.8rem;
          font-weight: 500;
          text-transform: uppercase;
          color: ${({theme}) => theme.colors.black};
          transition: color .3s linear;
        }

        &:hover,
        &:active {
          color: ${({theme}) => theme.colors.helper};
        }
      }
    }

    .mobile-navbar-btn {
      display: none;
      background-color: transparent;
      cursor: pointer;
      border: none;
    }

    .mobile-nav-icon[name="close-outline"] {
      display: none;
    }

    .close-outline {
      display: none;
    }

    .cart-trolley--link {
      position: relative;

      .cart-trolley {
        position: relative;
        font-size: 3.2rem;
      }
      .cart-total--item {
        width: 2.4rem;
        height: 2.4rem;
        position: absolute;
        background-color: #000;
        color: #000;
        border-radius: 50%;
        display: grid;
        place-items: center;
        top: -20%;
        left: 70%;
        background-color: ${({theme}) => theme.colors.helper};
      }
    }

    .user-login--name {
      text-transform: capitalize;
    }

    .user-logout,
    .user-login {
      font-size: 1.4rem;
      padding: 0.8rem 1.4rem;
    }

    @media screen and (max-width: ${({theme}) => theme.media.medium}) {
      .navbar-lists {
        gap: 1.2rem;
      }
    }
    @media screen and (max-width: ${({theme}) => theme.media.mobile}) {

      /* & {
        position: fixed;
      } */
      .mobile-navbar-btn {
        display: inline-block;  
        z-index: 9999;
        border: ${({theme}) => theme.colors.black};

        .mobile-nav-icon {
          font-size: 4.2rem;
          color: ${({theme}) => theme.colors.black};
        }
      }

      .active .mobile-nav-icon {
        display: none;
        font-size: 4.2rem;
        position: fixed;
        top: 3%;
        right: 5%;
        color: ${({theme}) => theme.colors.black};
        z-index: 9999;
        
      }
      .active .close-outline {
        display: inline-block;
      }


      .navbar-lists {
        height: 100vh;
        position: absolute;
        top: 0;
        left: 0;
        background-color: #fff;

        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        visibility: hidden;
        opacity: 0;
        transform: translateX(100%);
        /* transform-origin: top; */
        transition: all 3s linear;
      }

      .active .navbar-lists {
        width: 100%;
        gap: 45px;
        visibility: visible;
        opacity: 1;
        overflow: hidden;
        transform: translateX(0);
        z-index: 999;
        transform-origin: right;
        transition: all 3s linear;

        .navbar-link {
          font-size: 4.2rem;
        }
      }
      
      .cart-trolley--link {
        position: relative;

        .cart-trolley {
          position: relative;
          font-size: 5.2rem;
        }

        .cart-total--item {
          width: 4.2rem;
          height: 4.2rem;
          font-size: 2rem;
        }
      }
      .user-logout,
      .user-login {
        font-size: 2.2rem;
        padding: 0.8rem 1.4rem;
      }
    }

  `;
const menuScrollOpen = () => setMenuIcon(true)
const menuScrollClose = () => setMenuIcon(false)
  return (
    <Nav>
      {menuIcon ? document.body.style.overflow = "hidden" : document.body.style.overflow = ""}

      <div className={menuIcon ? "navbar active" : "navbar"}>
        <ul className='navbar-lists'>
          <li>
            <NavLink to={'/'} className={'navbar-link home-link'} onClick={() => setMenuIcon(false)} >HOME</NavLink>
          </li>
          <li>
            <NavLink to={'/about'} className={'navbar-link'} onClick={() => setMenuIcon(false)} >ABOUT</NavLink>
          </li>
          <li>
            <NavLink to={'/products'} className={'navbar-link'} onClick={() => setMenuIcon(false)} >PRODUCTS</NavLink>
          </li>
          <li>
            <NavLink to={'/contact'} className={'navbar-link'} onClick={() => setMenuIcon(false)} >CONTACT</NavLink>
          </li>
          {/* {isAuthenticated && <p>{user.name}</p>}
          {isAuthenticated ? (
            <li>
              <Button onClick={() => logout({returnTo: window.location.origin})}>Log Out</Button>
            </li>
          ) : (
            <li>
              <Button onClick={() => loginWithRedirect()}>Log In</Button>
            </li>
          )} */}
          <li>
            <Button>Log In</Button>
          </li>
          <li>
            <NavLink to={'/cart'} className={'navbar-link cart-trolley--link'} onClick={() => setMenuIcon(false)} >
              <FiShoppingCart className='cart-trolley'/>
              <span className='cart-total--item'>{total_item}</span>
            </NavLink>
          </li>
        </ul>
        {/* Tow Button For Open and Close Of Menu */}
        <div className='mobile-navbar-btn'>
          <CgMenuRightAlt 
              name="menu-outline" 
              className="mobile-nav-icon"
              onClick={menuScrollOpen}
          />
          <CgClose 
            name="close-outline" 
            className="mobile-nav-icon close-outline"
            onClick={menuScrollClose}
          />
        </div>
      </div>
    </Nav>
  )
}


