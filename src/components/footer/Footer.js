import React from 'react'
import styled from 'styled-components'
import FaceBookIcon from '../../images/footer/facebook.svg'
import InstagramIcon from '../../images/footer/instagram.svg'
import LinkedInIcon from '../../images/footer/linkedin.svg'
import TrustpilotIcon from '../../images/footer/trustpilot.svg'
import DribbleIcon from '../../images/footer/dribble.svg'
import BehanceIcon from '../../images/footer/behance.svg'
import TwitterIcon from '../../images/footer/twitter.svg'


const socialMediaData = [
    {
        iconImg: LinkedInIcon,
        linkUrl: 'https://www.linkedin.com/company/mighty-cultured/',
        orderInList: 2
    },
    {
        iconImg: InstagramIcon,
        linkUrl: 'https://www.instagram.com/mightyculturedltd/',
        orderInList: 5
    },
    {
        iconImg: FaceBookIcon,
        linkUrl: 'https://www.facebook.com/mightycultured',
        orderInList: 7
    },
    {
        iconImg:TrustpilotIcon,
        linkUrl:'https://uk.trustpilot.com/review/www.mightycultured.co.uk',
        orderInList:1
    },
    {
        iconImg:DribbleIcon,
        linkUrl:'https://dribbble.com/MightyCultured',
        orderInList:3
    },
    {
        iconImg:BehanceIcon,
        linkUrl:'https://www.behance.net/mightycultured',
        orderInList:4
    },
    {
        iconImg:TwitterIcon,
        linkUrl:'https://twitter.com/MightyCultured',
        orderInList:6
    }
]

const Wrap = styled.footer`
    background-color: #f43908; 
   
`

const StyledFooter = styled.div`
    /* max-width:1640px; */
    margin:0 auto;
    color: #222;
    display: block;
    padding:2rem;
    position: relative;
    @media only screen and (min-width: 700px){
        display: flex;
        justify-content: space-between;
        align-items: center;
         padding:2rem 7.3%;
       
       
         
     }
   
`
const SocialMediaItem = styled.a`
    display: inline-block;
    margin-left:.5rem;
    box-sizing: border-box;
    &:first-child{
        margin-left: 0;
    }
`
const CopyRight = styled.div`
    /* position: absolute;
    top:2rem;
    left:2rem; */
    padding:0rem 0 1rem;
     @media only screen and (min-width: 700px){         
        /* left: 7.3%; */
       
       
         
     }
`
const Footer = () => {
    const orderedList = socialMediaData.sort((a,b)=>{
        if(a.orderInList>b.orderInList) return 1
        if(a.orderInList<b.orderInList) return -1
        return 0
    })
    const currentYear = new Date().getFullYear();
  
    console.log('currentYear',currentYear)
    return (
        <Wrap>
            <StyledFooter>
            <CopyRight>© Mighty Cultured Ltd {currentYear}</CopyRight>
            <div>
            {orderedList.map((item, index) => <SocialMediaItem key={index} target='_blank' href={item.linkUrl}>
                <img src={item.iconImg} style={{ width: '1.5rem' }} alt='' />
            </SocialMediaItem>)}</div>
        </StyledFooter>
        </Wrap>
        
    )
}

export default Footer
