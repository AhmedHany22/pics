import React, { Component } from "react";
import ImageCard from "./imageCard";

class ImagesList extends Component {
  state = { cImage: "" };

  onSelectImage = (i) => {
    this.setState({ cImage: i });
    console.log(this.state.cImage);
  };

  render() {
    const { images } = this.props;
    return (
      <div className="ui mansory">
        {images.map((image) => (
          <ImageCard
            image={image}
            key={image.id}
            onImageSelect={this.onSelectImage}
          />
        ))}
        {/* <!-- Modal --> */}
        <div
          tabIndex="-1"
          id="exampleModal"
          aria-hidden="true"
          className="modal fade modal-adjust"
          aria-labelledby="exampleModalLabel"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-body">
                <div
                  id="carouselExampleControls"
                  className="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-inner">
                    {images.map((item) => (
                      <div
                        key={item.id}
                        className={
                          item.urls.regular === this.state.cImage
                            ? "carousel-item active"
                            : "carousel-item"
                        }
                      >
                        <img
                          src={item.urls.regular}
                          className="d-block carousel-image"
                          alt={item.description}
                        />
                      </div>
                    ))}
                  </div>
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleControls"
                    data-bs-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleControls"
                    data-bs-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ImagesList;
