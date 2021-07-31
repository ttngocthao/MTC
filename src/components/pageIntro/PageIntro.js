import React from 'react'
import styled from 'styled-components'

const IntroWrap = styled.div`
    max-width: 1920px;
    margin:0 auto;
    padding:3rem 2rem;
   p{
       max-width: 1120px;
       margin:0 auto;
   }
`

const PageIntro = ({id,children}) => {
    return (
        <IntroWrap id={id ? id : null}>
           {children}
        </IntroWrap>
    )
}

export default PageIntro
