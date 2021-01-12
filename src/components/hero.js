import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import styled from 'styled-components';

const getImages = graphql`
    {
      dish: file(relativePath: {eq: "dish.png"}) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `;


const Hero = () => {


    const data = useStaticQuery(getImages);
    const {dish:{childImageSharp:{fluid:dish}}} = data;


    return (
        <StyledHero>
            <div className="bg"></div>
            <div className="content">
            <h1>You deserve better</h1>
                <h2>Consider this a <br/>taste intervention</h2>
                <button href="#">Learn more</button>
            </div>
            <div className="image-wrapper">
                <Image fluid={dish}/>
            </div>
        </StyledHero>
    )
}

const StyledHero = styled.section`
    padding: 0 4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    height: 90vh;
    overflow-x: hidden;
    .bg {
        height: 90vh;
        position: absolute;
        width: 100%;
        background: #F1F7EA;
        z-index: -1;
        right: -35rem;
    }

    .content {
        flex: 0.75;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: start;
        height: 100%;
        h1 {
            font-weight: 900;
            font-size: 4.375rem;
            margin: 0;
        }
        h2 {
            font-size: 3.125rem;
            font-weight: 100;
            margin: 0.75rem 0 2.4375rem 0;
        }
    }
    .image-wrapper {
        flex:1.25;
        height: 100%;
        width: 100%;
    }
`


export default Hero
