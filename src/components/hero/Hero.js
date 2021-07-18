import React from 'react'
import styled from 'styled-components'
// import HomeHeroImg from '../../images/cases/hero_home.png';
import FullHomeHero from '../../images/hero/fullHomeHero.png';
import TitleWrap from '../pageTitle/PageTitle'
// const HeroImgWrap = styled.figure`
//     padding:0;
//     margin:0 auto;
//     max-width: 1920px;
//     img{
//         width:100%;
//         vertical-align: bottom;
//     }
// `
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
    min-height:450px;
    width: 100%;  
    @media only screen and (min-width: 1024px){
            min-height:470px;
            background-position:  center 70%;
    }
`
const TwoLineTitle = styled.h1`
    line-height: 1;
`
// const CaseStudyHeroContainer = styled(Container)`
//     display:none;
//      @media only screen and (min-width: 1024px){
//            display:block;
//     }
// `
// const CaseStudyHeroMobile = styled(CaseStudyHeroContainer)`
//     display:block;
//       @media only screen and (min-width: 1024px){
//            display:none;
//     }
// `

const Hero = ({heroSrc,pageTitle,noTopLayout,caseStudy,caseDescription,caseNameArr}) => {
    if(!heroSrc){
        heroSrc = FullHomeHero;
    }
    const backgroundImageStyle = noTopLayout ? `url(${heroSrc})`: `linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.5)),url(${heroSrc})`
    // if(!caseStudy){
         return (
        <Container style={{backgroundImage:backgroundImageStyle}}>
            
            {pageTitle==='home' && <TitleWrap>
                <h1>LET’S BUILD<br/>YOUR CULTURE</h1>
                <h2>Ex id non ad consequat non anim excepteur adipisicing enim irure non.</h2>
           </TitleWrap>}
           
            {pageTitle==='contact' && <TitleWrap contactTitle={true}>
                <h1>GET IN TOUCH</h1>
                <h2>Ullamco amet magna ea cupidatat nulla.</h2>
           </TitleWrap>}

            {pageTitle==='about' && <TitleWrap>
                <h1>WE BUILD DESIGN LED<br/>
                    CULTURES FOR YOUR BUSINESS</h1> 
                <h2>Adipisicing cillum elit reprehenderit cupidatat ex quis duis consequat.</h2>
                </TitleWrap>}

            {caseStudy && <TitleWrap>
               {caseNameArr ? (<TwoLineTitle>{caseNameArr[0]}<br/>{caseNameArr[1]}</TwoLineTitle>) :  <h1>pageTitle</h1>}
                <h2 style={{color:'white'}}>{caseDescription}</h2>
                </TitleWrap>}
        </Container>
       
    )
    // }else{
    //     return(
    //         <>
    //             <CaseStudyHeroContainer style={{backgroundImage: `url(${heroSrc})`}}/>
    //             <CaseStudyHeroMobile style={{backgroundImage:`url(${heroMobileSrc? heroMobileSrc : heroSrc})`}}/>
    //         </>
    //     )
    // }
   
}

export default Hero
