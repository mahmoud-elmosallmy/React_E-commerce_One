import React from 'react'
import styled from 'styled-components';
import { Button } from '../styles/Button';
import { NavLink } from 'react-router-dom';

function HeroSection({myData}) {

  const { name } = myData;
  return (
    <Wrapper>
        <div className='container'>
            <div className='grid grid-two-column'>
                <div className='hero-section-data'>
                    <p className='intro-data'>Welcome to</p>
                    <h1>{name}</h1>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
                    <NavLink>
                        <Button>Show Now</Button>
                    </NavLink>
                </div>
                {/* Our homepage image */}
                <div className="hero-section-image">
                  <figure>
                    <img src={'images/hero.jpg'} alt={'heroSectionPhoto'} className='img-style' />
                  </figure>
                </div>
            </div>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
overflow: hidden;
  padding: 12rem 2rem;

  img {
    min-width: 10rem;
    height: 10rem;
  }

  .hero-section-data {
    p {
      margin: 2rem 0;
    }

    h1 {
      text-transform: capitalize;
      font-weight: bold;
    }

    .intro-data {
      margin-bottom: 0;
    }
  }

  .hero-section-image {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  figure {
    position: relative;

    &::after {
      content: "";
      width: 60%;
      height: 80%;
      background-color: rgb(81, 56, 238 , 0.4);
      position: absolute;
      left: 50%;
      top: -5rem;
      z-index: -1;
    }
  }

  .img-style {
    width: 100%;
    height: auto;
  }

  @media screen and (max-width: ${({theme}) => theme.media.mobile}) {
    .grid {
      gap: 10rem;
    }
  }
  figure::after {
    content: "";
    width: 50%;
    height: 100%;
    left: 60%;
    bottom: 10%;
    background-color: rgb(81, 56, 238 , 0.4);
  }
`;

export default HeroSection