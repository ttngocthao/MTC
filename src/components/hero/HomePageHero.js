import React from 'react'

import HeroLogo from '../../images/hero/heroLogo.png'
import BkgImg from '../../images/hero/heroHomeBkg.png'
import styled from 'styled-components'

const Wrap = styled.div`
    display: flex;
    justify-content: space-between;
     margin-top: 89px; 
     @media only screen and (min-width: 700px){
       margin-top:153px;
    }
     /* @media only screen and (min-width: 630px){                
      
        margin-top: 153px;
    } */
    /* @media only screen and (min-width: 1024px){        
          
        margin-top: 153px; 
    } */

`
const LogoWrap = styled.figure`
    width:100%;
    margin: 0;
    background-position: center right;
    background-repeat: no-repeat;
    background-size: cover; 
    img{
        width: 100%;
        vertical-align: bottom;
    }
    @media only screen and (min-width: 1024px){                
        max-width:691px;

    }

`
const HeadingWrap = styled.div`
    
    flex-direction: column;
    justify-content: center;
    width: 100%;
  
    display: none;
    padding-left: 2rem;
    @media only screen and (min-width: 630px){                
      
        display: flex;
        max-width: 1920px;
        /* padding-left: 1rem; */
    }
    @media only screen and (min-width: 1024px){
       padding-left :0 ;
        /* display: flex; */
       margin:0 20.78%;
        
    }
`

const Heading1 = styled.h1`    
        max-width: 220px;
        line-height: 1;
        margin: 0 ;
        color:white;
        font-size: 3rem;
        font-weight:900;
        font-family: 'Barlow';

        
         @media only screen and (min-width: 600px){
              max-width: 1120px;
              
              
             
         }
         
   
`

const Heading2= styled.h2`
     max-width: 300px;
        margin: .5rem 0;
        color:#f43908;
        font-size:1.2rem;
        font-weight: 600;
        line-height: 1;
         /* @media only screen and (min-width: 600px){
              max-width: 1120px;
              margin: 1rem auto 0;
              font-size:2.15rem;
              
         } */
`

const HomePageHero = () => {
    return (
        <Wrap style={{backgroundImage:`url(${BkgImg})`}}>
          <HeadingWrap >
               <Heading1>LET’S BUILD<br/>YOUR CULTURE</Heading1>
               <Heading2>Purposeful design creates longevity<br/> and wins the hearts of many.</Heading2>
          </HeadingWrap>
          <LogoWrap>
              <img src={HeroLogo} alt=''/>
         </LogoWrap>  
        </Wrap>
    )
}

export default HomePageHero
