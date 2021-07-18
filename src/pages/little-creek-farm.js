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



const LittleCreekFarm = () => {
    return (
        <CasePageLayout 
            heroImg={HeroImg} 
            caseName='Little Creek Farm' 
            caseNameArr={['Little','Creek Farm']} 
            caseDescription='Designing your outdoor space to fit your aesthetic and lifestyle.'>
            
            <CaseIntro
                companyTextArr={['Incididunt deserunt commodo ea culpa enim velit eiusmod tempor enim eiusmod dolor. Irure veniam ex non eu qui laborum enim esse aliqua ipsum. Aliqua labore anim ex quis proident qui duis eiusmod non. Duis ea consequat commodo deserunt consectetur elit occaecat Lorem ipsum eu nisi cupidatat laboris. Fugiat amet nisi non labore in labore nisi velit. Sunt ea non laboris sit exercitation mollit amet aliquip tempor.']}
                briefTextArr={[
                    'Consequat irure culpa sunt id. Cupidatat labore officia sit ad nisi magna adipisicing amet adipisicing deserunt Lorem id eu laboris. Amet duis aliqua ad proident ea dolore voluptate Lorem. Esse fugiat irure commodo dolore esse aliqua ut qui dolore ea officia. Eu duis aliqua non voluptate exercitation consequat velit amet duis mollit incididunt non reprehenderit dolore. Occaecat dolore dolore enim aute ipsum commodo ea. Ea irure fugiat sit do labore velit laboris incididunt cillum.',
                    'Esse tempor laboris sint adipisicing est aliquip commodo reprehenderit ad. Enim officia ad anim quis. Adipisicing officia labore laborum reprehenderit ex excepteur fugiat eiusmod minim.'
                ]}
                scopeNameArr={['BI','BS','MM']}
            />
               
            <RectangleImgDisplay imgSrc={LogoFullWidthImg}/>
            <RectangleImgDisplay imgSrc={LittleCreekFarmImg}/>
            <TwoImgsInRow img1Src={EggBoxImg} img2Src={OpenedEggBoxImg}/>
            <FourImgsInRow img1Src={Img1} img2Src={Img2} img3Src={Img3} img4Src={Img4}/>
        </CasePageLayout>
    )
}

export default LittleCreekFarm
