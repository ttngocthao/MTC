import React from 'react'
import CasePageLayout from '../components/cases/CasePageLayout'
import HeroImg from '../images/cases/salon/fullHero.png'

import RectangleImgDisplay from '../components/cases/RectangleImgDisplay'
import LogoFullWidthImg from '../images/cases/salon/fullLogo.png'
import ProfilePageImg from '../images/cases/salon/profilePage.png'
import TwoImgsInRow from '../components/cases/TwoImgsInRow'
import SquareImg1 from '../images/cases/salon/square1.png'
import SquareImg2 from '../images/cases/salon/square2.png'
import FourImgsInRow from '../components/cases/FourImgsInRow'
import Img1 from '../images/cases/salon/img1.png'
import Img2 from '../images/cases/salon/img2.png'
import Img3 from '../images/cases/salon/img3.png'
import Img4 from '../images/cases/salon/img4.png'
import CaseIntro from '../components/cases/CaseIntro'

const Salon = () => {
    return (
         <CasePageLayout 
            heroImg={HeroImg} 
            caseName={'SALON 55'} 
            caseNameArr={['SALON 55']} 
            caseDescription='a L’Oreal Professional salon with a fantastic artistic team.'>
            
            <CaseIntro
                companyTextArr={['Salon 55 is a L’Oreal Professional salon with a fantastic artistic team to suit any hairdressing needs. They stock L’Oreal and Paul Mitchell products. The team are a friendly 365 salon offering a wide range of services and late-night appointments.']}
                briefTextArr={[
                    'The salon had exchanged hands with a new owner, and they approached us to develop a website that they could use to showcase their products, services and staff. Previously the salon had a very old un-useable site that was hard to navigate. A new booking system and clean aesthetic was created using the existing logo to bring the salon up to a more contemporary feel.',
                    'We provided all of the back end creation, giving the team easy access to update price lists and staff profiles as needed.',
                    'A new style kit was established to ensure brand consistency across all of the salons platforms. '
                ]}
                scopeNameArr={['WS','MM']}
            />
            <RectangleImgDisplay imgSrc={ProfilePageImg}/>
            <RectangleImgDisplay imgSrc={LogoFullWidthImg}/>
            
            <TwoImgsInRow img1Src={SquareImg1} img2Src={SquareImg2}/>
            <FourImgsInRow img1Src={Img1} img2Src={Img2} img3Src={Img3} img4Src={Img4}/>
         
        </CasePageLayout>
    
    )
}

export default Salon
