import Layout from '../components/Layout';
/** @jsx jsx */
import { jsx, useThemeUI } from 'theme-ui'
import CaseStudyList from '../components/cases/CaseStudyList';
import ContactForm  from '../components/contactForm/ContactForm';


// markup
const IndexPage = () => {
  const { theme } = useThemeUI();
  // console.log('theme', theme)
  return (
    <Layout>

      <title>Home Page</title>

      <h1 sx={theme.styles.h1}>Home Page</h1>
      <CaseStudyList />

      <ContactForm/>

    </Layout>
  )
}

export default IndexPage
