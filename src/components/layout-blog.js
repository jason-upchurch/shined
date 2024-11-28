/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import heroGalaxy from "../images/potw2033a.jpg"
import Navbar from "./Navbar/Navbar"
import "./layout.css"


const Layout = ({ children }) => {
  return (
      <div style={{
	  backgroundColor: `black`,
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

      <main style={{
	  width: `960px`,
	  maxWidth: `90vw`,
	  position: `relative`,
	  opacity: `1`,
	  paddingTop: `0rem`,
	  paddingBottom: `0rem`,
	  backgroundColor: `black`,
	  paddingLeft: `0rem`,
	  paddingRight: `0rem`,
	  margin: `0 auto`,
	  top: `auto`,
      }}>
      {children}
          <footer style={{
	      color: `white`
	  }}>
              © 2020&ndash;{new Date().getFullYear()} Jason Upchurch
        </footer>
	  </main>


      </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
