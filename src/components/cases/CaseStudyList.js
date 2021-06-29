import React from 'react'
import CaseItem from './CaseItem'
import Case1Img from '../../images/cases/case1.png';
import Case2Img from '../../images/cases/case2.png';
import Case3Img from '../../images/cases/case3.png';
import Case4Img from '../../images/cases/case4.png';
import Case5Img from '../../images/cases/case5.png';
import Case6Img from '../../images/cases/case6.png';
import Case7Img from '../../images/cases/case7.png';
import Case8Img from '../../images/cases/case8.png';
import styled from 'styled-components';

const caseStudyData = [
    {
        title: 'Case 1',
        description: 'TITLE 1 GOES HERE TO DESCRIBE BUSINESS',
        bkgImg: Case1Img,
        pageUrl: '#',
        orderInList: 0
    },
    {
        title: 'Case 2',
        description: 'TITLE 2 GOES HERE TO DESCRIBE BUSINESS',
        bkgImg: Case2Img,
        pageUrl: '#',
        orderInList: 1
    },
    {
        title: 'Case 3',
        description: 'TITLE 3 GOES HERE TO DESCRIBE BUSINESS',
        bkgImg: Case3Img,
        pageUrl: '#',
        orderInList: 2
    },
    {
        title: 'Case 4',
        description: 'TITLE 4 GOES HERE TO DESCRIBE BUSINESS',
        bkgImg: Case4Img,
        pageUrl: '#',
        orderInList: 3
    },
    {
        title: 'Case 5',
        description: 'TITLE 5 GOES HERE TO DESCRIBE BUSINESS',
        bkgImg: Case5Img,
        pageUrl: '#',
        orderInList: 4
    },
    {
        title: 'Case 6',
        description: 'TITLE 6 GOES HERE TO DESCRIBE BUSINESS',
        bkgImg: Case6Img,
        pageUrl: '#',
        orderInList: 5
    },
    {
        title: 'Case 7',
        description: 'TITLE 7 GOES HERE TO DESCRIBE BUSINESS',
        bkgImg: Case7Img,
        pageUrl: '#',
        orderInList: 6
    },
    {
        title: 'Case 8',
        description: 'TITLE 8 GOES HERE TO DESCRIBE BUSINESS',
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
    @media only screen and (min-width: 768px){
        flex-direction: row;
        flex-wrap: wrap;
        max-width: 1200px;
        
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
