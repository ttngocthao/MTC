import React,{useEffect} from 'react'
import Seo from './Seo'
import styled from 'styled-components'
import Footer from './footer/Footer'
import Header from './header/Header'

const LayoutWrap = styled.section`
    max-width: 1920px;
    margin: 0 auto;
`


const Layout = ({ title,caseStudy,children }) => {
    useEffect(()=>{
        if(window){
            window.scrollTo(0,0);
        }
    })
    return (
        <LayoutWrap>
            <Seo title={title}/>
            <Header caseStudy={caseStudy}/>
            <main>
                {children}
            </main>
            <Footer />
        </LayoutWrap>
    )
}

export default Layout
