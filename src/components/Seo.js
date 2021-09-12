import React from 'react'
import { Helmet } from 'react-helmet'
import LogoM from '../images/LogoM.png'
const Seo = ({title}) => {
    return (
        <Helmet>
            
            <title>Mighty Cultured{title ? ` - ${title}` : ''}</title>
            <link rel='icon' type="image/icon" href={LogoM} />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Barlow:wght@400;600;900&display=swap" rel="stylesheet" />
             <html lang="en" amp />
            <meta name="description" content="Mighty cultured is a branding and creative studio working with businesses that enjoy the benefits of change, that out-think the competition and see the potential in strong brand presence." />
    
        </Helmet>
    )
}

export default Seo
