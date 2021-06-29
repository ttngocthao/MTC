import Logo from '../images/LogoCore.svg'
import LogoM from '../images/LogoM.png'
import { Helmet } from 'react-helmet'
import { StyledTealButton } from '../components/myStyledComponents/Button'
/** @jsx jsx */
import { jsx, Box, useThemeUI } from 'theme-ui'




// markup
const IndexPage = () => {
    const { theme } = useThemeUI();
    console.log('theme', theme)
    return (
        <main>
            <Helmet>
                <title>Mighty Cultured</title>
                <link rel='icon' type="image/icon" href={LogoM} />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Barlow:wght@400;600;900&display=swap" rel="stylesheet" />
            </Helmet>
            <title>Home Page</title>
            <h1 sx={theme.styles.h1}>Home Page</h1>
            <figure style={{ width: '200px' }}>
                <img
                    alt="Gatsby G Logo"
                    src={Logo}
                />
            </figure>

            <StyledTealButton onClick={() => alert('hello')}>This button should be teal</StyledTealButton>
            <p sx={{ backgroundColor: "secondary", color: 'third' }} style={{ fontFamily: 'Barlow' }}>This should be red</p>
            <Box bg='primary' p={4} color='secondary'>This is the box</Box>
        </main>
    )
}

export default IndexPage
