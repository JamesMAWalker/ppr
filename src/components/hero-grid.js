import React, { useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import gsap from "gsap"

import Img from "gatsby-image"
import { RightChevron } from "./icons"

// let tl = gsap.timeline()

const HeroGrid = () => {
  useEffect(() => {
    gsap.from(".hero-center", 1.5, {
      x: "-7vw",
      ease: 'expo.InOut'
    })
    gsap.fromTo(
      ".hero-center img",
      1.5,
      {
        // opacity: 0.5,
        objectPosition: "10px",
        ease: "expo.InOut",
      },
      {
        objectPosition: "-100px",
        ease: "expo.InOut",
      }
    )

    gsap.from(".photo", 0.8, {
      opacity: .2,
      stagger: { amount: 0.3 },
    })

    gsap.from(".hero-small", 1.5, {
      x: "-7vw",
      ease: "expo.InOut",
    })

    gsap.fromTo(
      ".hero-small img",
      1.5,
      {
        // opacity: 0.5,
        objectPosition: "10px",
        ease: "expo.InOut",
      },
      {
        objectPosition: "-100px",
        ease: "expo.InOut",
      }
    )

  }, [])

  const data = useStaticQuery(graphql`
    query {
      bannerCenter: file(
        relativePath: { eq: "wide-images/hero-center--wide.jpeg" }
      ) {
        childImageSharp {
          fluid(
            maxWidth: 1200
            quality: 100
            duotone: { highlight: "#ff99c9", shadow: "#000000" }
          ) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      heroLeft: file(relativePath: { eq: "wide-images/hero-left--wide.jpeg" }) {
        childImageSharp {
          fluid(
            maxWidth: 1200
            quality: 100
            duotone: { highlight: "#8feeff", shadow: "#000000" }
          ) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      heroRight: file(
        relativePath: { eq: "wide-images/hero-right--wide.jpeg" }
      ) {
        childImageSharp {
          fluid(
            maxWidth: 1200
            quality: 100
            duotone: { highlight: "#adadad", shadow: "#000000" }
          ) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div className="hero">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-text upper">PLANT POWER RACING</div>
          <div className="hero-text center">PLANT &nbsp;POWER RACING</div>
          <div className="hero-text lower">PLANT POWER RACING</div>
          <div className="hero-small photo left">
            <Img
              fadeIn='false'
              fluid={data.heroLeft.childImageSharp.fluid}
              objectFit="cover"
              objectPosition="50% 50%"
              alt=""
            />
          </div>
          <div className="hero-center photo">
            <Img
              fadeIn='false'
              loading='eager'
              fluid={data.bannerCenter.childImageSharp.fluid}
              objectFit="cover"
              objectPosition="50% 50%"
              alt=""
            />
          </div>
          <div className="hero-small photo right">
            <Img
              fadeIn='false'
              fluid={data.heroRight.childImageSharp.fluid}
              objectFit="cover"
              objectPosition="50% 50%"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="scroll">
        <span>Learn More +</span>
      </div>
      <AniLink cover bg='pink' direction='left' to="/team-gallery">
        <div className="fixed-link">Gallery</div>
        <RightChevron classN="chevron" />
      </AniLink>
    </div>
  )
}

export default HeroGrid;
