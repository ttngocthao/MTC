import React, { useState } from 'react'
import styled from 'styled-components'

import { RightArrowAlt } from '@styled-icons/boxicons-regular/'
const ItemWrap = styled.li`
    min-width:300px;
    min-height:200px;
    width: 100%;   
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    list-style: none;
    box-sizing: border-box;
    position: relative;
    margin: 0 auto;
    @media only screen and (min-width: 1024px){
         max-width: 50%;
    }
`
const RedArrowRight = styled(RightArrowAlt)`
    color:#f43908;

`

const ViewCaseButton = styled.a`
    background-color: #222;
    color:white;
    padding:.25rem .5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 175px;
    width: 100%;
    text-decoration: none;
    position: absolute;
    bottom:1rem;
    left: 2rem;
`
const CaseDescriptionWrap = styled.div`
    background-color: #f43908;
    color:#000;
    text-transform: uppercase;
    position: absolute;
    top:0;
    left:0;
    bottom: 0;
    right: 0;
    padding:2rem;
    border: .5px solid #000;
    font-size:2.25rem;
    font-weight: 600;
    box-sizing: border-box;
    line-height: 1.2;
    opacity: 0;
    transition:.5s cubic-bezier(0.075, 0.82, 0.165, 1);
`

const CaseItem = ({ title, description, bkgImg, pageUrl, orderInList }) => {
    const [showDescription, setShowDescription] = useState(false)
    const hoveredViewCaseBtnStyles = {border:'#000 solid 2px',borderRadius:'5px',backgroundColor:'rgba(0,0,0,0)',color:'#000'}
    const hoveredArrowStyles ={color:'#000'}
    const mouseEnterHandle =()=>{
        setShowDescription(true)
    }
    const mouseLeaveHandle =()=>{
        setShowDescription(false)
    }
    return (
        <ItemWrap style={{ backgroundImage: `url(${bkgImg})`}} onMouseEnter={mouseEnterHandle} onMouseLeave={mouseLeaveHandle}>
            <CaseDescriptionWrap style={showDescription ? {opacity:1}: null}>{description}</CaseDescriptionWrap>
            <ViewCaseButton href={pageUrl} target='_blank' style={showDescription ? hoveredViewCaseBtnStyles : null}>
                <span style={{ paddingRight: '1rem' }}>{title}</span>
                <RedArrowRight size='24' style={showDescription ? hoveredArrowStyles : null}/>
            </ViewCaseButton>
        </ItemWrap>
    )
}

export default CaseItem
