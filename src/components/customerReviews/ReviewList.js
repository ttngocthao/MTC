import React from 'react'
import styled from 'styled-components'
import ReviewItem from './ReviewItem'
import Logo1Img from '../../images/reviews/logo1.png'
import Logo2Img from '../../images/reviews/logo2.png'
import Logo3Img from '../../images/reviews/logo3.png'

const StyledContainer = styled.div`
    background-color: #222;
`
export const StyledListWrap = styled.div`
    max-width:1376px;
    margin:0 auto;
    padding:3rem 1rem;
    display:block;
    width:100%;
    @media only screen and (min-width: 920px){
       display: flex;
       /* flex-wrap: wrap; */
       align-items: center;
       justify-content: space-between;
      
    }
    /* @media only screen and (min-width:1300px){
         padding-left:0;
       padding-right:0;
    } */
`
const reviewData =[
    {
        name:'Simon Cousins',
        brand:'Above & Beyond Gardens',
        logo:Logo1Img,
        msg:'“So happy with the service and help with my company logo and branding. The team at Mighty Cultured created the perfect design for me and was very helpful through the process. Will be using again in the future and would highly recommend!!!”'
    },
     {
        name:'Kloe Dean',
        brand:'KloeD-1',
         logo:Logo2Img,
        msg:'“Outstanding service. The logo and graphics created for my business captured my brand exactly as I wished. In turn I have had an uptake of clients 2 fold to my previous intake. The process was stress free and efficient. I’m so happy with the design, communication throughout and overall service. Thank you so much!!”'
    },
     {
        name:'Dave Moczulski',
        brand:'Woofy',
        logo:Logo3Img,
        msg:'“I found Mighty Cultured by seeing some of their work online with various brands I follow. I needed logos for 2 products and inquired. The professionalism and attention to detail is top notch. They were able to put the ideas in my head into a brilliant logo, even for an industry they know nothing about. I will continue to work with them for all future projects”.'
    }
]
const ReviewList = () => {
    return (
        <StyledContainer>
            <StyledListWrap>
                {reviewData.map(({name,brand,msg,logo},index)=><ReviewItem key={index} name={name} brand={brand} msg={msg} logo={logo}/>)}
            </StyledListWrap>          
        </StyledContainer>
    )
}

export default ReviewList
