import React from 'react'
import {Row,ImgItem} from './TwoImgsInRow'
import styled from 'styled-components'

const SmallImgItem = styled(ImgItem)`
     @media only screen and (min-width: 700px){       
        width:22.25%;
    }
`

const FourImgsInRow = ({img1Src,img2Src,img3Src,img4Src}) => {
    return (
        <Row>
           {[img1Src,img2Src,img3Src,img4Src].map((item,index)=><SmallImgItem key={index}><img alt='' src={item}/></SmallImgItem>)} 
        </Row>
    )
}

export default FourImgsInRow
