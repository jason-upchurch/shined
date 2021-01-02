/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import hero from "../images/herosm.png"
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
            bgImage={hero}
    bgImageAlt="the dog"
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
		   color: `black`,
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
	  maxWidth: `960px`,
	  position: `relative`,
	  backgroundColor: `white`,
	  opacity: `1`,
	  paddingTop: `1rem`,
	  paddingBottom: `1rem`,
	  paddingLeft: `1rem`,
	  paddingRight: `1rem`,
	  margin: `0 auto`,
	  top: `auto`,
      }}>
      {children}
          <footer>
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
