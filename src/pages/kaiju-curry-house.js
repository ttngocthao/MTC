import React from 'react'
import CasePageLayout from '../components/cases/CasePageLayout'
import HeroImg from '../images/cases/curry/fullHero.png'

import RectangleImgDisplay from '../components/cases/RectangleImgDisplay'
import LogoFullWidthImg from '../images/cases/curry/fullLogo.png'
import ShirtMobileImg from '../images/cases/curry/shirtMobile.png'
import TwoImgsInRow from '../components/cases/TwoImgsInRow'
import SquareImg1 from '../images/cases/curry/firstSketch.png'
import SquareImg2 from '../images/cases/curry/finalSketch.png'
import FourImgsInRow from '../components/cases/FourImgsInRow'
import Img1 from '../images/cases/curry/img1.png'
import Img2 from '../images/cases/curry/img2.png'
import Img3 from '../images/cases/curry/img3.png'
import Img4 from '../images/cases/curry/img4.png'
import CaseIntro from '../components/cases/CaseIntro'
import MobileLeftImg from '../images/cases/curry/curry-shirt.png'
import MobileRightImg from '../images/cases/curry/curry-mobile.png'
const KaijuCurryHouse = () => {
    return (
        <CasePageLayout 
            heroImg={HeroImg} 
            caseName='Kaiju Curry House' 
            caseNameArr={['Kaiju','Curry House']} 
            caseDescription='Kaiju related discussion, a side of banter, washed down with recommendations.'>
            
            <CaseIntro
                companyTextArr={['Kaiju Curry House is a UK based bi-weekly podcast series focusing on Kaiju fandom. Presented by three hosts, bringing you a main course of Kaiju related discussion, a side of banter, washed down with recommendations. Hardcore or casual, we welcome all to our curry house.']}
                briefTextArr={[
                    'We were approached to create a new mascot for the podcast. The team already had an existing mascot that was not looking up to scratch. They wanted something inspired by the 80’s, which we included by using the colour gradient and aviators as a ‘cool’ touch. Once the mascot was visualised, the team asked us to look at locking it up with some typography.',
                    'Initial concept sketches were produced using Procreate on the iPad Pro and finalised in Illustrator.'
                ]}
                scopeNameArr={['BI','BS','MM']}
            />
            
            <RectangleImgDisplay imgSrc={LogoFullWidthImg}/>
            <RectangleImgDisplay imgSrc={ShirtMobileImg} mobileSrcArr={[MobileLeftImg,MobileRightImg]}/>
            <TwoImgsInRow img1Src={SquareImg1} img2Src={SquareImg2}/>
            <FourImgsInRow img1Src={Img1} img2Src={Img2} img3Src={Img3} img4Src={Img4}/>
         
        </CasePageLayout>
    )
}

export default KaijuCurryHouse
