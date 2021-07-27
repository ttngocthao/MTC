import Layout from '../components/Layout';
import 'semantic-ui-css/semantic.min.css';
/** @jsx jsx */
import { jsx } from 'theme-ui'
import CaseStudyList from '../components/cases/CaseStudyList';
import Contact  from '../components/contact/Contact';
import Hero from '../components/hero/Hero';
import PageIntro from '../components/pageIntro/PageIntro';

import HeroImg from '../images/hero/fullHomeHero.png';

// markup
const WorkingHomePage = () => {
  // const { theme } = useThemeUI();
  // console.log('theme', theme)
  return (
    <Layout title={'Home'}>

      <title>Home Page</title>

      <Hero pageTitle='home' heroSrc={HeroImg}/>
      <PageIntro>
        <p> How does my brand define itself from the competition? Can we build consistency across our assets? Is there a way we can take our brand culture to the next level? It’s questions like this that the team at Mighty Cultured love to solve. We collaborate with each of our clients to ensure individual requirements are met, offering longevity for each project we work on. We believe brand builds culture, we believe it forms unity and creates impact, and that’s what we want to continue for you.</p>
        <p>
        We are a design studio working with businesses that enjoy the benefits of change, that out-think the competition and see the potential in strong brand presence.</p>
      </PageIntro>
      <CaseStudyList />

      <Contact/>

    </Layout>
  )
}

export default WorkingHomePage
