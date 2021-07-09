import React from 'react'
import Seo from './Seo'
import styled from 'styled-components'
import Footer from './footer/Footer'

const LayoutWrap = styled.section`
    max-width: 1920px;
    margin: 0 auto;
`

const Layout = ({ children }) => {
    return (
        <LayoutWrap>
            <Seo />
            <header>this is header</header>
            <main>
                {children}
            </main>
            <Footer />
        </LayoutWrap>
    )
}

export default Layout
