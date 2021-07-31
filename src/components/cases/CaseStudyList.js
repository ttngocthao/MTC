import React from 'react'
import CaseItem from './CaseItem'
import Case1Img from '../../images/cases/Layer2.png';
import Case2Img from '../../images/cases/Layer3.png';
import Case3Img from '../../images/cases/Layer4.png';
import Case4Img from '../../images/cases/Layer5.png';
import Case5Img from '../../images/cases/Layer6.png';
import Case6Img from '../../images/cases/Layer7.png';
import Case7Img from '../../images/cases/Layer8.png';
import Case8Img from '../../images/cases/Layer9.png';
import MobileCase1Img from '../../images/cases/garden-sm.png';
import MobileCase2Img from '../../images/cases/griffin-sm.png';
import MobileCase3Img from '../../images/cases/egg-sm.png';
import MobileCase4Img from '../../images/cases/pet-sm.png';
import MobileCase5Img from '../../images/cases/curry-sm.png';
import MobileCase6Img from '../../images/cases/itchy-sm.png';
import MobileCase7Img from '../../images/cases/lemon-sm.png';
import MobileCase8Img from '../../images/cases/salon-sm.png';

import styled from 'styled-components';

export const caseStudyData = [
    {   
        title: 'Above & Beyond Garden',
        description: 'Increasing the beauty of your home',
        bkgImg: Case1Img,
        mobileImg:MobileCase1Img,
        pageUrl: '/above-&-beyond-garden',
        orderInList: 0,
    },
    {
        title: 'Griffin Painting Services',
        description: 'BRINGING THE BUSINESS INTO THE PRESENT',
        bkgImg: Case2Img,
        mobileImg:MobileCase2Img,
        pageUrl: '/griffin-painting-services',
        orderInList: 1
    },
    {
        title: 'Little Creek Farm',
        description: 'FARMED WITH LOVE',
        mobileImg:MobileCase3Img,
        bkgImg: Case4Img,
        pageUrl: '/little-creek-farm',
        orderInList: 2
    },
     {
        title: "Louie's Place",
        description: "A PLACE WHERE PETS CAN DREAM",
        mobileImg:MobileCase4Img,
        bkgImg: Case3Img,
        pageUrl: '/louies-place',
        orderInList: 3
    },
    {
        title: 'Kaiju Curry House',
        description: 'KAIJU RELATED DISCUSSION, AND A SIDE OF BANTER',
        bkgImg: Case5Img,
        mobileImg:MobileCase5Img,
        pageUrl: '/kaiju-curry-house',
        orderInList: 4
    },
    {
        title: 'Itchy & Sketchy',
        description: 'ONE OF A KIND CALLIGRAPHY GIFTS',
        bkgImg: Case6Img,
        mobileImg:MobileCase6Img,
        pageUrl: '/itchy-&-sketchy',
        orderInList: 5
    },
    {
        title: 'Lemon',
        description: 'SMART BUSINESS CARDS',
        bkgImg: Case7Img,
        mobileImg:MobileCase7Img,
        pageUrl: '/lemon-smart-business-card',
        orderInList: 6
    },
    {
        title: 'Salon 55',
        description: 'a L’Oreal Professional salon',
        bkgImg: Case8Img,
        mobileImg:MobileCase8Img,
        pageUrl: '/salon-55',
        orderInList: 7
    }

]
const UlList = styled.ul`
    margin:0 auto;
    padding: 0;
    display: flex;
    flex-direction: column;
    @media only screen and (min-width: 1024px){
        flex-direction: row;
        flex-wrap: wrap;
        max-width: 1920px;
        
    }
`
const CaseStudyList = ({id}) => {
    return (
        <UlList id={id}>
            {caseStudyData.map(item =>
                <CaseItem
                    key={item.title}
                    title={item.title}
                    description={item.description}
                    bkgImg={item.bkgImg}
                    pageUrl={item.pageUrl}
                    orderInList={item.orderInList}
                    mobileImg={item.mobileImg}
                />)}
        </UlList>
    )
}

export default CaseStudyList
