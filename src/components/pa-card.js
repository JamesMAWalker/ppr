import React, { useEffect, useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import gsap from "gsap"

import Img from "gatsby-image"

import { PALogo, PAWordMarkWhite } from "../components/Logo"

const PACard = () => {
  const [cardOpen, setCardOpen] = useState(false)

  const handleCardOpen = () => {
    setCardOpen(!cardOpen)
  }

  const handleKeypress = (e) => {
    if (e.keyCode === 13) {
      handleCardOpen()
    }
  } 

  useEffect(() => {
    gsap.config({
      nullTargetWarn: false,
    })
    gsap.from(".pa-modal", 0.5, {
      opacity: 0,
      x: "10vw",
    })
  }, [cardOpen])

  const data = useStaticQuery(graphql`
    query {
      paImages: allFile(
        filter: { relativeDirectory: { eq: "pa-images" } }
        sort: { fields: base, order: ASC }
      ) {
        edges {
          node {
            base
            childImageSharp {
              fluid(maxWidth: 150, quality: 80) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `)

  

  return (
    <>
      <div
        className={`PA-square ${cardOpen ? "open" : ""}`}
        tabIndex={0}
        role="button"
        onClick={handleCardOpen}
        onKeyDown={handleKeypress}
      >
        <PALogo />
      </div>
      {cardOpen && (
        <div className="pa-modal">
          {cardOpen && (
            <>
              <div
                className="close-btn"
                tabIndex={0}
                role="button"
                onClick={handleCardOpen}
                onKeyDown={handleKeypress}
              >
                ▶
              </div>
              <div className="pa-img">
                <PAWordMarkWhite />
                <Img
                  fadeIn
                  loading="eager"
                  fluid={data.paImages.edges[0].node.childImageSharp.fluid}
                  objectFit="cover"
                  objectPosition="50% 100%"
                  alt="plant athletic apparel clad people"
                />
              </div>
              <div className="modal-content">
                <div className="modal-blurb">
                  <div className="p1">
                    Plant Power Racing is proud to to partner with Plant
                    Athletic. We share their commitment to a more vegan world,
                    as well as love and support them as people.
                  </div>
                  <br />
                  <div className="p2">
                    Check out their store to support ethically and sustainably
                    produced athletic apparel.
                  </div>
                </div>
                <div className="certifications">
                  <img
                    src={data.paImages.edges[1].node.childImageSharp.fluid.src}
                    alt=""
                  />
                  <img
                    src={data.paImages.edges[2].node.childImageSharp.fluid.src}
                    alt=""
                  />
                  <img
                    src={data.paImages.edges[3].node.childImageSharp.fluid.src}
                    alt=""
                  />
                  <img
                    src={data.paImages.edges[4].node.childImageSharp.fluid.src}
                    alt=""
                  />
                </div>
                <div className="hashtag">#BE THE PROOF</div>
                <a
                  className="toPA-button"
                  href="https://plantathletic.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  VISIT PLANT ATHLETIC
                </a>
              </div>
            </>
          )}
        </div>
      )}
    </>
  )
}

export default PACard
