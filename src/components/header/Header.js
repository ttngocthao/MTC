import React,{useState,useEffect} from 'react'
import { AnchorLink } from "gatsby-plugin-anchor-links";
import styled from 'styled-components'
import FullLogoImg from '../../images/FullLogo.png'
import BlackLogoImg from '../../images/blackMLogo.png'
import RedLogoImg from '../../images/redMLogo.png' 
import WhiteLogoImg from '../../images/whiteMLogo.png'
import MenuBtnImg from '../../images/menuBtn.png'
import CloseBtnImg from '../../images/closeBtn.png'
import  useScroll  from '../../hooks/useScroll'
import { caseStudyData } from '../cases/CaseStudyList' 

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
        url:'/#caseStudy',
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
        url:'/about#whoAreWe',
        parent:'about',
        orderInMainList:null,
        orderInSubList:1,
        subNav:true
    },
    {
        name:'our services',
        url:'/about#ourServices',
        parent:'about',
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
    /* background-color: #222222; */
    background-color: rgba(34,34,34,1);
    color:white;
    font-size: 40px;    
    position: fixed;
    top:0;
    left:0;
    right: 0;
    z-index: 1000;
    max-width: 1920px;
    margin:0 auto;
     @media only screen and (min-width: 700px){
       &.caseStudyHeader{
           background-color: transparent;
           &.showBkgColor{
               background-color: rgba(34,34,34,1);
           }
           /* &.isScrolling{
               
           } */
       }
    }
`
const MobileNav = styled.nav`
    
    padding:1.24rem 2rem;
    display: block;
    
    .logoWrap{
        max-width: 53px;
        /* max-width: 14.13%; */
    }
    button{
            background-color: transparent;
            border:none;
            box-shadow: none;
            padding:0;
            &:focus-visible,&:target{
                outline: none;
                border: 1px dashed white;
                padding: .25rem;
            }
        }
    .menuBtn{
        max-width: 16px;
        img{
            width: 100%;
            vertical-align: middle;
        }
        
        cursor: pointer;
        /* max-width: 4.3%; */
        
        
    }
   
    .navBar_mobile,.navBar_mobile--active{        
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
    .menuList_mobile{
        padding-left: 0;
        /* padding-top: 5rem; */
    }
    .menuItem_mobile{
         list-style: none;
        a{
            text-decoration: none;
            margin-bottom: .5rem;
            font-weight: 900;
            font-size: 3rem;
            color:white;
            text-transform: uppercase;
            display: block;
            width: 100%;
        }
        /* line-height: 1.2; */
    }
    @media only screen and (min-width: 700px){
        display: none;
    }
`
const DeskNav = styled.nav`
    display: none;
    /* background-color: royalblue; */
    padding:1.2rem 1rem;
    
   
    .navBar_desktop{
       display: flex;
       max-width: 850px;
        margin: 0 auto;
        justify-content: space-between;
        align-items: center;
       li{
           list-style: none;
       }
        .logoWrap{
            max-width: 46px;
            
            img{
                width: 100%;
            }
        }
    }
    
     .menuItem_desktop{
         list-style: none;
         position: relative;
        a.mainItemLink{
            text-decoration: none;
            margin: 1rem auto;
            font-weight: 900;
            text-align: center;
            font-size: 1.5rem;
            color:white;
            text-transform: uppercase;
            display: block;
            /* padding:.5rem; */
            width: 100%;
            min-width: 120px;
            box-sizing: border-box;
            &:hover{
                text-decoration: underline solid #f43908 3px; 
                text-underline-position: under;
                text-underline-offset:.25rem;               
            }
            &.contactBtn{
                border:3px solid #f43908;
                border-radius: 4px;
                &:hover{
                    background-color: #f43908;
                    color: #222;
                    text-decoration: none;
                }
                &.active{
                    text-decoration: none;
                    background-color: #f43908;
                    color: #222;
                }
            }
            &.active{               
            /* border-bottom: 3px solid #f43908; */
                text-decoration: underline solid #f43908 3px; 
                text-underline-position: under;
                text-underline-offset:.25rem;
            }
            
        }
        
    }

    @media only screen and (min-width: 700px){
        display: block;
        
    }
`

const AboutSubNavList = styled.ul`
    position: absolute;
    top: 4rem;
    left: 1.5rem;
    padding: 0;
    margin: 0;
    background-color: white;
    width: 175px;
   
    li{ 
        list-style: none;
        padding:0;
        a.subItemLink{
        display: block; 
        color:#222; 
        font-size: 1.5rem;
        font-weight:900;
        text-transform: uppercase; 
        padding: .5rem 1rem;
        margin:0;
        background-color: transparent; 
            &.subItemActive{
                background-color: #F43908;
            }
        }
        &:hover{
             background-color: #F43908;

        }
    }
    
`

const Header = ({caseStudy}) => {
    const [mobileMenuListOpened,setMobileMenuListOpened]= useState(false);
    const [isScrolling,setIsScrolling] = useState(false);
    const [showBkgCaseStudyNav,setShowBkgCaseStudyNav]=useState(false);
    const [currentPath,setCurrentPath] = useState('/');
    const [showAboutSubNav,setShowAboutSubNav]=useState(false);
    const scroll = useScroll();

   
    const caseStudyPaths = caseStudyData.map(item=>item.pageUrl);

    useEffect(()=>{
        let _classList =[];
        let pathName
       
        if(window){
            pathName = window.location.pathname;
            if(pathName!=='/' && pathName.slice(-1)==='/'){
                pathName = pathName.slice(0,-1);
            }
            setCurrentPath(pathName)
        }
        if(scroll.y>50){
            _classList.push('scrollingNav');
            setIsScrolling(true);
        }else{
            _classList=[];
            setIsScrolling(false);
        }
        
        
        if(caseStudyPaths.indexOf(pathName)>-1){
       
            if(scroll.y>600){
                setShowBkgCaseStudyNav(true);
            }else{
                setShowBkgCaseStudyNav(false);
            }
        }

    },[scroll.y,caseStudyPaths,currentPath]);

 
    const getActiveItemClassName =(item)=>{
        const activeItemClassList = [];
                
        if(item.name!=='work' && currentPath && currentPath === item.url){
            
            activeItemClassList.push('active')
        }
        if(item.name==='work'&& currentPath && caseStudyPaths.indexOf(currentPath)>-1){
            activeItemClassList.push('active')
        }
       
        return activeItemClassList.join(' ');
    }

   

    const toggleAboutSubNavState =()=>{
        setShowAboutSubNav(!showAboutSubNav)
    }

    return (
        <StyledHeader className={`${caseStudy ? `caseStudyHeader`: null} ${showBkgCaseStudyNav ? 'showBkgColor' : null} ${isScrolling ? 'isScrolling':null}`} >
            <MobileNav style={mobileMenuListOpened ? {backgroundColor: '#f43908', minHeight: '810px'} : null}>
             
                    <div className={mobileMenuListOpened ? 'navBar_mobile--active' : 'navBar_mobile'}>
                        <a  href='/' aria-label='Mighty Culture - Home'>
                            <figure className='logoWrap'>
                                <img src={mobileMenuListOpened ? BlackLogoImg : RedLogoImg} alt=''/>
                            </figure>  
                        </a>
                        
                            <button onClick={()=>setMobileMenuListOpened(!mobileMenuListOpened)}><figure className='menuBtn'>
                                <img src={mobileMenuListOpened ? CloseBtnImg :MenuBtnImg} alt=''/>
                              </figure></button>                            
                      
                    </div>
                    {mobileMenuListOpened && <ul className='menuList_mobile'>
                    {navItems.filter(item=>!item.subNav).map((item,index)=><li onClick={()=>setMobileMenuListOpened(false)} className='menuItem_mobile' key={index}>
                        <a href={item.url} aria-label={`Mighty Culture - ${item.name}`}>{item.name}</a>
                        </li>)}
                    </ul>}
                    
                   
            </MobileNav>
            <DeskNav >
                <ul className={ 'navBar_desktop'}>
                   
                    {navItems.filter(item=>!item.subNav && item.orderInMainList<3).map((item,index)=><li className='menuItem_desktop' key={index}>
                       
                        {item.name==='work' ?  <AnchorLink className={`${getActiveItemClassName(item)} mainItemLink`} to={item.url} title={item.name} />: <a className={`${getActiveItemClassName(item)}  mainItemLink`} href={item.url} >{item.name}</a>}                        
                        </li>)}
                    <li>
                        <a href='/' aria-label='Mighty Culture - Home'>                           
                            <figure className='logoWrap'>
                                <img src={!isScrolling ? (caseStudy? WhiteLogoImg :FullLogoImg) : RedLogoImg} alt=''/>
                            </figure>  
                        </a>
                    </li>
                    {navItems.filter(item=>!item.subNav && item.orderInMainList>=3).map((item,index)=>{
                        
                    return(
                        <li className={`menuItem_desktop`} key={index} onMouseEnter={item.name==='about'? toggleAboutSubNavState : null} onMouseLeave={item.name==='about' ? toggleAboutSubNavState : null}>
                            {item.name==='about' && showAboutSubNav && <AboutSubNavList>
                                 {navItems.filter(subItem=>subItem.parent==='about' && subItem.subNav).map(((subItem,i)=><li key={i}>
                                     <AnchorLink className={`subItemLink`} title={subItem.name} to={subItem.url} onAnchorLinkClick={()=>{setShowAboutSubNav(false)}}/>
                                    </li>))}
                                </AboutSubNavList>}
                            <a aria-label={`Mighty Culture - ${item.name}`} href={item.url} className={`${item.name==='contact' ? 'contactBtn':''} ${getActiveItemClassName(item)} ${item.name==='about' && showAboutSubNav ? 'active' : null} mainItemLink`}>{item.name}</a>
                        </li>  
                    )})}              
                  
                    </ul>
            </DeskNav>
        </StyledHeader>
    )
}

export default Header
