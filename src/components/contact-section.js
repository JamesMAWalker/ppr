import React from "react"

import { ScrollIcon } from "./icons"

const ContactSection = () => {

  return (
    <div className="video-section">
      <div className="absolute-container">
        <div className="flex-container">
          <div className="content">
            <video
              type="video/mp4"
              muted
              autoPlay
              loop
              src="https://res.cloudinary.com/jameswalker-work/video/upload/v1610003645/ppr-wilson_axrsfy.mp4"
            />
            <div className="contact-form">
              <div className="contact-blurb">
                <h2 className="contact-header">GET IN TOUCH</h2>
                <p className="blurb-text">
                  Plant Power Racing may be a bike racing team, but we’re
                  committed to helping wherever and however we can. If you have
                  a cause we can help with, we want to hear from you.
                  <br />
                  <br />
                  Want to join us in our mission? We want to hear from you too!
                  Get at us.
                </p>
              </div>
              <div className="contact-input">
                <div className="shrink-wrapper">
                  <ScrollIcon classN='submit-arrow'/>
                  <input className="email-input" id="email-input" type="text" />
                  <label className="email-label" htmlFor="email-input">
                    EMAIL ADDRESS
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactSection
