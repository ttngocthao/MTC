import React from 'react'
import CasePageLayout from '../components/cases/CasePageLayout'
import HeroImg from '../images/cases/sketchy/fullHero.png'

import RectangleImgDisplay from '../components/cases/RectangleImgDisplay'
import LogoFullWidthImg from '../images/cases/sketchy/fullLogo.png'
import ColorPaletteImg from '../images/cases/sketchy/colorPalette.png'
import TwoImgsInRow from '../components/cases/TwoImgsInRow'
import SquareImg1 from '../images/cases/sketchy/square1.png'
import SquareImg2 from '../images/cases/sketchy/square2.png'
import FourImgsInRow from '../components/cases/FourImgsInRow'
import Img1 from '../images/cases/sketchy/img1.png'
import Img2 from '../images/cases/sketchy/img2.png'
import Img3 from '../images/cases/sketchy/img3.png'
import Img4 from '../images/cases/sketchy/img4.png'
import CaseIntro from '../components/cases/CaseIntro'
import MobileImg from '../images/cases/sketchy/itchy-palette.png'
const ItchyAndSketchy = () => {
    return (
        <CasePageLayout 
            heroImg={HeroImg} 
            caseName={'ITCHY & SKETCHY GIFTS AND SIGNS'} 
            caseNameArr={['ITCHY & SKETCHY','GIFTS AND SIGNS']} 
            caseDescription='One of a kind calligraphy gifts and signage for any occasion. Hand made and beautifully wrapped, just for you.'>
            
            <CaseIntro
                companyTextArr={['Itchy & Sketchy is a small business in the UK which creates and sells bespoke calligraphy gifts and signage. Each item is individually made by the founder, hand painted using her own modern calligraphy style and wrapped with care.']}
                briefTextArr={[
                    'We had the pleasure of working with the founder of Itchy & Sketchy to help digitalise her brand and create an online store which customers could visit and order bespoke gifts from. Being an extremely creative person herself, the brand already had a clear identity and colour palette which we were to follow when working up the initial website design.',
                    'As the majority of the initial artwork was created by hand using pens, we went through and vectorised the main logo and any additional brand assets the client wanted to use online. When laying out the website, photographs of the products were paired with clear descriptions to ensure the wide range of options could be viewed easily by users.',
                    'https://itchyxsketchy.com/'
                ]}
                scopeNameArr={['Brand Digitilisation','WD','MM']}
            />
            
            <RectangleImgDisplay imgSrc={LogoFullWidthImg}/>
            <RectangleImgDisplay imgSrc={ColorPaletteImg} mobileSrc={MobileImg}/>
            <TwoImgsInRow img1Src={SquareImg2} img2Src={SquareImg1}/>
            <FourImgsInRow img1Src={Img1} img2Src={Img2} img3Src={Img3} img4Src={Img4}/>
         
        </CasePageLayout>
    )
}

export default ItchyAndSketchy

