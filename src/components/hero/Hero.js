import React from 'react'
import styled from 'styled-components'
import FullHomeHero from '../../images/hero/fullHomeHero.png';
import TitleWrap from '../pageTitle/PageTitle'

const Container = styled.section`
    padding:0;
    margin:0 auto;
    max-width: 1920px;
    position: relative;
    background-color: #222;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    min-width:300px;
    min-height:810px;
    width: 100%;  
    
    @media only screen and (min-width: 1024px){
            min-height:470px;
            background-position:  center 70%;   
            margin-top: 153px; 
            &.addMarginBottom{
                margin-bottom: 3rem;
            }
            &.caseStudy{
                min-height: 694px;
                margin:0;
            }       
            &.scrollingMarginTop{
                margin-top:114px;
               
            }
            
    }
    
`
const TwoLineTitle = styled.h1`
    /* line-height: 1; */
    text-transform: uppercase;
    @media only screen and (min-width: 1024px){
        font-size: 7rem!important;
    }
`


const Hero = ({heroSrc,pageTitle,noTopLayout,caseStudy,caseDescription,caseNameArr,minHeight}) => {
    if(!heroSrc){
        heroSrc = FullHomeHero;
    }
   
    

    
    const backgroundImageStyle = noTopLayout ? `url(${heroSrc})`: `linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.5)),url(${heroSrc})`
   
   
   
         return (
        <Container 
            className={`${caseStudy ? 'caseStudy' : null} ${pageTitle==='about' ? 'addMarginBottom': null}`} 
            style={minHeight ? {backgroundImage:backgroundImageStyle,minHeight:`${minHeight}px`,marginTop:0}: {backgroundImage:backgroundImageStyle}}>
            
            {pageTitle==='home' && <TitleWrap>
                <h1>LET’S BUILD<br/>YOUR CULTURE</h1>
                <h2>Purposeful design creates longevity<br/> and wins the hearts of many.</h2>
           </TitleWrap>}
           
            {pageTitle==='contact' && <TitleWrap contactTitle={true}>
                <h1>GET IN TOUCH</h1>           
                <h2>We’d love to hear from you.</h2>
           </TitleWrap>}

            {pageTitle==='about' && <TitleWrap>
                <h1>WE BUILD DESIGN LED<br/>
                    CULTURES FOR YOUR BUSINESS</h1> 
                <h2>Enjoy the benefits of change, disruption and ownership.     </h2>
                </TitleWrap>}

            {caseStudy && <TitleWrap>
               {caseNameArr ? (<TwoLineTitle>{caseNameArr[0]}<br/>{caseNameArr[1]}</TwoLineTitle>) :  <h1>pageTitle</h1>}
                <h2 style={{color:'white'}}>{caseDescription}</h2>
                </TitleWrap>}
        </Container>
       
    )
    
   
}

export default Hero
