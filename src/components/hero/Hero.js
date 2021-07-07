import React from 'react'
import styled from 'styled-components'
// import HomeHeroImg from '../../images/cases/hero_home.png';
import FullHomeHero from '../../images/hero/fullHomeHero.png';
import TitleWrap from '../pageTitle/PageTitle'
// const HeroImgWrap = styled.figure`
//     padding:0;
//     margin:0 auto;
//     max-width: 1200px;
//     img{
//         width:100%;
//         vertical-align: bottom;
//     }
// `
const Container = styled.section`
    padding:0;
    margin:0 auto;
    max-width: 1200px;
    position: relative;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    min-width:300px;
    min-height:400px;
    width: 100%;  
    @media only screen and (min-width: 1024px){
            min-height:300px;
            background-position:  center 70%;
    }
`
// const HomeTitleWrap = styled.div`
//     max-width: 1200px;
//     position: absolute;
//     color: white;
//     top: 50%;
//     left: 50%;
//     transform: translate(-50%, -50%);
//     /* background-color: red; */
//     width: 100%;
//     h1{
//         max-width: 230px;
//         line-height: 1;
//         margin: 0 auto;
//         color:white;
//         font-size: 3rem;
//         font-weight:900;
//         font-family: 'Barlow';
//          @media only screen and (min-width: 1024px){
//               max-width: 700px;
              
//          }
//     }
//     h2{
//         max-width: 230px;
//         margin: .5rem auto 0;
//         color:#f43908;
//         font-size:1rem;
//         font-weight: 400;
//         @media only screen and (min-width: 1024px){
//               max-width: 700px;
             
//         }
//     }
// `
const Hero = ({heroSrc,pageTitle}) => {
    if(!heroSrc){
        heroSrc = FullHomeHero;
    }
    
    return (
        <Container style={{backgroundImage:`linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.5)),url(${heroSrc})`}}>
            {/* <HeroImgWrap>
                <img src={HomeHeroImg} alt=''/>
            </HeroImgWrap> */}
            {/* {isHomePage && 
                <HomeTitleWrap>
                    <h1>LET’S BUILD<br/>YOUR CULTURE</h1>
                    <h2>Ex id non ad consequat non anim excepteur adipisicing enim irure non.</h2>
                </HomeTitleWrap>
            } */}
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
        </Container>
       
    )
}

export default Hero
