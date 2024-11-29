/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Navbar from "./Navbar/Navbar"
import "./layout.css"

const Layout = ({ children }) => {

  return (
      <div style={{
	backgroundColor: `black`,
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




      <h1 style = {{
	textAlign: `center`,
	paddingTop: `35vh`}}>
      <span style={{color: `white`}}>jasonupchurch</span><span style={{color: `gray`}}>.io</span>
      </h1>
	
	        
  
    </div>


      {children}

    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
