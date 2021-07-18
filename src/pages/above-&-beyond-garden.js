import React from 'react'
import CasePageLayout from '../components/cases/CasePageLayout'
import HeroImg from '../images/cases/garden/fullHero.png'

import RectangleImgDisplay from '../components/cases/RectangleImgDisplay'
import LogoFullWidthImg from '../images/cases/garden/fullLogo.png'
import ColorPaletteImg from '../images/cases/garden/colourPalette.png'
import TwoImgsInRow from '../components/cases/TwoImgsInRow'
import TShirtImg from '../images/cases/garden/tshirt.png'
import BCardImg from '../images/cases/garden/bCard.png'
import FourImgsInRow from '../components/cases/FourImgsInRow'
import Img1 from '../images/cases/garden/img1.png'
import Img2 from '../images/cases/garden/img2.png'
import Img3 from '../images/cases/garden/img3.png'
import Img4 from '../images/cases/garden/img4.png'
import CaseIntro from '../components/cases/CaseIntro'

const BeyondGarden = () => {
    return (
        <CasePageLayout 
            heroImg={HeroImg} 
            caseName='Above &#38; Beyond Garden' 
            caseNameArr={['Above &','Beyond Garden']} 
            caseDescription='Designing your outdoor space to fit your aesthetic and lifestyle.'>
                
            <CaseIntro
                companyTextArr={['Above & Beyond Gardens specialise in helping their clients increase the beauty of their homes by designing elegant outdoor living spaces. They create beautiful garden designs by combining materials, colour, planting and lighting.']}
                briefTextArr={[
                    'Above & Beyond Gardens approached us during the initial stages of the business as they needed a logo that would show elegance and difference within the their industry. One key request during our briefing process was that we stayed away from greens, browns and more natural colours. It was important that the client had a brand that punched out from it’s competitors.',
                    'For us that was pretty exciting, we jumped into looking at various colour palettes that gave a high end feel whilst still suiting the industry that they are situated in. In the end, purples, pinks and charcoal was chosen. These vibrant core colours of the purples reflected the wonder of an English summer, showcasing bursts of different flowers that give impact to an outdoor space, against more contemporary slate tones that help marry the core brand visuals.'
                ]}
                scopeNameArr={['BI','BS','MM']}
            />
            
            <RectangleImgDisplay imgSrc={LogoFullWidthImg}/>
            <RectangleImgDisplay imgSrc={ColorPaletteImg}/>
            <TwoImgsInRow img1Src={TShirtImg} img2Src={BCardImg}/>
            <FourImgsInRow img1Src={Img1} img2Src={Img2} img3Src={Img3} img4Src={Img4}/>
         
        </CasePageLayout>
    )
}

export default BeyondGarden
