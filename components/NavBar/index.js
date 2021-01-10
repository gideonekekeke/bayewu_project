import React, { useState, useEffect } from "react";
import { FaBars, FaMagento } from "react-icons/fa";
import img from "../../logo.png";
import imgs from '../img/remove.png'
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcons,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavBar.element";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";

const NavBar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(true);

  const changeNav = () => {
    if (window.scrolY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <img style = {{height : '40px'}} src = {imgs}/>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>
          BAYEWU KAMAL
          </NavLogo>
          <MobileIcons onClick={toggle}>
            <FaBars />
          </MobileIcons>
          <NavMenu>
            <NavItem>
            <Link style = {{textDecoration : 'none'}} to = '/'>
                <NavLinks>HOME</NavLinks>
                </Link>
            </NavItem>

            <NavItem>
             
                <Link style = {{textDecoration : 'none'}} to = '/biography'>
                <NavLinks>BIOGRAPHY</NavLinks>
                </Link>
            </NavItem>
            <NavItem>
            <Link style = {{textDecoration : 'none'}} to = '/work'>
                <NavLinks>WORKS</NavLinks>
                </Link>
            </NavItem>
            <NavItem>
            <Link style = {{textDecoration : 'none'}} to = '/achievement'>
                <NavLinks>ACHIEVEMENTS</NavLinks>
                </Link>
         
            </NavItem>
          </NavMenu>

          <NavBtn>

          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default NavBar;
