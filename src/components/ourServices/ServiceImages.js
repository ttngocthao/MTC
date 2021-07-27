import React from 'react'
import styled from 'styled-components'
import Img1 from '../../images/services/additional/img1.png'
import Img2 from '../../images/services/additional/img2.png'
import Img3 from '../../images/services/additional/img3.png'
import Img4 from '../../images/services/additional/img4.png'
import Img5 from '../../images/services/additional/img5.png'
import Img6 from '../../images/services/additional/img6.png'
import Img7 from '../../images/services/additional/img7.png'
import Img8 from '../../images/services/additional/img8.png'

const ImageRow = styled.div`
    background-color: skyblue;
    
    &.bottomRow{
        display: none;
    }
    @media only screen and (min-width: 700px){
        display: flex;
        /* flex-wrap:wrap; */
        &.bottomRow{
            display: flex;
        }
    }
`
const ImageItem = styled.figure`
    margin:0;
    /* max-width: 481px; */
    width:100%;    
    @media only screen and (min-width: 700px){
        max-width: 480px;
        width:100%;
    }
    img{
        width:100%;
        vertical-align: bottom;
    }
`
const imageData = [
    {url:Img1,orderInList:1},
    {url:Img2,orderInList:2},
    {url:Img3,orderInList:3},
    {url:Img4,orderInList:4},
    {url:Img5,orderInList:5},
    {url:Img6,orderInList:6},
    {url:Img7,orderInList:7},
    {url:Img8,orderInList:8},
]

const ServiceImages = () => {
    return (
        <>
            <ImageRow>
                {imageData.filter(item=>item.orderInList<5).map(item=><ImageItem key={item.orderInList}><img src={item.url} alt=''/></ImageItem>)}
            </ImageRow>
            <ImageRow className='bottomRow'>
                {imageData.filter(item=>item.orderInList>4).map(item=><ImageItem key={item.orderInList}><img src={item.url} alt=''/></ImageItem>)}
            </ImageRow>
        </>
    )
}

export default ServiceImages
