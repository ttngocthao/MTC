import React from 'react'
import styled from 'styled-components'
import {StyledName} from '../ourPeople/PersonItem'
import {StyledListWrap} from '../customerReviews/ReviewList'
import ServiceItem from './ServiceItem'
import BrandingIcon from '../../images/services/branding.png'
import DigitalIcon from '../../images/services/digital.png'
import IllustrationIcon from '../../images/services/illustration.png'
import ApparelIcon from '../../images/services/apparel.png'
import MotionIcon from '../../images/services/motion.png'
import ProductIcon from '../../images/services/product.png'

const StyledContainer = styled.div`
    background-color: #fff;
`
const StyledServicesList = styled(StyledListWrap)`
    padding-bottom: 0;
    padding-top:0;
`


const servicesData =[
    {   orderInList:1,
        icon:BrandingIcon,
        title:'branding',
        description:'Branding is constructed from multiple business assets. It isn’t just one thing, it’s your logo, your tone of voice, the impression you leave on people once your ad has gone. Creating branding kits is what we do best.'
    },
     {  orderInList:2,
        icon:DigitalIcon,
        title:'digital',
        description:'The digital world is ever growing and now-a-days, everyone and their dog has a website. But successful businesses have well thought-out, fully customised digital platforms. This means allowing the online version of your business work as well as you do.'
    },
     {  orderInList:3,
        icon:IllustrationIcon,
        title:'illustration',
        description:'Illustration is a an art that carries itself through decade after decade. From product graphics, icons and children books, illustration can be an easy way to express your business message. And better still, these illustrations can be used in animated promos.'
    },
     {  orderInList:4,
        icon:MotionIcon,
        title:'motion',
        description:'Animation is one of the main key areas to include in any marketing plan. Used in presentations, social media channels and TV spots,  they easily help sell your idea. From 3 seconds, to a minute (or longer) they continue to prove time after time that us humans love moving objects.'
    },
     {  orderInList:5,
        icon:ApparelIcon,
        title:'apparel',
        description:"If your’e starting a clothing company one main feature that sets you apart from the rest are the graphics. From chest prints, sleeve prints, badges and back prints, we’ve done it all. Apparel is also a great way to further expand your current business, offering merchandise for your consumer. "
    },
     {  orderInList:6,
        icon:ProductIcon,
        title:'product',
        description:'Tangible products are never going away. We love to see physical, unique items here at the Mighty head quarters. A product can easily be brought on the packaging alone. Customised boxes, sleeves and labels are what helps drive the consumer to your business and coming back for more.'
    }
]

const OurServices = () => {
    return (
        <StyledContainer>
            <StyledListWrap style={{display:'block'}}>
                <StyledName style={{marginBottom:'1.5rem'}}>OUR SERVICES</StyledName>
                <div>
                   <p>Whether you’re looking for new product graphics, a full brand overhaul or animated promo vids, Mighty Cultured has you covered.</p>
                    <p>Our team not only consists of our Directors, but we harness the power of some really talented people, from developers, to animators, illustrators and designers. We work with the best individuals we know, meaning we ensure that the level of service and creative output we provide is  suited to help your business grow.</p>  
                    <p>Our business model is setup to work collaboratively with our clients, listening and learning from the individual business needs. We will ensure during our time together that we provide the correct pathways needed to meet your end goal, Below are our key main areas of service.</p>
                </div>               
            </StyledListWrap>
            <StyledServicesList>
                {servicesData.filter(item=>item.orderInList<4).map((item,index)=> <ServiceItem key={index} icon={item.icon} title={item.title} description={item.description}/>)}
            </StyledServicesList>
           
           <StyledServicesList style={{marginBottom:'3rem'}}>
                {servicesData.filter(item=>item.orderInList>=4).map((item,index)=> <ServiceItem key={index} icon={item.icon} title={item.title} description={item.description}/>)}
            </StyledServicesList>
        </StyledContainer>
    )
}

export default OurServices
