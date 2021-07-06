import React from 'react'
import styled from 'styled-components'
import HomeHeroImg from '../../images/cases/hero_home.png';
const HeroImgWrap = styled.figure`
    padding:0;
    margin:0 auto;
    max-width: 1200px;
    img{
        width:100%;
        vertical-align: bottom;
    }
`
const Container = styled.section`
    padding:0;
    margin:0 auto;
    max-width: 1200px;
    position: relative;
    /* h1{
        max-width:600px;
        position:absolute;
        
    } */
`
const HomeTitleWrap = styled.div`
    max-width: 1200px;
    position: absolute;
    color: white;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    /* background-color: red; */
    width: 100%;
    h1{
        max-width: 700px;
        margin: 0 auto;
        color:white;
        font-size: 3rem;
        font-weight:900;
        font-family: 'Barlow';
    }
    h2{
        max-width: 700px;
        margin: .5rem auto 0;
        color:#f43908;
        font-size:1rem;
        font-weight: 400;
    }
`
const Hero = () => {
    return (
        <Container>
            <HeroImgWrap>
                <img src={HomeHeroImg} alt=''/>
            </HeroImgWrap>
            <HomeTitleWrap>
                <h1>LET’S BUILD<br/>YOUR CULTURE</h1>
                <h2>Ex id non ad consequat non anim excepteur adipisicing enim irure non.</h2>
            </HomeTitleWrap>
            
        </Container>
       
    )
}

export default Hero
