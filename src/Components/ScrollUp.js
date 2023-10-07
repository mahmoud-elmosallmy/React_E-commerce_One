import React from 'react'
import  {FaUpLong}  from 'react-icons/fa6'
import ScrollToTop from 'react-scroll-to-top';
import styled from 'styled-components';


function ScrollUp() {
  return (
    <Span>
        <ScrollToTop smooth top={400} component={<FaUpLong />} className='scrollup' />
    </Span>
  )
}
const Span = styled.a`
    .scrollup {
        right: 25px !important;
        width: 50px;
        height: 55px;
        background-color: #6254f3 !important;
        box-shadow: 0 4px 12px #445b6f26 !important;
        display: inline-flex;
        padding: 0.35rem !important;
        border-radius: 4px !important;
        padding: 10px !important;
        font-size: 35px !important;
        z-index: 10;
        transition: bottom .3s,transform .3s !important;
        color: white !important;

        &:hover {
            transform: translateY(-.25rem);
        }
    }
    .scrollup {
        bottom: 7.5rem;
    }
`

export default ScrollUp