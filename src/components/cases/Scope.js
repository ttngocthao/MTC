import React from 'react'
import styled from 'styled-components'

const List = styled.ul`
    padding-left: 0;
    margin-top:.5rem;
`
const ListItem = styled.li`
    list-style: none;
    padding-bottom: .5rem;
`

const Scope = ({scopeNameArr}) => {
    const scopes =[   
    {name:'BI',displayName:'Brand Identity'},
    {name:'BA',displayName:'Brand Assets'},
    {name:'BS',displayName:'Business Stationery'},
    {name:'BG',displayName:'Brand Guidelines'},
    {name:'WS',displayName:'Website'},
    {name:'WD',displayName:'Website Design'},
    {name:'VP',displayName:'Video Production'},
    {name:'MM',displayName:'Marketing Materials'},
    {name:'Brand Digitilisation',displayName:'Brand Digitilisation'},
    ]
    
    return (
        <>
         <h3 style={{marginBottom:'0'}}>SCOPE</h3>
         <List>
            {scopeNameArr ? scopeNameArr.map(item=>{
                return   scopes.filter(s=>s.name===item).map(s=><ListItem key={s.name}>{s.displayName}</ListItem>)
            }) : scopes.map(item=><ListItem key={item.name}>{item.displayName}</ListItem>)}
        </List>
        </>
        
    )
}

export default Scope
