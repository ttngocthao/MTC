import React from 'react'
import styled from 'styled-components'
import Layout from '../Layout'
import Hero from '../hero/Hero'
import Contact from '../contact/Contact'
export const IntroWrap = styled.div`
    display:flex;
    flex-direction: column;
    width:100%;
    max-width: 1120px;
    margin: 0 auto;
    @media only screen and (min-width: 1024px){
         flex-direction: row;
         justify-content: space-between;
                
    }
`
export const LeftCol = styled.div`
    padding-right:0;
    width: 100%;
    max-width: 869px;
    padding-bottom: 2rem;
    @media only screen and (min-width: 1024px){
        padding-right: 2rem;
         padding-bottom: 0rem;
        /* width: 70%; */
                
    }
`
export const RightCol = styled.div`
    width: 100%;

    @media only screen and (min-width: 1024px){
       max-width: 166px;
        /* width: 30%; */
                
    }
`
const CasePageLayout = ({children,caseName,heroImg,caseDescription,caseNameArr}) => {
    // useEffect(()=>{
    //     if(window){
    //         window.scrollTo(0,0);
    //     }
    // })
    return (       
        <Layout title={caseName} caseStudy={true}>
            <title>{caseName}</title>
            <Hero pageTitle={caseName} heroSrc={heroImg} caseStudy={true} caseDescription={caseDescription} caseNameArr={caseNameArr}/>
            {children}
            <Contact/>
        </Layout>
    )
}

export default CasePageLayout
