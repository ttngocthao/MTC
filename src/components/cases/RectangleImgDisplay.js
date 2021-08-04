import React from 'react'
import styled from 'styled-components'
import TwoImgsInRow from './TwoImgsInRow'

const ImgDisplay = styled.figure`
    margin: 0 auto 1.5rem;
    padding:0;
    display: none;
    @media only screen and (min-width: 700px){
       display:block;
       margin: 0 7.3% 3rem;
         
                
    }
    img{
        width:100%;
        vertical-align: bottom;
    }
`
const CustomisedImgOnMobileDisplay = styled(ImgDisplay)`
    padding:0 1rem;
    display: block;
    @media only screen and (min-width: 700px){
       display:none;
         
                
    }
`
const ImgDisplayOnMobile = styled.div`
    .bgImg{
    margin: 0 auto 1.5rem;
    padding:0;
    min-width:302px;
    min-height: 302px;
    width:100%;
   
    /* height:100%; */
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;  
    }
    display:block;
    padding:0 1rem; 
    overflow: hidden;
    @media only screen and (min-width: 700px){
       display:none;
         
                
    }
`


const RectangleImgDisplay = ({imgSrc,mobileSrc,mobileSrcArr}) => {
    return (
        <>
        <ImgDisplay>
            <img src={imgSrc} alt=''/>
        </ImgDisplay>
        {!mobileSrc && mobileSrcArr && <TwoImgsInRow className={`one-become-two`} img1Src={mobileSrcArr[0]} img2Src={mobileSrcArr[1]}/>}
        {mobileSrc ? <CustomisedImgOnMobileDisplay><img src={mobileSrc} alt=''/></CustomisedImgOnMobileDisplay> :  (!mobileSrcArr && !mobileSrc &&<ImgDisplayOnMobile>
            <div className='bgImg' style={{backgroundImage:`url(${imgSrc})`}}/>
        </ImgDisplayOnMobile>)}
        </>
        
    )
}

export default RectangleImgDisplay
