import React,{useState} from 'react'
import styled from 'styled-components'
import BlackLogoImg from '../../images/blackMLogo.png'
import RedLogoImg from '../../images/redMLogo.png' 
import MenuBtnImg from '../../images/menuBtn.png'
import CloseBtnImg from '../../images/closeBtn.png'


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
    }
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
    padding:1rem;
    display: block;
    .logoWrap{
        max-width: 53px;
        /* max-width: 14.13%; */
    }
    .menuBtn{
        max-width: 16px;
        cursor: pointer;
        /* max-width: 4.3%; */
    }
    .navBarActive_mobile{
        display: flex;
        align-items: center;
        width: 57.5%;
        margin-left: auto;
        justify-content: space-between;
        figure{
            margin:0;
            padding:0;
            overflow: hidden;
            img{
                width:100%;
            }
        }
    }
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
    const [mobileMenuListOpened,setMobileMenuListOpened]= useState(true);
    return (
        <StyledHeader>
            <MobileNav>
                {mobileMenuListOpened ? <div>
                    <div className='navBarActive_mobile'>
                        <a href='/workingHomePage'>
                            <figure className='logoWrap'>
                                <img src={BlackLogoImg} alt=''/>
                            </figure>  
                        </a>
                        <figure className='menuBtn'>
                            <img src={MenuBtnImg} alt=''/>
                        </figure>
                    </div>
                    <ul className='menuList_mobile'>
                    {navItems.filter(item=>!item.subNav).map((item,index)=><li key={index}>{item.name}</li>)}
                    </ul>
                    </div> : <div className='navBar_mobile'>This is nav bar with red logo</div>}
            </MobileNav>
            <DeskNav>
                This is for big screens
            </DeskNav>
        </StyledHeader>
    )
}

export default Header
