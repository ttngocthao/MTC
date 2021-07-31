import React from 'react'
import { IntroWrap,LeftCol,RightCol } from './CasePageLayout'
import PageIntro from '../pageIntro/PageIntro'
import Scope from './Scope'
import styled from 'styled-components'

const StyledParagraph = styled.div`
    margin-bottom: 2rem;
    line-height: 1.4;
    h3{
        margin-bottom: 0.5rem;
    }
    p{
        margin-bottom: 0.5rem;
    }
`

const CaseIntro = ({companyTextArr,briefTextArr,scopeNameArr}) => {
    return (
        <PageIntro>
            <IntroWrap>
                <LeftCol>
                    <StyledParagraph>
                        <h3 >THE COMPANY</h3>
                        {companyTextArr.map((p,index)=><p key={index}>{p}</p>)}
                    </StyledParagraph>
                    <StyledParagraph style={{marginBottom:0}}>
                        <h3>THE BRIEF</h3>
                        {briefTextArr.map((p,index)=><p key={index}>{p}</p>)}
                    </StyledParagraph>
                </LeftCol>
                <RightCol>
                    <Scope scopeNameArr={scopeNameArr}/>
                </RightCol>
            </IntroWrap>  
        </PageIntro>
        
    )
}

export default CaseIntro
