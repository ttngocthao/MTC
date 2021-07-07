import Layout from '../components/Layout';
import 'semantic-ui-css/semantic.min.css';
/** @jsx jsx */
import { jsx } from 'theme-ui'

import Contact  from '../components/contact/Contact';
import Hero from '../components/hero/Hero';
import PageIntro from '../components/pageIntro/PageIntro';

import HeroImg from '../images/hero/fullHomeHero.png';

// markup
const WorkingHomePage = () => {
  // const { theme } = useThemeUI();
  // console.log('theme', theme)
  return (
    <Layout>

      <title>About Page</title>

      <Hero pageTitle='about' heroSrc={HeroImg}/>
      <PageIntro>
          <h2>Who we are</h2>
          <p> Ipsum pariatur ex esse consectetur Lorem do nulla anim. Et voluptate eu magna deserunt consectetur non proident ad veniam consectetur minim laboris proident. Voluptate aute qui eu tempor minim Lorem aute. Occaecat ex consectetur et enim reprehenderit officia dolor amet. Labore eu nulla aliqua fugiat incididunt ut sint exercitation.</p>
      </PageIntro>
    

      <Contact/>

    </Layout>
  )
}

export default WorkingHomePage
