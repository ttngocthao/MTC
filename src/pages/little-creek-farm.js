import React from 'react'
import CasePageLayout from '../components/cases/CasePageLayout'
import HeroImg from '../images/cases/farm/heroFullWidth.png'

import LogoFullWidthImg from '../images/cases/farm/LogoFullWidth.png'
import LittleCreekFarmImg from '../images/cases/farm/littleCreekFarm.png'

import RectangleImgDisplay from '../components/cases/RectangleImgDisplay'
import TwoImgsInRow from '../components/cases/TwoImgsInRow'
import EggBoxImg from '../images/cases/farm/imgSquare1.png'
import OpenedEggBoxImg from '../images/cases/farm/imgSquare2.png'
import FourImgsInRow from '../components/cases/FourImgsInRow'
import Img1 from '../images/cases/farm/smlSquareImg1.png'
import Img2 from '../images/cases/farm/smlSquareImg2.png'
import Img3 from '../images/cases/farm/smlSquareImg3.png'
import Img4 from '../images/cases/farm/smlSquareImg4.png'
import CaseIntro from '../components/cases/CaseIntro'
import FarmMobileImg from '../images/cases/farm/farm.png'


const LittleCreekFarm = () => {
    return (
        <CasePageLayout 
            heroImg={HeroImg} 
            caseName='Little Creek Farm' 
            caseNameArr={['Little','Creek Farm']} 
            caseDescription='Farmed with love.'>
            
            <CaseIntro
                companyTextArr={['The owners story began in 2011 when they purchased a 100 acre piece of paradise. With a passion for animals, namely chickens as well as sustainable farming practises Little Creek was born and so began their journey to being proud small business owners.']}
                briefTextArr={[
                    'The newly formed farm business needed a contemporary yet down to earth logo that would set them apart from their competition. The brief was to keep it quite simple, using just black and white for the key brand assets that could easily be applied to multiple pieces of collateral.',
                    'When it came to the egg carton labels themselves the client wanted to introduce some colour to differentiate between the various size of eggs.'
                ]}
                scopeNameArr={['BI','BS','MM']}
            />
               
            <RectangleImgDisplay imgSrc={LogoFullWidthImg}/>
            <RectangleImgDisplay imgSrc={LittleCreekFarmImg} mobileSrc={FarmMobileImg}/>
            <TwoImgsInRow img1Src={EggBoxImg} img2Src={OpenedEggBoxImg}/>
            <FourImgsInRow img1Src={Img1} img2Src={Img2} img3Src={Img3} img4Src={Img4}/>
        </CasePageLayout>
    )
}

export default LittleCreekFarm
