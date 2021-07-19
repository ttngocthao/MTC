import React from 'react'
import Seo from './Seo'
import styled from 'styled-components'
import Footer from './footer/Footer'
import Header from './header/Header'

const LayoutWrap = styled.section`
    max-width: 1920px;
    margin: 0 auto;
`


const Layout = ({ title,children }) => {
    return (
        <LayoutWrap>
            <Seo title={title}/>
            <Header/>
            <main>
                {children}
            </main>
            <Footer />
        </LayoutWrap>
    )
}

export default Layout
