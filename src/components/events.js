import React, { useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import gsap from "gsap"

import Img from "gatsby-image"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import { StravaIcon } from "./icons"

const eventsInfo = [
  {
    title: "Tahoe Burrito Run",
    picIdx: 0,
    day: "Thursdays",
    time: "7:00AM",
    startLoc: "Bijou Park",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae tortor vestibulum, pulvinar nibh interdum, molestie lorem. Maecenas suscipit lectus quis dolor euismod, laoreet fermentum enim rhoncus.",
    leader: {
      name: "Monica Morariu",
      picIdx: 1,
      insta: "plantpoweredviata",
    },
  },
  {
    title: "Malibu Onehundred",
    picIdx: 2,
    day: "Saturdays",
    time: "7:00AM",
    startLoc: "Primo Passo Coffee",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae tortor vestibulum, pulvinar nibh interdum, molestie lorem. Maecenas suscipit lectus quis dolor euismod, laoreet fermentum enim rhoncus.  ",
    leader: {
      name: "Taylor Dawson",
      picIdx: "3",
      insta: "taylorwdawson",
    },
  },
  {
    title: "Hai Van Horses",
    picIdx: 4,
    day: "Sundays",
    time: "6:00AM",
    startLoc: "CVBD",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae tortor vestibulum, pulvinar nibh interdum, molestie lorem. Maecenas suscipit lectus quis dolor euismod, laoreet fermentum enim rhoncus.",
    leader: {
      name: "James Walker",
      picIdx: 5,
      insta: "phronetic27",
    },
  },
]

const EventsSection = ({ isMobile }) => {
  const data = useStaticQuery(graphql`
    query {
      eventImages: allFile(
        filter: {
          extension: { regex: "/(jpg|png|jpeg)/" }
          relativeDirectory: { eq: "event-images" }
        }
        sort: { fields: base, order: ASC }
      ) {
        edges {
          node {
            id
            childImageSharp {
              fluid(quality: 75) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    gsap.from(".event-col", 1.5, {
      scrollTrigger: {
        trigger: ".events",
        scrub: 1,
        start: "top bottom+=50%",
        end: "top bottom-=30%",
      },
      stagger: {
        amount: .5
      },
      y: "15vh",
      opacity: 0
    })
  }, [])

  return (
    <>
      {isMobile && (
        <div className="events-header">
          {/* <span>RIDE</span> */}
          <span>RIDE WITH US</span>
        </div>
      )}
      <section className="events">
        {eventsInfo.map(ev => {
          return (
            <div className="event-col">
              <div className="map-img">
                <Img
                  fadeIn
                  fluid={
                    data.eventImages.edges[ev.picIdx].node.childImageSharp.fluid
                  }
                  objectFit="contain"
                  objectPosition="50% 50%"
                  alt=""
                />
                <StravaIcon classN="event-link" />
              </div>
              <div className="details-flex-wrapper">
                <div className="details">
                  <div className="ride-title">{ev.title}</div>
                  <div className="time-info">
                    {ev.day} | {ev.time}
                  </div>
                  <div className="start">@{ev.startLoc}</div>
                </div>
                <div className="description">
                  <p>{ev.desc}</p>
                </div>
                <div className="leader-info">
                  <div className="leader-img">
                    <Img
                      fadeIn
                      fluid={
                        data.eventImages.edges[ev.leader.picIdx].node
                          .childImageSharp.fluid
                      }
                      objectFit="contain"
                      objectPosition="50% 50%"
                      alt=""
                    />
                  </div>
                  <div className="leader-details">
                    <div className="leader-name">
                      Contact | <span>{ev.leader.name}</span>
                    </div>
                    <div className="insta-handle">
                      <a target="_blank" href={`https://www.instagram.com/${ev.leader.insta}`}>
                        <span>@</span>
                        {ev.leader.insta}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </section>
    </>
  )
}

export default EventsSection
