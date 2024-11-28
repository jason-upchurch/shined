/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import hero from "../images/hero.png"
import Navbar from "./Navbar/Navbar"
import "./layout.css"

const Layout = ({ children }) => {

  return (
      <div style={{
	backgroundColor: `black`,
	 backgroundImage: `url(${hero})`,
	backgroundSize: "cover",
	backgroundPosition: "center"
      }}>
      <Navbar/>

      <div style={{
	height: `90vh`,
	width: `100%`,
	position: `relative`,
	backgroundColor: `black`,
	  margin: `0 auto`,
	top: `0px`,
      }}>




	       <h1 style={{
		   height: `65px`,
		   fontSize: `65px`,
		   color: `white`,
		 textAlign: `center`,
		 paddingTop: `35vh`,
	       }}>jasonupchurch.io</h1>
	        
  
    </div>


      {children}

    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
