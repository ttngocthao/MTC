import React from 'react'
import styled from 'styled-components'

const StyledReviewItem = styled.div`
    background-color: white;
    width: 100%;
    margin:1rem auto;
    padding:1.5rem;
    @media only screen and (min-width: 920px){
        max-width:398px;
        margin: 1rem 0;
        &:nth-child(2){
            margin-left: 1rem;
            margin-right: 1rem;
        }
        /* &:first-child{
            margin-left:0;
        }
        &:last-child{
            margin-right: 0;
        } */
    }
`
const StyledInitial = styled.div`
   width: 5rem;
   height:5rem;
   background-color: #222;
   border-radius: 50%;
   overflow: hidden;
`
const StyledName = styled.h2`
    font-weight:600;
    font-size:2rem;
    margin-bottom: 0;
`
const StyledRole = styled.h3`
    margin-top: .5rem;
    color:#f43908;
    font-weight:600;
    font-size:1rem;
`
const ReviewItem = ({name,brand,msg}) => {
    return (
        <StyledReviewItem>
            <StyledInitial/>
            <StyledName>{name}</StyledName>
            <StyledRole>{brand}</StyledRole>
            <p>{msg}</p>
        </StyledReviewItem>
    )
}

export default ReviewItem
