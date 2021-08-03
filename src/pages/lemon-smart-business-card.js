import React from 'react'
import CasePageLayout from '../components/cases/CasePageLayout'
import HeroImg from '../images/cases/lemon/fullHero.png'

import RectangleImgDisplay from '../components/cases/RectangleImgDisplay'
import LogoFullWidthImg from '../images/cases/lemon/fullLogo.png'
import ColorPaletteImg from '../images/cases/lemon/colorPalette.png'
import TwoImgsInRow from '../components/cases/TwoImgsInRow'
import SquareImg1 from '../images/cases/lemon/square1.png'
import SquareImg2 from '../images/cases/lemon/square2.png'
import FourImgsInRow from '../components/cases/FourImgsInRow'
import Img1 from '../images/cases/lemon/img1.png'
import Img2 from '../images/cases/lemon/img2.png'
import Img3 from '../images/cases/lemon/img3.png'
import Img4 from '../images/cases/lemon/img4.png'
import CaseIntro from '../components/cases/CaseIntro'
import MobileLogoImg from '../images/cases/lemon/lemon-logo.png'
import MobilePaletteImg from '../images/cases/lemon/lemon-palette.png'
const LemonSmartBCard = () => {
    return (
        <CasePageLayout 
            heroImg={HeroImg} 
            caseName={'LEMON SMART BUSINESS CARD'} 
            caseNameArr={['LEMON','SMART BUSINESS CARD']} 
            caseDescription='One business card for life. The smart business card that gets you more contact from contactless.'>
            
            <CaseIntro
                companyTextArr={['Lemon are a technology company based in London. They specialise in smart business cards which utilise the contactless feature on mobile devices in order to pass information between people.']}
                briefTextArr={[
                    'The team at Lemon presented their smart business card to us in the prototype stages and tasked us with designing a logo, along with various additional assets for them to use on their social platforms upon launch. They also required a simple website which customers could visit, in order to learn how the technology works and purchase their own personalised cards.',
                    'Staying relevant to the brand name was a must, so a bright yellow colour palette was developed first for the client to review. Once this was finalised we moved on to the logo which had to tick two boxes; bold and modern. The pairing of a clear word mark and wedge icon helps ensure the brand is recognisable, even when used seperately. The website needed to be clean and easy to navigate so we developed a two page system which conveyed the brand colours and message effectively.',
                    'https://lemonlink.co.uk'
                ]}
                scopeNameArr={['BA','WD','MM']}
            />
            
            <RectangleImgDisplay imgSrc={LogoFullWidthImg} mobileSrc={MobileLogoImg}/>
            <RectangleImgDisplay imgSrc={ColorPaletteImg} mobileSrc={MobilePaletteImg}/>
            <TwoImgsInRow img1Src={SquareImg1} img2Src={SquareImg2}/>
            <FourImgsInRow img1Src={Img1} img2Src={Img2} img3Src={Img3} img4Src={Img4}/>
         
        </CasePageLayout>
    
    )
}

export default LemonSmartBCard
