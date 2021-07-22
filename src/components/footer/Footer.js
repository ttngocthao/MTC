import React from 'react'
import styled from 'styled-components'
import FaceBookIcon from '../../images/facebook_footer.svg'
import InstagramIcon from '../../images/instagram_footer.svg'
import LinkedInIcon from '../../images/linkedIn_footer.svg'
const socialMediaData = [
    {
        iconImg: LinkedInIcon,
        linkUrl: '#',
        orderInList: 1
    },
    {
        iconImg: InstagramIcon,
        linkUrl: 'https://www.instagram.com/mightyculturedltd/',
        orderInList: 2
    },
    {
        iconImg: FaceBookIcon,
        linkUrl: 'https://www.facebook.com/Mighty-Cultured-426372721081128',
        orderInList: 3
    }
]

const Wrap = styled.footer`
    background-color: #f43908; 
   
`

const StyledFooter = styled.div`
    /* max-width:1640px; */
    margin:0 auto;
    color: #222;
    text-align: right; 
    padding:2rem 1rem;
    @media only screen and (min-width: 700px){
       
         padding:2rem 7.3%;
       
       
         
     }
   
`
const SocialMediaItem = styled.a`
    display: inline-block;
    margin-left:.5rem;
    box-sizing: border-box;
`
const Footer = () => {

    return (
        <Wrap>
            <StyledFooter>
            {socialMediaData.map((item, index) => <SocialMediaItem key={index} target='_blank' href={item.linkUrl}>
                <img src={item.iconImg} style={{ width: '1.5rem' }} alt='' />
            </SocialMediaItem>)}
        </StyledFooter>
        </Wrap>
        
    )
}

export default Footer
