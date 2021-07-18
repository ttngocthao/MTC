import React from 'react'
import styled from 'styled-components'
export const Row = styled.div`
    margin: 0 auto 1.5rem;
    padding:0 1rem;
    display:block;
    @media only screen and (min-width: 700px){
        display:flex;
        justify-content: space-between;
        padding:0;
        margin: 0 7.3% 3rem;        
                    
        }
`
export const ImgItem = styled.figure`
    margin:0 0 1.5rem;
    padding:0;
    width:100%;    
    overflow: hidden; 
    img{
        width:100%;
        vertical-align: bottom;
    }
    @media only screen and (min-width: 700px){
        margin:0;
        width:48.25%;
    }
   
`

const TwoImgsInRow = ({img1Src,img2Src}) => {
    return (
        <Row>
            {[img1Src,img2Src].map((item,index)=> <ImgItem key={index}>
                <img alt='' src={item}/>
            </ImgItem>)}           
        </Row>
    )
}

export default TwoImgsInRow
