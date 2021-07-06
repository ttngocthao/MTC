import React from 'react'
import styled from 'styled-components'

const IntroWrap = styled.div`
    max-width: 1200px;
    margin:0 auto;
    padding:3rem 0;
   p{
       max-width: 700px;
       margin:0 auto;
   }
`

const PageIntro = ({children}) => {
    return (
        <IntroWrap>
           {children}
        </IntroWrap>
    )
}

export default PageIntro