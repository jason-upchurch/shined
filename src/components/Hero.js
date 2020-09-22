import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'
import { Spring } from "react-spring/renderprops"
import VisibilitySensor from "react-visibility-sensor"

import BackgroundImage from 'gatsby-background-image'

const BackgroundSection = ({ className }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "hero.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      // Set ImageData.
      const imageData = data.desktop.childImageSharp.fluid
      return (
        <BackgroundImage
          Tag="section"
          className={className}
          fluid={imageData}
          >
	  <VisibilitySensor once>
	  {({ isVisible }) => (
	      <Spring delay={50} to={{ opacity: isVisible ? 1 : 0 }}>
	      {({ opacity }) =>
	       <h1 style={{
		 opacity,
		 fontSize: `75px`,
		 textAlign: `center`,
		 paddingTop: `40vh`,
		 margin: `0 auto`,
	       }}>shined.org</h1>
	      }
	    </Spring>
	  )}
	</VisibilitySensor>
        </BackgroundImage>
      )
    }}
  />
)

const Hero = styled(BackgroundSection)`
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      position: fixed;
      top: 0px;
      height: 90vh;
      width: 100%,
      bottom: 0px;
      left: 0px;
      right: 0px;
      z-index: -1;
      -webkit-transform: translateZ(0);
      pointer-events: none;
`

export default Hero
