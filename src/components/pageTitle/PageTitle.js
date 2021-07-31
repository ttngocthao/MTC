import React from 'react'
import styled from 'styled-components'

const TitleWrap = styled.div`
    max-width: 1920px;
    position: absolute;
    color: white;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    /* background-color: red; */
    width: 100%;
    padding-left: 2rem;
    /* padding:0 1rem; */
      @media only screen and (min-width: 1200px){
          padding-left: 0rem;
      }
    h1{
        max-width: 220px;
        line-height: 1;
        margin: 0 ;
        color:white;
        font-size: 3rem;
        font-weight:900;
        font-family: 'Barlow';

        
         @media only screen and (min-width: 600px){
              max-width: 1120px;
              margin: 0 auto ; 
              font-size: 4.3rem;
              
              /* padding-left: 1rem; */
         }
         
    }
    h2{
        max-width: 220px;
        margin: .5rem 0;
        color:#f43908;
        font-size:1.2rem;
        font-weight: 600;
        line-height: 1;
         @media only screen and (min-width: 600px){
              max-width: 1120px;
              margin: 1rem auto 0;
              font-size:2.15rem;
              /* padding-left: 1rem; */
         }
        
    }
`

const ContactTitleWrap = styled(TitleWrap)`
    /* @media only screen and (min-width: 1200px){
          padding-left: 1rem;
      } */
    h1{
        max-width: 200px;
        margin: 0;
      
        @media only screen and (min-width: 450px){
           
             max-width: 1920px;
        }
        @media only screen and (min-width: 700px){
            /* padding:0 4rem;
             max-width: 1920px; */
              /* max-width: 1640px; */
              margin: 0 auto ;
              padding:0 7.3%;
        }
    }
    h2{
        max-width: 1920px;
       
        @media only screen and (min-width: 700px){
            /* padding:0 4rem; */
             /* max-width: 1640px; */
             padding: 0 7.3% ;
             margin:0 auto
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
