import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { Link, useStaticQuery, graphql } from "gatsby"

const HeroWrap = styled.div`
  margin: auto 0;
  flex: 0 1 1080px;
  @media (max-width: 1080px) and (orientation: landscape) {
    margin: auto 0;
    flex: 0 1 1080px;
  }
`
const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      file(name: { eq: "hero" }, extension: { eq: "png" }) {
        childImageSharp {
          fluid(maxWidth: 1500, pngQuality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <HeroWrap as={Link} to="/">
      <Img fluid={data.file.childImageSharp.fluid} alt=
      "source: https://svs.gsfc.nasa.gov/vis/a010000/a013600/a013641/SDO_Year10_Poster_1080.png" />
    </HeroWrap>
  )
}
