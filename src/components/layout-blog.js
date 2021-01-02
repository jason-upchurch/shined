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
import { Parallax, Background } from "react-parallax"
import VisibilitySensor from "react-visibility-sensor"
import { Spring } from "react-spring/renderprops"

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


       <Parallax
            bgImage={heroGalaxy}
    bgImageAlt="Milky Way"
    strength={900}
    bgImageStyle={{
      height: `90vh`,
      minWidth: `130.43vh`,
	top: `485px`,
	position: `absolute`,
	margin: `0 auto`,

    }}>
	  	  	  <VisibilitySensor once>
	  {({ isVisible }) => (
	      <Spring delay={50} to={{ opacity: isVisible ? 1 : 0 }}>
	      {({ opacity }) =>
	       <h1 style={{
		   opacity,
		   height: `65px`,
		   fontSize: `65px`,
		   color: `white`,
		 textAlign: `center`,
		 paddingTop: `35vh`,
	       }}>shined.org</h1>
	        
	      }
	    </Spring>
	  )}
	</VisibilitySensor>
	  <div style={{
	    height: `90vh`,
	      width: `auto`,
	    margin: `0 auto`,
	  top: `10vh`,
      }} />

      </Parallax>
  
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
