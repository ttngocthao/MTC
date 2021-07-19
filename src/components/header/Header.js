import React from 'react'
import styled from 'styled-components'
const navItems =[
    {
        name:'home',
        url:'/',
        parent:null,
        orderInMainList:1,
        orderInSubList:null,
        subNav:false
    },
    {
        name:'work',
        url:null,
        parent:null,
        orderInMainList:2,
        orderInSubList:null,
        subNav:false
    },
    {
        name:'about',
        url:'/about',
        parent:null,
        orderInMainList:3,
        orderInSubList:null,
        subNav:false
    },
    {
        name:'contact',
        url:'/contact',
        parent:null,
        orderInMainList:4,
        orderInSubList:null,
        subNav:false
    },
    {
        name:'who are we',
        url:'/about/#who-are-we',
        parent:'about',
        orderInMainList:null,
        orderInSubList:1,
        subNav:true
    },
    {
        name:'our services',
        url:'/about/#our-services',
        orderInMainList:null,
        orderInSubList:2,
        subNav:true
    },
    {
        name:'above & beyond garden',
        url:'/above-&-beyond-garden',
        parent:'work',
        orderInMainList:null,
        orderInSubList:1,
        subNav:true
    },
    {
        name:'griffin painting services',
        url:'/griffin-painting-services',
        parent:'work',
        orderInMainList:null,
        orderInSubList:2,
        subNav:true
    },
    {
        name:'little creek farm',
        url:'/little-creek-farm',
        parent:'work',
        orderInMainList:null,
        orderInSubList:3,
        subNav:true
    },
    {
        name:"louie's place",
        url:'/louies-place',
        parent:'work',
        orderInMainList:null,
        orderInSubList:4,
        subNav:true
    },
    {
        name:'kaiju curry house',
        url:'/kaiju-curry-house',
        parent:'work',
        orderInMainList:null,
        orderInSubList:5,
        subNav:true
    },
   {
        name:'itchy & sketchy',
        url:'/itchy-&-sketchy',
        parent:'work',
        orderInMainList:null,
        orderInSubList:6,
        subNav:true
    },
    {
        name:'lemon smart business card',
        url:'/lemon-smart-business-card',
        parent:'work',
        orderInMainList:null,
        orderInSubList:7,
        subNav:true
    },
    {
        name:'salon 55',
        url:'/salon-55',
        parent:'work',
        orderInMainList:null,
        orderInSubList:8,
        subNav:true
    },
]
const StyledHeader = styled.header`
    background-color: rgba(0,0,0,.4);
    color:white;
    font-size: 40px;
    position: fixed;
    top:0;
    left:0;
    right: 0;
    z-index: 1000;
`
const MobileNav = styled.nav`
    background-color: #f43908;
    display: block;
    @media only screen and (min-width: 700px){
        display: none;
    }
`
const DeskNav = styled.nav`
    display: none;
    background-color: royalblue;
    @media only screen and (min-width: 700px){
        display: block;
    }
`

const Header = () => {
    return (
        <StyledHeader>
            <MobileNav>
                This is for small screens
            </MobileNav>
            <DeskNav>
                This is for big screens
            </DeskNav>
        </StyledHeader>
    )
}

export default Header
