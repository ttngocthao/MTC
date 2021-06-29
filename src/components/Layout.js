import React from 'react'
import Seo from './Seo'
const Layout = ({ children }) => {
    return (
        <section>
            <Seo />
            <header>this is header</header>
            <main>
                {children}
            </main>
            <footer>this is footer</footer>
        </section>
    )
}

export default Layout
