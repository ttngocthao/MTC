import React from 'react'
import styled from 'styled-components'

const TitleWrap = styled.div`
    max-width: 1200px;
    position: absolute;
    color: white;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    /* background-color: red; */
    width: 100%;
    h1{
        max-width: 220px;
        line-height: 1;
        margin: 0 1rem ;
        color:white;
        font-size: 3rem;
        font-weight:900;
        font-family: 'Barlow';
        
         @media only screen and (min-width: 600px){
              max-width: 700px;
              margin: 0 auto ;
              padding-left: 1rem;
         }
          @media only screen and (min-width: 1024px){
             padding-left: 0;
        }
    }
    h2{
        max-width: 220px;
        margin: .5rem 1rem 0;
        color:#f43908;
        font-size:1rem;
        font-weight: 600;
         @media only screen and (min-width: 600px){
              max-width: 700px;
              margin: .5rem auto 0;
              padding-left: 1rem;
         }
        @media only screen and (min-width: 1024px){
            padding-left: 0;
        }
    }
`

const ContactTitleWrap = styled(TitleWrap)`
    h1{
        max-width: 200px;
        margin: 0;
        padding:0 1rem;
        @media only screen and (min-width: 450px){
           
             max-width: 1200px;
        }
        @media only screen and (min-width: 700px){
            padding:0 4rem;
             max-width: 1200px;
        }
    }
    h2{
        max-width: 1200px;
        /* padding:0 1rem; */
        @media only screen and (min-width: 700px){
            padding:0 4rem;
        }
    }
   
`

const PageTitle = ({contactTitle,children}) => {
    if(contactTitle){
        return (
            <ContactTitleWrap>
                {children}
            </ContactTitleWrap>
        )
    }else{
         return (
            <TitleWrap>
                {children}
            </TitleWrap>
        )
    }
        //  return (
        //     <TitleWrap>
        //         {children}
        //     </TitleWrap>
        // )
}

export default PageTitle
