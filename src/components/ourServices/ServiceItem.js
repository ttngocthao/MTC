import React from 'react'
import {StyledReviewItem,StyledInitial} from '../customerReviews/ReviewItem';
import styled from 'styled-components';

const StyledServiceItem = styled(StyledReviewItem)`
    background-color: #222;
    color:white;
`

const StyledServiceIcon = styled(StyledInitial)`
    background-color: #f43908;
    background-position: center;
    background-size:cover;
    background-repeat: no-repeat;
`
const StyledServiceTitle = styled.h3`
    font-weight: 900;
    font-size: 2.85rem;
    /* letter-spacing: .1rem; */
    text-transform: uppercase;
`

const ServiceItem = ({icon,title,description}) => {
    return (
        <StyledServiceItem>
            <StyledServiceIcon style={{backgroundImage:`url(${icon})`}}/>
            <StyledServiceTitle>{title}</StyledServiceTitle>
            <p>{description}</p>
        </StyledServiceItem>
    )
}

export default ServiceItem
