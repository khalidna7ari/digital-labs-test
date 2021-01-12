import React from 'react'
import styled from 'styled-components'
import arrow from '../images/arrow.svg'
import RecipeOne from '../images/10.jpg'
import RecipeTwo from '../images/11.jpg'
import RecipeThree from '../images/12.jpg'
import Basket from '../images/supermarket.svg'

const Recipe = () => {
    return (
        <StyledRecipe>
            <div className="title__container">
                <h3>Latest recipes</h3>
                <div className="arrows">
                    <img className="arrow_checked prev" src={arrow}/>
                    <img className="arrow_unchecked next" src={arrow} />
                </div>
            </div>
            <div className="recipe__container">
                <div className='recipe'>
                    <div className="image__wrapper">
                        <img src={RecipeOne}/>
                    </div>
                    <div className="descriptions">
                        <p className="desc">Portobello Baked Eggs<br/> with avocado & bread</p>
                        <div className="basket">
                            <p className="price">£8</p>
                            <span>
                                <img src={Basket}/>
                            </span>
                        </div>    
                    </div>        
                </div>
                <div className='recipe'>
                    <div className="image__wrapper">
                        <img src={RecipeTwo}/>
                    </div>
                    <div className="descriptions">
                        <p className="desc">Summery salmon, <br/> beetroot & spicy mix</p>
                        <div className="basket">
                            <p className="price">£15</p>
                            <span>
                                <img src={Basket} alt="recipe one"/>
                            </span>
                        </div>    
                    </div>        
                </div>
                <div className='recipe'>
                    <div className="image__wrapper">
                        <img src={RecipeThree}/>
                    </div>
                    <div className="descriptions">
                        <p className="desc">Backed Avocado Egg<br/> with herbs</p>
                        <div className="basket">
                            <p className="price">£8</p>
                            <span>
                                <img src={Basket}/>
                            </span>
                        </div>    
                    </div>        
                </div>
            </div>
        </StyledRecipe>
    )
}

const StyledRecipe = styled.div`
    
    padding: 5rem 14rem;
    
    .title__container{
        display: flex;
        justify-content: space-between;
        align-items: center;
        h3 {
            font-size: 2.75rem;
            font-weight: 300;
        }
        .arrows{ 
            .prev {
                transform: scaleX(-1);
                fill: gray;
            }
            .next {
                margin-left: 2.580625rem;
            }
            
        }
    }
    .recipe__container{
        display: flex;
        justify-content: space-between;
        margin-top: 2.625rem;
        .recipe {
            display: flex;
            align-items: center;
            position:relative;
            .image__wrapper{
                height: 6.875rem;
                width: 6.875rem;
                img {
                    border-radius: 50%;
                    height: 100%;
                    width: 100%;
                    object-fit: cover;
                }
            }
            .descriptions {
                padding: 0.75rem 0.4375rem 0.4375rem 2.375rem;
                margin-left: -1.5625rem;
                box-shadow: 0px 3px 6px #00000029;
                z-index: -1;
                .desc{
                    font-size: 0.875rem;
                    padding-right: 1rem;
                }
                .basket{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-top: 1rem;
                    .price{
                        color: #4EC6A6;
                        font-weight: bolder;
                        font-size: 1rem;
                        align-self: flex-end;
                        padding-bottom: 0.5rem;
                    }
                    span {
                        background: #FF947B;
                        padding: 0.5rem 0.5rem 0.5rem 1rem;
                        border-radius: 100% 0 0 0;
                        position: relative;
                        padding: 1rem;
                        img {
                            position: absolute;
                            right: 5px;
                            bottom: 8px;
                        }
                    }
                }
            }
        }
    }

`

export default Recipe
