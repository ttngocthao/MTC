import Layout from '../components/Layout';
import 'semantic-ui-css/semantic.min.css';
/** @jsx jsx */
import { jsx } from 'theme-ui'
import CaseStudyList from '../components/cases/CaseStudyList';
import Contact  from '../components/contact/Contact';
import styled from 'styled-components';
import PageIntro from '../components/pageIntro/PageIntro';


import HomePageHero from '../components/hero/HomePageHero';
const HomePageIntro = styled.div`
 padding:2rem;
  @media only screen and (min-width: 1024px){
        padding-left: 0;
        padding-right: 0;
        display: flex;
       margin:0 20.78%;
        
    }

`

const RightCol = styled.div`
  padding-left: 0;
  @media only screen and (min-width: 1024px){
        padding-left: 2rem;
       
        
    }
`

const LeftCol = styled.div`
  padding-bottom: 2rem;
  h3{
    font-size:16px;
    line-height: 1.5;
  }
  @media only screen and (min-width: 1024px){
        padding-bottom: 0;
       
        
    }
`

// markup
const HomePage = () => {
  
  
  return (
    <Layout title={'Home'}>

      <title>Home Page</title>

      {/* <Hero noTopLayout={true} pageTitle='home' heroSrc={HeroImg}/> */}
      <HomePageHero/>
      <HomePageIntro>
        <LeftCol>
           <h3> How does my brand define itself from the competition? Can we build consistency across our assets? Is there a way we can take our brand culture to the next level?</h3>
        </LeftCol>
        <RightCol>
        <p>It’s questions like this that the team at Mighty Cultured love to solve. We collaborate with each of our clients to ensure individual requirements are met, offering longevity for each project we work on. We believe brand builds culture, we believe it forms unity and creates impact, and that’s what we want to continue for you.</p>
        <p>
        We are a design studio working with businesses that enjoy the benefits of change, that out-think the competition and see the potential in strong brand presence.</p>
        </RightCol>
      </HomePageIntro>
     
      <CaseStudyList id='caseStudy'/>

      <Contact/>

    </Layout>
  )
}

export default HomePage
