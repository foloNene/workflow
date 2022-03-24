import React, {useState} from 'react'
import styled from 'styled-components'
import {FcHome} from 'react-icons/fc'
import {FaTimes} from 'react-icons/fa'
import {GiHamburgerMenu} from 'react-icons/gi'


const Navbar = () => {

const[click, setClick] = useState(false);
const handClick = () => {
 setClick(!click)
}
  return (
   <>
   <Nav>
    <NavContainer>
     <LogoHold>
      <HomeHold><FcHome/></HomeHold>  Wura
     </LogoHold>

     


     <NavBar onClick={handClick} click={click}>
      <NavLinks>Home</NavLinks>
      <NavLinks>Contact</NavLinks>
      <NavLinks>Services</NavLinks>
      <NavLinks>Blogs</NavLinks>

     </NavBar>

     <MobileIcon onClick={handClick}>
      {click ?<FaTimes/>:
       <GiHamburgerMenu/>}
     </MobileIcon>
     
    </NavContainer>

   </Nav>
    

   </>
   
  )
}

export default Navbar;

const Nav = styled.div`
width: 100%;
background-color: black;
display: flex;
justify-content: center;
align-items: center;
height: 50px;
color: white;
font-size: 30px;



`

const NavContainer = styled.div`
width: 90%;

display: flex;
justify-content: space-between;
align-items: center;


`

const LogoHold = styled.div`

`

const NavBar = styled.div`
width: 50%;

display:flex;
justify-content: space-around;

 @media screen and (max-width: 850px){
 display: flex;
 flex-direction: column;
 align-items: center;
 position: absolute;
 padding-right: 0;
 top: 50px;
 height: 80vh;
 width: 100%;
 justify-content: flex-start;
background: #101522;
left: ${({click}) => (click? 0 : '-100%')};
opacity: 1;
transition: all 0.5s ease;




}


`

const NavLinks = styled.div`

`
const HomeHold = styled.span`

font-size: 40px;
 background-color: green;
`

const MobileIcon = styled.div`
display: none;

@media screen and (max-width: 850px){
 display: block;
 position: absolute;
 top: 0;
 right: 0;
 transform: translate(-100%, 60%);
}
`