/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Hero from "./Hero"
import hero from "../images/herosm.png"
import Navbar from "./Navbar/Navbar"
import "./layout.css"
import { Parallax, Background } from "react-parallax"
import VisibilitySensor from "react-visibility-sensor"
import { Spring } from "react-spring/renderprops"

const Layout = ({ children }) => {
  return (
      <div style={{
	
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

       <Parallax
            bgImage={hero}
    bgImageAlt="the dog"
    strength={900}
    bgImageStyle={{
      height: `90vh`,
      minWidth: `130.43vh`,
	top: `470px`,
	position: `absolute`,
	margin: `0 auto`,
	opacity: `0.75`,

    }}>

	  <div style={{
	    height: `90vh`,
	      width: `auto`,
	    margin: `0 auto`,
	  top: `10vh`,
      }} />


      </Parallax>
  
    </div>

      <main style={{
	  maxWidth: `960px`,
	  	paddingTop: `1rem`,
	paddingBottom: `1rem`,
	paddingLeft: `1rem`,
	paddingRight: `1rem`,
	  margin: `0 auto`,
	  top: `auto`,
      }}>
      {children}
          <footer>
          © {new Date().getFullYear()} Jason Upchurch
        </footer>
      </main>

      </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
