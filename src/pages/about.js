import Layout from '../components/Layout';
import 'semantic-ui-css/semantic.min.css';
/** @jsx jsx */
import { jsx } from 'theme-ui'
import styled from 'styled-components'
import Contact  from '../components/contact/Contact';
import Hero from '../components/hero/Hero';
import PageIntro from '../components/pageIntro/PageIntro';

import HeroImg from '../images/hero/fullAboutHero.png';
import About1Img from '../images/about1.png';
import {StyledTitle} from '../components/contact/Contact';

import PersonItem from '../components/ourPeople/PersonItem';
import ReviewList from '../components/customerReviews/ReviewList';
import OurServices from '../components/ourServices/OurServices';
import MikeAvatar from '../images/mike.png';
import SanchoAvatar from '../images/sancho.png';
// markup

const StyledParagraph = styled.div`
  max-width:1120px;
  margin:0 auto;
  display:flex;
  flex-direction:column;
  width:100%;
   @media only screen and (min-width: 741px){
     flex-direction: row;
     justify-content: space-between;
   }
   .leftCol{
     padding-bottom: 1rem;
     max-width:1120px;
     width:100%;
     /* @media only screen and (min-width: 700px){
       max-width:340px;
     } */
   }
   .rightCol {
     max-width:1120px;
     width:100%;
     /* @media only screen and (min-width: 741px){
       max-width:340px;
     } */
     p{
       margin-bottom:1rem;
     }
   }
`
const StyledSubTitle = styled.h3`
        max-width: 1120px;
        margin:  0;
        color:#f43908;
        font-size:1.2rem;
        font-weight: 600;
         @media only screen and (min-width: 700px){
           max-width: 400px;
           font-size:2.15rem;
         }
`
const About = () => {
  // const { theme } = useThemeUI();
  // console.log('theme', theme)
  return (
    <Layout title={'About'}>

      <title>About Page</title>

      <Hero pageTitle='about' heroSrc={HeroImg}/>
      <PageIntro>
          <StyledParagraph> 
            <div  className='leftCol'>
               <StyledTitle style={{color:'black',maxWidth:'540px'}}>
            Who are we?
            </StyledTitle>
            <StyledSubTitle>
              We solve business problems together one project at a time
            </StyledSubTitle>
            </div>
            <div className='rightCol'>
                <p>Purposeful, well thought-out design creates longevity and wins the hearts of the consumer.</p>
                <p>
                We are Mighty Cultured, a UK based design studio that applies the above statement to every project we work on. We believe that design is more than just placing objects and text together on a page and hoping for a nice outcome. The project itself needs to have a well thought-out end use in mind. How will someone interact with a restaurant website, what is the key information needed from an infographic and how does that product make you feel? These sorts of questions are just as important as the design itself.
                </p>
                <p>
                We are a team of experienced creatives with multiple skills within the industry, allowing us to offer the best fit for your needs.  </p>
             
            </div>
           
          </StyledParagraph>         
      </PageIntro>
      <Hero heroSrc={About1Img} noTopLayout={true} minHeight='470'/>
      <PageIntro>
        <StyledParagraph>
          <PersonItem name='mike spiers' jobTitle={'Co-founder & Creative Director'} avatarUrl={MikeAvatar}>
            <p>Mike is one half of the creative duo that heads up our leadership team here at Mighty Cultured.</p>
            <p>Mike started his design career in the signage industry producing layouts and logo design for small to medium businesses. From there his career grew, building on his skills as a designer working in the advertising, product and marketing industries.</p>
            <p>He’s also a really keen illustrator, bringing a unique stylised visual to the business. His work has been showcased at pop cultured art galleries, and sold at huge conventions both here in the UK and overseas in Australia where he worked and lived for 8 years.</p>
            <p>He has an eagle eye for the small details, suffering from the “can this move one click to the left” syndrome.</p> 
          </PersonItem>
          <PersonItem name='SANCHO DEAN'  jobTitle={'Co-founder & Technical Director'} avatarUrl={SanchoAvatar}>
            <p>Sancho makes up the other half of our leadership team as Technical Director.</p>
            <p>With a love for computers and all things creative from a young age, Sancho started his career in the licensing industry at 18 as a fashion and print designer. He then spent the next 8 years working closely with powerhouses such as Disney and Universal, in order to get their official branded products to the masses.</p>
            <p>Sancho has also had the pleasure of working with many businesses and individuals on a freelance basis. These projects included a wide range of creative tasks such as brochure and poster design, book production, motion graphics and beyond. All of which helping towards his goal of mastering every piece of software featured in the Adobe Creative suite.</p>
            <p>His slightly more practical approach compliments Mike’s uber creativity, helping Mighty Cultured to become the company it is today.</p>
          </PersonItem>
        </StyledParagraph>       
      </PageIntro>
      <ReviewList/>
      <OurServices/>
      <Contact/>

    </Layout>
  )
}

export default About
