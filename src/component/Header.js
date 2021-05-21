import { IconButton } from '@material-ui/core'
import { Face, KeyboardArrowDown, Notifications, Pinterest, Search, Textsms } from '@material-ui/icons'
import React,{useState} from 'react'
import styled from 'styled-components'



function Header({onSubmit}) {
   
    
const [input, setinput] = useState("")

const onSearchSubmit=(e)=>{
 e.preventDefault();
  onSubmit(input)

}
    return (
        <Wrapper>
        <LogoWrapper>
        <IconButton>
          <Pinterest/>
        </IconButton>
          
        </LogoWrapper>
        <HomePageButton>
        <a href="/">Homepage</a>
        </HomePageButton>

        <FollowingButton>
        <a href="/">follow</a>
        </FollowingButton>

        <SearchWrapper>

        <SearchBarWrapper>

        <IconButton>
          <Search/>
        </IconButton>

        <form action="">
        <input type="text"  onChange={(e)=>setinput(e.target.value)} />
        <button type="submit" onClick={onSearchSubmit} ></button>
        </form>

        </SearchBarWrapper>

        </SearchWrapper>

        <IconWrapper>
        <IconButton>
        <Notifications/>
        </IconButton>
        

        <IconButton>
        <Textsms/>
        </IconButton>
        <IconButton>
        <Face/>
        </IconButton>
        <IconButton>
        <KeyboardArrowDown/>
        </IconButton>
       

        </IconWrapper>


        
        </Wrapper>
    )
}

export default Header

const IconWrapper=styled.div`


`

const SearchWrapper=styled.div`
flex:1;
`



const SearchBarWrapper=styled.div`
background-color:gray;
display:flex;
height:48px;
width:100%;
border-radius:50px;
border:none;
padding-left:10px;

form{
   display:flex;
   flex:1;

}

> form > input{
    background-color:transparent;
    border:none;
    width:100%;
    margin-left:5px;
    font-size:15px;
}

form > button {
    display: none;
}

input:focus{
    outline:none;
}



`

const Homestyle=styled.div`
display:flex;
height:48px;
min-width:123px;
align-items:center;
justify-content:center;
border-radius:24px;
cursor: pointer;
margin-left:5px;
margin-right:5px;
`

const HomePageButton=styled(Homestyle)`

background-color:rgb(17,17,17);
a {
    text-decoration:none;
    color:white;
    font-weight:700;

}

`

const FollowingButton=styled(Homestyle)`

background-color: white;
padding-right:10px;
a {
    text-decoration:none;
    color:rgb(17,17,17);
    font-weight:700;

}

:hover{
    background-color:gray;
}

`

const LogoWrapper=styled.div`
.MuiSvgIcon-root{
    color: #d3435b;
    font-size:32px;
    cursor: pointer;


}



`

const Wrapper=styled.div`
display:flex;
align-items:center;
height:56px;
padding:12px 4px 4px 16px;
background-color:white;
color:black;

`
