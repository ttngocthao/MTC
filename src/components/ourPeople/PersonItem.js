import React from 'react'
import styled from 'styled-components'

const ItemContainer = styled.div`
    max-width:700px;
    width:100%;
    padding-bottom: 1rem;
    @media only screen and (min-width: 741px){
         padding-bottom: 0rem;
       :first-child{
           padding-right: 1rem;
       }
       :last-child{
           padding-left: 1rem;
       }
    }
    p{
        margin-bottom:1rem;
    }
`
const ItemAvatar = styled.figure`
    margin:0;
    padding:0;
    max-width: 536px;
    img{
        width:100%;
        vertical-align: bottom;
    }
`

const StyledName = styled.h2`
    font-weight: 900;
    text-transform: uppercase;
    font-size: 3rem;
    margin-bottom: 0;
    letter-spacing: .1rem;
`

const StyledJobTitle = styled.h3`
    font-weight: 600;
    color:#f43908;
    font-size: 1.25rem;
    margin-top:0;
`

const PersonItem = ({name,jobTitle,avatarUrl,children}) => {
    return (
        <ItemContainer>
            <ItemAvatar>
                <img src={avatarUrl} alt=''/>
            </ItemAvatar>
            <StyledName>
                {name}
            </StyledName>
            <StyledJobTitle>
                {jobTitle}
            </StyledJobTitle>

            {children}
        </ItemContainer>
    )
}

export default PersonItem
