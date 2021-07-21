import Layout from '../components/Layout';
import 'semantic-ui-css/semantic.min.css';
/** @jsx jsx */
import { jsx } from 'theme-ui'
import styled from 'styled-components'
import Contact  from '../components/contact/Contact';
import Hero from '../components/hero/Hero';
import PageIntro from '../components/pageIntro/PageIntro';

import HeroImg from '../images/hero/fullHomeHero.png';
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
const WorkingHomePage = () => {
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
              Et amet labore sit ut consequat qui sit eiusmod dolor.
            </StyledSubTitle>
            </div>
            <div className='rightCol'>
               <p> Ipsum pariatur ex esse consectetur Lorem do nulla anim. Et voluptate eu magna deserunt consectetur non proident ad veniam consectetur minim laboris proident. Voluptate aute qui eu tempor minim Lorem aute. Occaecat ex consectetur et enim reprehenderit officia dolor amet. Labore eu nulla aliqua fugiat incididunt ut sint exercitation.</p>
               <p>Reprehenderit dolor anim voluptate minim officia. Est labore pariatur ex aute sint quis id amet consequat adipisicing. Laboris incididunt aliqua aute laborum. Tempor magna et veniam laborum magna ullamco incididunt laborum qui anim Lorem dolor. Sunt est incididunt velit anim ad qui labore. Voluptate cupidatat est dolore amet occaecat qui eiusmod incididunt.</p>
            </div>
           
          </StyledParagraph>         
      </PageIntro>
      <Hero heroSrc={About1Img} noTopLayout={true} minHeight='470'/>
      <PageIntro>
        <StyledParagraph>
          <PersonItem name='mike spiers' jobTitle='Creative Director' avatarUrl={MikeAvatar}>
            <p>Qui id anim duis ut excepteur dolore nostrud. Id officia id ad labore id dolor ea quis aliquip aliqua nulla reprehenderit in nulla. Incididunt ad consequat velit cupidatat ullamco incididunt aute veniam enim voluptate irure. Irure exercitation voluptate exercitation minim veniam. Incididunt eu ea proident et officia nisi qui Lorem et sint velit incididunt id. Quis ad fugiat do non quis. Aliqua enim sint excepteur quis esse non fugiat ad tempor aute aute consequat proident.</p>
            <p>Quis magna et ut sunt. Et fugiat in in adipisicing aute do elit labore irure. Dolore do laboris pariatur nulla occaecat. Fugiat adipisicing mollit commodo Lorem proident minim consectetur veniam. Dolore culpa irure aliquip magna proident ex laboris. Sit anim veniam cillum eu.</p>
          </PersonItem>
          <PersonItem name='SANCHO DEAN'  jobTitle='Creative Director' avatarUrl={SanchoAvatar}>
            <p>Lorem consequat aliquip qui irure nulla minim sit mollit sint adipisicing adipisicing veniam aute. Consectetur irure adipisicing cillum aliqua veniam deserunt occaecat incididunt deserunt. Ut in adipisicing aliqua ipsum quis proident incididunt esse nostrud ad. Lorem commodo aute Lorem anim nisi.</p>
            <p>Id elit nostrud ipsum dolor cupidatat commodo dolor. Lorem ullamco ex exercitation pariatur quis eiusmod aliquip est fugiat est consequat veniam. Fugiat labore aute ex et exercitation voluptate. Do in laboris ipsum elit adipisicing eu dolore veniam in commodo. Velit consectetur elit eiusmod exercitation nulla labore officia irure tempor sint tempor mollit quis. Aliquip nisi pariatur veniam proident proident et.</p>
          </PersonItem>
        </StyledParagraph>       
      </PageIntro>
      <ReviewList/>
      <OurServices/>
      <Contact/>

    </Layout>
  )
}

export default WorkingHomePage
