import React from 'react'
import { Helmet } from 'react-helmet'
import LogoM from '../images/LogoM.png'
const Seo = () => {
    return (
        <Helmet>
            <title>Mighty Cultured</title>
            <link rel='icon' type="image/icon" href={LogoM} />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Barlow:wght@400;600;900&display=swap" rel="stylesheet" />
            {/* <link
                async
                rel="stylesheet"
                href="//cdn.jsdelivr.net/npm/semantic-ui@${props.versions.sui}/dist/semantic.min.css"
            /> */}
        </Helmet>
    )
}

export default Seo
