import React from 'react'
import styled from 'styled-components'


const StyledContainer = styled.div`
    background-color: #fff;
`
const StyledListWrap = styled.div`
    max-width:900px;
    margin:0 auto;
    padding:3rem 1rem;
    display:block;
    width:100%;
    @media only screen and (min-width: 920px){
       display: flex;
       align-items: center;
       justify-content: space-between;
       padding-left:0;
       padding-right:0;
    }
`
const OurServices = () => {
    return (
        <StyledContainer>
            this is services
        </StyledContainer>
    )
}

export default OurServices
