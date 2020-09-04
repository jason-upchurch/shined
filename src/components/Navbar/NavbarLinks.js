// NavbarLinks.js

import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import SocialFollow from "../SocialFollow"

const NavItem = styled(Link)`
  text-decoration: none;
  color: white;
  display: inline-block;
  white-space: nowrap;
  font-size: 24px;
  margin: 0 1.25vw;
  transition: all 200ms ease-in;
  position: relative;

  :hover {
    color: goldenrod;
    ::after {
      width: 100%;
    }
  }

  @media (max-width: 960px) {
    padding: 20px 0;
    font-size: 24x;
    z-index: 6;
  }
`
const NavbarLinks = () => {
  return (
    <>
      <NavItem to="/">Home</NavItem>
      <NavItem to="/projects">Projects</NavItem>
      <NavItem to="/blog">Blog</NavItem>
      <SocialFollow />
    </>
  )
}

export default NavbarLinks
