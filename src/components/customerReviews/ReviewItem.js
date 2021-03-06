import React from 'react'
import styled from 'styled-components'

export const StyledReviewItem = styled.div`
    background-color: white;
    width: 100%;
    margin:1rem auto 2rem;
    padding:1.5rem;
    @media only screen and (min-width: 920px){
        max-width:398px;
        margin: 1rem 0;
        min-height: 394px;
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
export const StyledInitial = styled.div`
   width: 5rem;
   height:5rem;
   background-color: #222;
   border-radius: 50%;
   overflow: hidden;
`
const StyledLogo = styled.figure`
    margin:0;
    width: 5rem;
    img{
        width:100%;
    }
`
const StyledName = styled.h2`
    font-weight:600;
     font-size:2.15rem;
    margin-bottom: 0;
`
const StyledRole = styled.h3`
    margin-top: .5rem;
    color:#f43908;
    font-weight:600;
    font-size:1.2rem;
`
const ReviewItem = ({name,brand,msg,logo}) => {
    return (
        <StyledReviewItem>
           {logo ? <StyledLogo><img src={logo} alt=''/></StyledLogo> : <StyledInitial/>}
            <StyledName>{name}</StyledName>
            <StyledRole>{brand}</StyledRole>
            <p>{msg}</p>
        </StyledReviewItem>
    )
}

export default ReviewItem
