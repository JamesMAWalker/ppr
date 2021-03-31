import React from 'react'
import Img from "gatsby-image"

const GalleryModal = ({ toggleModal, imgSrc }) => {
  return (
    <div className="modal" onClick={toggleModal}>
      <span className="close-button">&#10006;</span>
      <div className="modal-image">
        <Img
          fadeIn
          fluid={imgSrc}
          objectFit="contain"
          objectPosition="50% 50%"
          alt=""
          quality="100"
        />
      </div>
    </div>
  )
}

export default GalleryModal