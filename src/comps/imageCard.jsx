import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";

class ImageCard extends Component {
  onImgClick = (i) => {
    this.props.onImageSelect(i.urls.regular);
  };

  render() {
    const { image } = this.props;
    return (
      <React.Fragment>
        {/* <!-- Button trigger modal --> */}
        <div
          className="ui segment img-card"
          data-aos="zoom-in-up"
          data-aos-offset="2"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="top-left"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          <img
            onClick={() => this.onImgClick(image)}
            ref={this.imgRef}
            key={image.id}
            src={image.urls.regular}
            alt={image.description}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default ImageCard;
