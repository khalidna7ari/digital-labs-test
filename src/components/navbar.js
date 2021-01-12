import React from "react"
import styled from "styled-components";
import Logo from "../images/logo.svg"
import Arrow from "../images/arrow-down.svg"

const Navbar = () => (
  <StyledHeader>
   <header className="header">
     <div className="header__logo">
       <img src={Logo} alt="Zecco"/>
     </div>
     <nav className="header__nav">
       <div className="recipe"><a href="#">Recipe box</a></div>
       <div className="products">
         <a href="#">Products</a>
         <ul>
           <li>Fruit</li>
           <li>Vegetables</li>
           <li>Eggs</li>
           <li>Milk</li>
           <li>Meat</li>
           <li>Fresh drinks</li>
         </ul>
       </div>
        <a className="about" href="#">About us</a>
        <a className="visit" href="#">Visit us</a>
     </nav>
     <div className="header__login">
       <a href="#">Log in</a>
       <button>create account</button>
     </div>

   </header>
  </StyledHeader>
)

const StyledHeader = styled.div`

  min-height: 5rem;
  .header{
    max-width: 120rem;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0rem 4rem;
    &__logo {
      width: 10.375rem;
      img {
        height: 100%;
        width: 100%;
        object-fit: contain;
        }
      }
    &__nav{
      .recipe,
      .visit,
      .about,
      .products {
        padding: 2rem 2.75rem;
      }
      display: flex;
      align-items: center;
        .products {
          position: relative;
          height: 100%;
          transition: all 250ms ease-in-out;
          :hover {
            a {
              color: #FF6B6B;
            }
            ul {
              visibility: visible;
            }
          }
          ul {
            background-color: white;
            position: absolute;
            width: 197px;
            height: 175px;
            list-style: none;
            margin-top: 2.0625rem;
            transform: translateX(-2.75rem);
            display: flex;
            flex-direction: column;
            visibility: hidden;
            z-index: 9999;
            border-radius: 4px;
            box-shadow: 0px 3px 6px #00000029;
            padding-left: 0;
            padding-top: 1rem;
            padding-bottom: 1rem;


            li {
              width: 100%;
              height: 100%;
              display: flex;
              align-items: center;
              padding-left: 1.5rem;

              padding-bottom: 2px;
              &:hover {
                background-color: #e4e4e4;
              }
            }
          }
        }
        a {
            text-decoration: none;
            color: black;
            position: relative;
        }
    }
    &__login {
      display: flex;
      justify-content: space-between;
      align-items: center;
      a{
        text-decoration: none;
        &:visited {
          color: black;
        }
      }
      button {
        margin-left: 2.75rem;
        text-transform: uppercase;
        border: none;
        background: none;
        outline: 1px solid black;
        padding: 0.71875rem 1.11875rem;
        font-size: 0.625rem;
        letter-spacing: 1px;
      }
    }
  }


`

export default Navbar


  /* background: white;
.header {
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.9375rem 4rem;
  font-family: "Interstate";
  &__logo {
    width: 10.375rem;
    object-fit: contain;
  }
  &__nav {
    ul {
      display: flex;
      list-style: none;
      li {
        padding-left: 2.75rem;
        padding-right:2.75rem;
        display: block;
        a {
        text-decoration: none;
        color: black;
        }
        a:hover {
            color: #FF6B6B;
          }
        .dropdown {
          display: none;
          position: absolute;
          top:100%;
          transform: translate(-30%,5%);
          border-radius: 4px;
          background: white;
          box-shadow: 0px 3px 6px #00000029;
          padding: 0;
          width: 10.9375rem;
          padding: 1.125rem 1.5rem;
          li {
            padding: 0;
          }
          li:not(:last-child) {
            margin-bottom: 0.375rem;
          }
        }
       
      }
      .caret {
        position: relative;
      }
      .caret::after {
        content: ">";
        font-size: 1.125rem;
        position: absolute;
        transform: rotate(90deg);
        top:-0.0625rem;
        right: 1.7875rem;
      } 
      .caret:hover::after{
            transform: rotate(-90deg);
            color: #FF6B6B;


      }
      .dropdown-container {
        position: relative;
        &:hover {
          display: block;
          .dropdown {
            display: block;
          }
        }
      }
    }
  }
  &__accounts {
    display: flex;
    justify-content: space-between;
    align-items: center;
    a{
      text-decoration: none;
      &:visited {
        color: black;
      }
    }
    button {
      margin-left: 2.75rem;
      text-transform: uppercase;
      border: none;
      background: none;
      outline: 1px solid black;
      padding: 0.71875rem 1.11875rem;

    }
  }
} */
  

 /* <header className ="header">
      <img className="header__logo" src={Logo} />
      <nav className="header__nav">
        <ul>
          <li className="caret"><a href="#">Recipe box</a></li>
          <li className="dropdown-container caret">
            <a href="#">Products</a>
            <ul className="dropdown">
              <li>Fruits</li>
              <li>Vegetables</li>
              <li>Eggs</li>
              <li>Milk</li>
              <li>Meat</li>
              <li>Fresh drinks</li>
            </ul>
          </li>
          <li><a href="#">About us</a></li>
          <li><a href="#">Visit us</a></li>
        </ul>
      </nav>
      <div className="header__accounts">
        <a href="#">Log in</a>
        <button>create account</button>
      </div>
    </header> */
    