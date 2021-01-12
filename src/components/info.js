import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import { useIntersection } from 'react-use';
import Image from 'gatsby-image';
import gsap from 'gsap';
const getImages = graphql`
    {
      vegs: file(relativePath: {eq: "vegs.png"}) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `;

const Info = () => {

    const data = useStaticQuery(getImages)
    const {vegs:{childImageSharp:{fluid:veg}}} = data;

    const infoRef = React.useRef(null)

    const intersection = useIntersection(infoRef, {
        root: null,
        rootMargin: "0px",
        threshold: 0.6
    });

    const fadeIn = el => {
        gsap.to(el, 1, {
            opacity: 1,
            y: -60,
            ease: "power4.out",
            rotation: 360,
            stagger: {
                amount: 0.3
            }
        });
    };

    const fadeOut = el => {
        gsap.to(el, 1, {
            opacity: 0,
            rotation: -360,
            y: -20,
            ease: "power4.out"
        });
    };

    const fromLeft = selector => {
        gsap.to(selector, 1, {
            ease: "power4.out",
        })
    }

    

    if (intersection && intersection.intersectionRatio < 0.6){
        fadeOut(".fade")
    }
    else {
        fadeIn(".fade")
        fromLeft(".left")
    }

    
    
    return (
        <StyledInfo ref={infoRef}>
            <div className="image_container fade">
                <Image fluid={veg}/>
            </div>
            <div className="contents fade">
                <h3 className="left">We make it easy <br/> for you to cook <br/>delicious dinners</h3>
                <p className="left">Simply choose your recipes from a weekly menu and we’ll deliver freshly picked vegetables, pre-portioned ingredients and step-by-step recipes direct to your door ready for you to cook.</p>
                <button className="left">shop now</button>
            </div>
        </StyledInfo>
    )
}

const StyledInfo = styled.section`
    display:flex;
    align-items: center;
    margin-top: 13rem;
    margin-bottom: 5rem;
    .image_container {
        width: 42.5rem;
    }
    .contents {
        margin-left: 11.78375rem;
        h3 {
            font-size: 38px;
            font-weight: 300;
            margin-bottom: 0;
        }
        p {
            font-size: 1rem;
            width: 25.25rem;
            line-height: 1.5;
            font-family: "Gilroy Light", Tahoma, Geneva, Verdana, sans-serif;
            font-weight: light;
            margin-top: 0.625rem;
            margin-bottom: 1.5625rem;
        }
    }
`

export default Info
