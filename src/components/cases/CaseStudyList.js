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
import styled from 'styled-components';

const caseStudyData = [
    {   
        title: 'Above & Beyond Garden',
        description: 'above & beyond garden',
        bkgImg: Case1Img,
        pageUrl: '/above-&-beyond-garden',
        orderInList: 0,
    },
    {
        title: 'Griffin Painting Services',
        description: 'Griffin Painting Services',
        bkgImg: Case2Img,
        pageUrl: '/griffin-painting-services',
        orderInList: 1
    },
    {
        title: 'Little Creek Farm',
        description: 'Little Creek Farm',
        bkgImg: Case4Img,
        pageUrl: '/little-creek-farm',
        orderInList: 2
    },
     {
        title: "Louie's Place",
        description: "Louie's Place",
        bkgImg: Case3Img,
        pageUrl: '/louies-place',
        orderInList: 3
    },
    {
        title: 'Kaiju Curry House',
        description: 'Kaiju Curry House',
        bkgImg: Case5Img,
        pageUrl: '/kaiju-curry-house',
        orderInList: 4
    },
    {
        title: 'Itchy & Sketchy',
        description: 'Itchy & Sketchy',
        bkgImg: Case6Img,
        pageUrl: '/itchy-&-sketchy',
        orderInList: 5
    },
    {
        title: 'Lemon Smart Business Card',
        description: 'Lemon Smart Business Card',
        bkgImg: Case7Img,
        pageUrl: '/lemon-smart-business-card',
        orderInList: 6
    },
    {
        title: 'Salon 55',
        description: 'Salon 55',
        bkgImg: Case8Img,
        pageUrl: '#',
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
const CaseStudyList = () => {
    return (
        <UlList>
            {caseStudyData.map(item =>
                <CaseItem
                    key={item.title}
                    title={item.title}
                    description={item.description}
                    bkgImg={item.bkgImg}
                    pageUrl={item.pageUrl}
                    orderInList={item.orderInList}
                />)}
        </UlList>
    )
}

export default CaseStudyList
