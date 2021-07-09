import React from 'react'
import styled from 'styled-components'
import ReviewItem from './ReviewItem'

const StyledContainer = styled.div`
    background-color: #222;
`
export const StyledListWrap = styled.div`
    max-width:1376px;
    margin:0 auto;
    padding:3rem 1rem;
    display:block;
    width:100%;
    @media only screen and (min-width: 920px){
       display: flex;
       /* flex-wrap: wrap; */
       align-items: center;
       justify-content: space-between;
      
    }
    /* @media only screen and (min-width:1300px){
         padding-left:0;
       padding-right:0;
    } */
`
const reviewData =[
    {
        name:'Simon Cousins',
        brand:'Above & Beyond Gardens',
        msg:'Enim labore ut occaecat occaecat enim pariatur laboris consequat id adipisicing. Anim ea minim cupidatat aliqua non. Nulla anim consequat esse eiusmod amet exercitation adipisicing nulla magna cillum Lorem duis commodo. Eu nulla esse ad magna reprehenderit amet ullamco eiusmod Lorem ut quis enim.'
    },
     {
        name:'Simon Cousins',
        brand:'Above & Beyond Gardens',
        msg:'Enim labore ut occaecat occaecat enim pariatur laboris consequat id adipisicing. Anim ea minim cupidatat aliqua non. Nulla anim consequat esse eiusmod amet exercitation adipisicing nulla magna cillum Lorem duis commodo. Eu nulla esse ad magna reprehenderit amet ullamco eiusmod Lorem ut quis enim.'
    },
     {
        name:'Simon Cousins',
        brand:'Above & Beyond Gardens',
        msg:'Enim labore ut occaecat occaecat enim pariatur laboris consequat id adipisicing. Anim ea minim cupidatat aliqua non. Nulla anim consequat esse eiusmod amet exercitation adipisicing nulla magna cillum Lorem duis commodo. Eu nulla esse ad magna reprehenderit amet ullamco eiusmod Lorem ut quis enim.'
    }
]
const ReviewList = () => {
    return (
        <StyledContainer>
            <StyledListWrap>
                {reviewData.map(({name,brand,msg},index)=><ReviewItem key={index} name={name} brand={brand} msg={msg}/>)}
            </StyledListWrap>          
        </StyledContainer>
    )
}

export default ReviewList
