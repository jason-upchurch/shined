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
	    backgroundColor: `gray`,
	paddingTop: `1rem`,
	paddingBottom: `1rem`,
	paddingLeft: `1rem`,
	paddingRight: `1rem`,
	      opacity: `0.5`,
	  }}
      >


      <div style={{
	height: `100vh`,
	width: `100%`,
	 paddingTop: `1rem`,
	paddingBottom: `1rem`,
	paddingLeft: `1rem`,
	paddingRight: `1rem`,
	  position: `relative`,
	  margin: `0 auto`,
	  backgroundColor: `orange`,
	  opacity: `1`,
	top: `20px`,
      }}>

       <Parallax
            bgImage={hero}
    bgImageAlt="the dog"
    strength={900}
    bgImageStyle={{
      height: `95vh`,
      minWidth: `145vh`,
	top: `475px`,
	position: `absolute`,
	backgroundColor: `black`,
	paddingTop: `1rem`,
	paddingBottom: `1rem`,
	paddingLeft: `1rem`,
	paddingRight: `1rem`,
	margin: `0 auto`,
	opacity: `0.75`,

    }}>

	  <div style={{
	      height: `90vh`,
	      width: `auto`,
	paddingTop: `1rem`,
	paddingBottom: `1rem`,
	paddingLeft: `1rem`,
	paddingRight: `1rem`,
	  backgroundColor: `blue`,
	    opacity: `0.5`,
	    margin: `0 auto`,
	  top: `10vh`,
      }} />


      </Parallax>
  
    </div>

      <main style={{
	  maxWidth: `960px`,
	  backgroundColor: `yellow`,
	  	paddingTop: `1rem`,
	paddingBottom: `1rem`,
	paddingLeft: `1rem`,
	paddingRight: `1rem`,
	  margin: `0 auto`,
	  top: `auto`,
      }}>
	  {children}
      </main>
      <footer style={{
          margin: `0 auto`,
	backgroundColor: `goldendrod`,
	  paddingBottom: `1.45rem`,
	  opacity: `1`,
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
