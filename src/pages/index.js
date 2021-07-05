import Layout from '../components/Layout';
import 'semantic-ui-css/semantic.min.css';
/** @jsx jsx */
import { jsx, useThemeUI } from 'theme-ui'
import CaseStudyList from '../components/cases/CaseStudyList';
import Contact  from '../components/contact/Contact';


// markup
const IndexPage = () => {
  const { theme } = useThemeUI();
  // console.log('theme', theme)
  return (
    <Layout>

      <title>Home Page</title>

      <h1 sx={theme.styles.h1}>Home Page</h1>
      <CaseStudyList />

      <Contact/>

    </Layout>
  )
}

export default IndexPage
