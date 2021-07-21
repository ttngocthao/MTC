import React,{useState,useEffect} from 'react'
import styled from 'styled-components'
import FullHomeHero from '../../images/hero/fullHomeHero.png';
import TitleWrap from '../pageTitle/PageTitle'
import  useScroll from '../../hooks/useScroll';

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
    const [containerClassList,setContainerClassList]= useState([]);
    const [isScrolling,setIsScrolling] = useState(false);
    const scroll = useScroll();

    useEffect(()=>{
        const _classList =[];
        
        if(scroll.y > 153 && scroll.y - scroll.lastY >0){
            _classList.push('scrollingMarginTop');
            setIsScrolling(true);
            setContainerClassList(_classList)
        }
        if(scroll.y >= 153 && scroll.y - scroll.lastY <= 0){
            setIsScrolling(false)
            setContainerClassList([]);
        }
        // if(caseStudy){
        //     _classList.push()
        // }
    },[scroll.y,scroll.lastY])
    const backgroundImageStyle = noTopLayout ? `url(${heroSrc})`: `linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.5)),url(${heroSrc})`
    //className={!caseStudy && !minHeight && scrollDirection==='down' ? 'scrollingMarginTop' : 'not-scrollingMarginTop'}
   
   
         return (
        <Container 
            className={`${containerClassList.join(' ')} ${caseStudy ? 'caseStudy' : null}`} 
            style={minHeight ? {backgroundImage:backgroundImageStyle,minHeight:`${minHeight}px`}: {backgroundImage:backgroundImageStyle}}>
            
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
    
   
}

export default Hero
