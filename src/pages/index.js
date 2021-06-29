import Layout from '../components/Layout';
/** @jsx jsx */
import { jsx, Box, useThemeUI } from 'theme-ui'




// markup
const IndexPage = () => {
  const { theme } = useThemeUI();
  console.log('theme', theme)
  return (
    <Layout>

      <title>Home Page</title>

      <h1 sx={theme.styles.h1}>Home Page</h1>



    </Layout>
  )
}

export default IndexPage
