import React,{useEffect} from 'react'
import 'semantic-ui-css/semantic.min.css';
import LogoCoreImg from '../images/LogoCore.svg'
import ConstructionImg from '../images/construction.png'
import './temp.css'
import BeImg from '../images/beIcon.png'
import FImg from '../images/facebookIcon.png'
import IImg from '../images/instagramIcon.png'
// markup
const IndexPage = () => {
  useEffect(() => {
    if (typeof window === 'undefined' || !window.document) {
      return;
    }else{
      document.getElementsByTagName('html')[0].style.backgroundColor='#222';
      document.getElementsByTagName('body')[0].style.backgroundColor='#222';
    }
  }, []);
  
  return (
    <div className="constructionPage">
   
    <main>
      <figure className="logo">
        <img
          src={LogoCoreImg}
          alt="logo core"
        />
      </figure>
      <section className="mainContent">
        <section className="photo">
          <figure>
            <img alt='' src={ConstructionImg}/>
          </figure>
        </section>
        <section className="info">
          <h1 >WE’RE BUILDING SOMETHING GREAT</h1>
          <h3>Check back in<br/>
              on the 1st August 2021.
          </h3>
          <div className="p">If you’d like to see samples of any of our work in the meantime please head on over to our Behance page or hit the contact button to have a chat about your next project.</div>
        </section> 
      </section>
      <ul className="socialMedia">
        <li className="contactBtn"><a href="mailto:team@mightycultured.co.uk">contact</a></li>
        <li><a target="_blank" href="https://www.behance.net/mightycultured"><img alt='' src={BeImg}/></a></li>
        <li><a target="_blank" href="https://www.instagram.com/mightycultured/"><img alt='' src={IImg}/></a></li>
        <li><a target="_blank" href="https://www.facebook.com/Mighty-Cultured-426372721081128"><img alt='' src={FImg}/></a></li>
      </ul>  
    </main>
   
  </div>
  )
}

export default IndexPage
