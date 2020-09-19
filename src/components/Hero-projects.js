import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'

import BackgroundImage from 'gatsby-background-image'

const BackgroundSection = ({ className }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "PIA23865.jpg" }) {
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
        </BackgroundImage>
      )
    }}
  />
)

const Hero = styled(BackgroundSection)`
  width: 100%;
  height: 90vh;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  z-index: -1;
  /* You should set a background-size as the default value is "cover"! */
  /* background-size: auto; */
  /* So we won't have the default "lightgray" background-color. */
  background-color: transparent;
  /* Now again, remember the stacking order of CSS: lowermost comes last! */

`

export default Hero
