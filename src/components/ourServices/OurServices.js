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

const servicesData =[
    {
        icon:BrandingIcon,
        title:'branding',
        description:'Ex fugiat non magna veniam veniam pariatur culpa magna aute fugiat id proident. Sit quis cillum sit exercitation ut do qui in laboris esse. Occaecat duis pariatur non aliquip sint consectetur incididunt et ex magna cupidatat aliquip nostrud. Sint consequat commodo non incididunt minim adipisicing laborum Lorem sit fugiat aliqua eu. Minim minim deserunt in nisi officia velit deserunt ea ut duis nulla quis consectetur aliquip. Magna cillum esse cillum qui nulla pariatur dolor esse labore esse.'
    },
     {
        icon:DigitalIcon,
        title:'digital',
        description:'Ex fugiat non magna veniam veniam pariatur culpa magna aute fugiat id proident. Sit quis cillum sit exercitation ut do qui in laboris esse. Occaecat duis pariatur non aliquip sint consectetur incididunt et ex magna cupidatat aliquip nostrud. Sint consequat commodo non incididunt minim adipisicing laborum Lorem sit fugiat aliqua eu. Minim minim deserunt in nisi officia velit deserunt ea ut duis nulla quis consectetur aliquip. Magna cillum esse cillum qui nulla pariatur dolor esse labore esse.'
    },
     {
        icon:IllustrationIcon,
        title:'illustration',
        description:'Ex fugiat non magna veniam veniam pariatur culpa magna aute fugiat id proident. Sit quis cillum sit exercitation ut do qui in laboris esse. Occaecat duis pariatur non aliquip sint consectetur incididunt et ex magna cupidatat aliquip nostrud. Sint consequat commodo non incididunt minim adipisicing laborum Lorem sit fugiat aliqua eu. Minim minim deserunt in nisi officia velit deserunt ea ut duis nulla quis consectetur aliquip. Magna cillum esse cillum qui nulla pariatur dolor esse labore esse.'
    },
     {
        icon:MotionIcon,
        title:'motion',
        description:'Ex fugiat non magna veniam veniam pariatur culpa magna aute fugiat id proident. Sit quis cillum sit exercitation ut do qui in laboris esse. Occaecat duis pariatur non aliquip sint consectetur incididunt et ex magna cupidatat aliquip nostrud. Sint consequat commodo non incididunt minim adipisicing laborum Lorem sit fugiat aliqua eu. Minim minim deserunt in nisi officia velit deserunt ea ut duis nulla quis consectetur aliquip. Magna cillum esse cillum qui nulla pariatur dolor esse labore esse.'
    },
     {
        icon:ApparelIcon,
        title:'apparel',
        description:'Ex fugiat non magna veniam veniam pariatur culpa magna aute fugiat id proident. Sit quis cillum sit exercitation ut do qui in laboris esse. Occaecat duis pariatur non aliquip sint consectetur incididunt et ex magna cupidatat aliquip nostrud. Sint consequat commodo non incididunt minim adipisicing laborum Lorem sit fugiat aliqua eu. Minim minim deserunt in nisi officia velit deserunt ea ut duis nulla quis consectetur aliquip. Magna cillum esse cillum qui nulla pariatur dolor esse labore esse.'
    },
     {
        icon:ProductIcon,
        title:'product',
        description:'Ex fugiat non magna veniam veniam pariatur culpa magna aute fugiat id proident. Sit quis cillum sit exercitation ut do qui in laboris esse. Occaecat duis pariatur non aliquip sint consectetur incididunt et ex magna cupidatat aliquip nostrud. Sint consequat commodo non incididunt minim adipisicing laborum Lorem sit fugiat aliqua eu. Minim minim deserunt in nisi officia velit deserunt ea ut duis nulla quis consectetur aliquip. Magna cillum esse cillum qui nulla pariatur dolor esse labore esse.'
    }
]

const OurServices = () => {
    return (
        <StyledContainer>
            <StyledListWrap style={{display:'block'}}>
                <StyledName style={{marginBottom:'1.5rem'}}>OUR SERVICES</StyledName>
                <div>
                   <p>Duis cillum fugiat nulla fugiat incididunt pariatur culpa excepteur laborum ut aute. Ex ut minim eiusmod sit dolore incididunt. Exercitation minim aliquip ex tempor incididunt irure nulla sint. Id quis nisi nostrud in magna.</p>
                    <p>Minim nisi magna in non anim Lorem qui amet sint minim nisi nisi enim. Veniam id minim exercitation aute labore ea aute anim consectetur incididunt. Commodo eiusmod officia tempor velit veniam ad ipsum.</p>  
                </div>               
            </StyledListWrap>
            <StyledListWrap style={{paddingTop:0,flexWrap:'wrap'}}>
                {servicesData.map((item,index)=> <ServiceItem key={index} icon={item.icon} title={item.title} description={item.description}/>)}
            </StyledListWrap>
           
           
        </StyledContainer>
    )
}

export default OurServices
