import React, { useState } from 'react'
import styled from 'styled-components'

import { RightArrowAlt } from '@styled-icons/boxicons-regular/'
const ItemWrap = styled.li`
    min-width:300px;
    min-height:200px;
    width: 100%;
    max-width: 600px;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    list-style: none;
    box-sizing: border-box;
    position: relative;
    margin: 0 auto;
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
    max-width: 150px;
    width: 100%;
    text-decoration: none;
    position: absolute;
    bottom:1rem;
    left: 2rem;
`
const CaseDescriptionWrap = styled.div`
    background-color: #f43908;
    color:#222;
    text-transform: uppercase;
`

const CaseItem = ({ title, description, bkgImg, pageUrl, orderInList }) => {
    const [showDescription, setShowDescription] = useState(false)
    return (
        <ItemWrap style={{ color: 'blue', backgroundImage: `url(${bkgImg})` }}>
            {showDescription && <CaseDescriptionWrap>{description}</CaseDescriptionWrap>}
            <ViewCaseButton href={pageUrl} target='_blank'>
                <span style={{ paddingRight: '1rem' }}>{title}</span>
                <RedArrowRight size='24' />
            </ViewCaseButton>
        </ItemWrap>
    )
}

export default CaseItem
