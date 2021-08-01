import React,{useEffect,useState} from 'react'
import Seo from './Seo'
import styled from 'styled-components'
import Footer from './footer/Footer'
import Header from './header/Header'
import GifImg from '../images/MC_logo_v2.gif'

const LayoutWrap = styled.section`
    max-width: 1920px;
    margin: 0 auto;
`
const GifImgContainer = styled.div`
    position:fixed;
    top: 0;
    bottom: 0;
    left: 0;
    width: 100vw;
    background-color: #1D1918;
    
`
const GifImgFigure = styled.figure`
    margin:0;
    padding:0;
    position: absolute;
    left:50%;
    top:50%;
    transform: translate(-50%,-50%);
    width:100%;
    max-width:110px;
    img{
        width:100%;
    }
`

const Layout = ({ title,caseStudy,children }) => {
    const [showGif,setShowGif] = useState(true);
    const [hash,setHash]= useState(null)
    useEffect(()=>{
        if(window){
            window.scrollTo(0,0);
            setHash(window.location.hash) 
            window.onbeforeunload = ()=>{
                window.sessionStorage.setItem('origin',window.location.href)
            }
           
           
                if(window.location.href===window.sessionStorage.getItem('origin')){
                     sessionStorage.removeItem('firstLoadDone')
                }
           
           
           

            if(window.sessionStorage.getItem('firstLoadDone')===null){
                if(title==='Home' && window.location.hash===''){
                    setShowGif(true);
                    setTimeout(()=>{
                        setShowGif(false);
                    },4000)
                     window.sessionStorage.setItem('firstLoadDone',1)
                }  else{
                    setShowGif(false);
                } 
                
             }  else{
                 
                 setShowGif(false);
             }
               
        }
        
    },[title])

    if(showGif && title==='Home' && hash===''){
        return(
            <GifImgContainer>
                <GifImgFigure> 
                    <img src={GifImg} alt=''/>
                </GifImgFigure>
            </GifImgContainer>
        )
    }
    
    return (
       <LayoutWrap>
            <Seo title={title}/>
            <Header caseStudy={caseStudy}/>
            <main>             
                {children}
            </main>
            <Footer />
        </LayoutWrap>
       
    )
}

export default Layout