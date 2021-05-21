import React from 'react'
import styled from 'styled-components'
import Pin from './Pin'

import './mainboarder.css'

function Mainboard(props) {

    let {pins}=props;

    return (
       <Wrapper>
       <Container className="mainboard__container">
       {
           pins.map(pin=>{

               console.log(pin)
               let {urls}=pin;
              return <Pin urls={urls}/>
           })
       }
       <Pin/>

       </Container>
       </Wrapper>
    )
}

export default Mainboard


const Wrapper=styled.div`

background-color:#d6d2d3;
display:flex;

justify-content:center;
margin-top:15px;
height:100%;

`

const Container=styled.div`
/* display:flex;                              flex column devider
flex-wrap:wrap;
align-items:flex-end; */




/* background-color:white; */
/* max-width: 80%; */

/* column-gap:5px; */
/* margin:0 auto;
height:100%; */

/* all are include in css file */


`


