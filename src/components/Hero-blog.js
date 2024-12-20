import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'
import { Spring } from "react-spring/renderprops"
import VisibilitySensor from "react-visibility-sensor"

import StaticImage from 'gatsby-plugin-image'

const BackgroundSection = ({ className }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "potw2033a.jpg" }) {
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
        <StaticImage
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
		 color: `white`,
		 textAlign: `center`,
		 paddingTop: `40vh`,
	       }}>shined.org</h1>
	      }
	    </Spring>
	  )}
	</VisibilitySensor>
        </StaticImage>
      )
    }}
  />
)

const Hero = styled(BackgroundSection)`
  width: 100%;
  height: 90vh;
  top: 0;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  /* You should set a background-size as the default value is "cover"! */
  /* background-size: auto; */
  /* So we won't have the default "lightgray" background-color. */
  background-color: transparent;
  /* Now again, remember the stacking order of CSS: lowermost comes last! */

`

export default Hero
