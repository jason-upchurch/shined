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
import hero from "../images/potw2033a.jpg"
import Navbar from "./Navbar/Navbar"
import "./layout.css"
import { Parallax, Background } from "react-parallax"
import VisibilitySensor from "react-visibility-sensor"
import { Spring } from "react-spring/renderprops"

const Layout = ({ children }) => {
  return (
      <div>
      <Navbar/>

      <div style={{
	height: `auto`,
	width: `auto`,
	maxWidth: `undefined`,
	position: `relative`,
	margin: `auto`,
	top: `0vh`,
      }}>

       <Parallax
            bgImage={hero}
    bgImageAlt="the dog"
    strength={900}
    bgImageStyle={{
      height: `auto`,
      minHeight: `55vh`,
      position: `absolute`,
      width: `100%`,
      minWidth: `79.64vh`,
      top: `25vh`,
      color: `black`,
      borderColor: `black`,
    }}>
	        <VisibilitySensor once>
	  {({ isVisible }) => (
	      <Spring delay={25} to={{ opacity: isVisible ? 1 : 0 }}>
	      {({ opacity }) =>
	       <h1 style={{
		 opacity,
		 fontSize: `75px`,
		   textAlign: `center`,
		   height: `75px`,
		 paddingTop: `25vh`,
		   position: `relative`,
		   color: `goldenrod`,
	       }}>shined.org</h1>
	      }
	    </Spring>
	  )}
	</VisibilitySensor>
      <div style={{
	width: `auto`,
	  height: '25vh',
	  top: `0vh`,
      }} />


      </Parallax>
  
    </div>

      <main style={{
	  maxWidth: `960px`,
	  margin: `0 auto`,
      }}>
	  {children}
      </main>
      <footer style={{
          margin: `0 auto`,
	backgroundColor: `orange`,
	paddingBottom: `1.45rem`,
	borderColor: `blue`,
        }}>
          © {new Date().getFullYear()} Jason Upchurch
        </footer>
      </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
