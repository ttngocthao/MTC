import React from 'react'
import CasePageLayout from '../components/cases/CasePageLayout'
import HeroImg from '../images/cases/pet/fullHero.png'

import RectangleImgDisplay from '../components/cases/RectangleImgDisplay'
import LogoFullWidthImg from '../images/cases/pet/fullLogo.png'
import ColorPaletteImg from '../images/cases/pet/logoColourVariations.png'
import TwoImgsInRow from '../components/cases/TwoImgsInRow'
import SquareImg1 from '../images/cases/pet/square1.png'
import SquareImg2 from '../images/cases/pet/square2.png'
import FourImgsInRow from '../components/cases/FourImgsInRow'
import Img1 from '../images/cases/pet/img1.png'
import Img2 from '../images/cases/pet/img2.png'
import Img3 from '../images/cases/pet/img3.png'
import Img4 from '../images/cases/pet/img4.png'
import CaseIntro from '../components/cases/CaseIntro'
import MobileYLogo from '../images/cases/pet/pet-logo-y.png'
import MobileDLogo from '../images/cases/pet/pet-logo-d.png'
const LouiesPlace = () => {
    return (
        <CasePageLayout 
            heroImg={HeroImg} 
            caseName={'LOUIE’S PLACE'} 
            caseNameArr={['LOUIE’S PLACE']} 
            caseDescription='A place where pets can dream.'>
            
            <CaseIntro
                companyTextArr={[ 'Louie’s Place, a place where pets can dream, design and build bespoke pet beds. Working with their clients, they plan and discuss the needs of not just the owner, but the pets themselves. Louie’s Place build beautiful pieces of furniture that not only feel like part of the space, but gives your furry little friends the best place to sleep in the house.']}
                briefTextArr={[
                    'When the guys at Louie’s Place approached us we jumped at the chance to build something great. The business idea is not only amazing but we had the opportunity to meet the owners dog, Louie the Cocker Spaniel. He was great inspiration for the brand and worked well for the down to earth cozy feel that the client wanted.',
                    'The logo would be used for heated brand marks on the furniture, as well as their website and social media platforms. The client took the approach that pets are like peoples children, they care for them in the same way and wanted their brand to represent that more approachable appeal.'
                ]}
                scopeNameArr={['BI','BS','MM']}
            />
            
            <RectangleImgDisplay imgSrc={LogoFullWidthImg}/>
            <RectangleImgDisplay imgSrc={ColorPaletteImg} mobileSrcArr={[MobileYLogo,MobileDLogo]}/>
            <TwoImgsInRow img1Src={SquareImg2} img2Src={SquareImg1}/>
            <FourImgsInRow img1Src={Img1} img2Src={Img2} img3Src={Img3} img4Src={Img4}/>
         
        </CasePageLayout>
    )
}

export default LouiesPlace

