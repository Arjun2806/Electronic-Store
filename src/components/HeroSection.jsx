import React from "react";
import styled from "styled-components";
import {NavLink} from "react-router-dom"
import {Button} from"../styles/Button"

const HeroSection = ({myData}) => {

  const {about, img} = myData;
    
  return (
    <Wrapper>
      <div className="container">
        <div className="grid grid-two-column">
          <div className="hero-section-data">
            <p className="intro-data">Welcome to </p>
            <h1>Quick Buy </h1>
            <p>
             {about}
            </p>
            <NavLink>
              <Button>shop now</Button>
            </NavLink>
          </div>
          {/* our homepage image  */}
          <div className="hero-section-image">
            <figure>
              <img
                src={img}
                alt="hero-section-photo"
                className="img-style"
              />
            </figure>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 10rem 0;

  img {
    min-width: 10rem;
    height: 30rem;
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
  }
  img-style {
    width: 10rem; 
    height: 10rem; 
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 10rem;
    }

  }
`;

export default HeroSection;
