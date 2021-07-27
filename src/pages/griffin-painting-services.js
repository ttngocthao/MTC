import React from 'react'
import CasePageLayout from '../components/cases/CasePageLayout'
import HeroImg from '../images/cases/painting/fullHero.png'

import RectangleImgDisplay from '../components/cases/RectangleImgDisplay'
import LogoFullWidthImg from '../images/cases/painting/fullLogo.png'
import VanDesignImg from '../images/cases/painting/vanDesign.png'
import TwoImgsInRow from '../components/cases/TwoImgsInRow'
import IconDesignImg from '../images/cases/painting/iconDesign.png'
import LogoDesignImg from '../images/cases/painting/logoDesign.png'
import FourImgsInRow from '../components/cases/FourImgsInRow'
import Img1 from '../images/cases/painting/img1.png'
import Img2 from '../images/cases/painting/img2.png'
import Img3 from '../images/cases/painting/img3.png'
import Img4 from '../images/cases/painting/img4.png'
import CaseIntro from '../components/cases/CaseIntro'

const BeyondGarden = () => {
    return (
        <CasePageLayout 
            heroImg={HeroImg} 
            caseName='Griffin Painting Services' 
            caseNameArr={['Griffin','Painting Services']} 
            caseDescription='Residential painting company with over 30 years experience.'>
            
            <CaseIntro
                companyTextArr={['Griffin Painting Services are a Berkshire based residential painting company with over 30 years experience. They offer a clean and professional service and pride themselves on completing the job on time and to budget.']}
                briefTextArr={[
                    'The company was in the midst of a team shuffle. The owners son was stepping up to oversee operations and it was agreed with his dad (the previous owner) that the business should undergo a visual overhaul. The original logo that had been used for many years had become dated and tired. They needed an identity that would bring the business into the present day and offer a more contemporary feel.',
                    'It was important to the guys that the logo felt as though it could be something you would find on a tin of paint, instantly recognisable and bold enough to be remembered. The name was already a great source imagery, which was a brilliant starting point for our creatives.'
                ]}
                scopeNameArr={['BI','BS','MM']}
            />
            
            <RectangleImgDisplay imgSrc={LogoFullWidthImg}/>
            <RectangleImgDisplay imgSrc={VanDesignImg}/>
            <TwoImgsInRow img1Src={LogoDesignImg} img2Src={IconDesignImg}/>
            <FourImgsInRow img1Src={Img1} img2Src={Img2} img3Src={Img3} img4Src={Img4}/>
         
        </CasePageLayout>
    )
}

export default BeyondGarden
