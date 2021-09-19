import React, { useState, useEffect } from "react";
import generateSliderData from "../helpers/generateSliderDataHelper";

function Slider(props) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const sliderScheme = generateSliderData(props.data?.products);

    setItems(sliderScheme);
  }, [props.data]);

  return (
    <div className="container slider">
      <div className="row">
        <div className="col-md-12">
          <div
            id="carouselExampleIndicators"
            class="carousel slide"
            data-ride="carousel"
          >
            <ol class="carousel-indicators">
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="0"
                className="active"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="1"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="2"
              ></li>
            </ol>
            <div className="carousel-inner">
              {items.map((item, i) => {
                if (i === 0) {
                  return (
                    <div className="carousel-item active">
                      <div className="row">
                        {item.map((productItem) => {
                          return (
                            <div className="col-md-4">
                              <div className="single-box">
                                <div className="img-area">
                                  <img src="img/slider1.jpg" alt="" />
                                </div>
                                <div className="img-text">
                                  <h2>{productItem.name}</h2>
                                  <p>{productItem.price}</p>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                } else {
                  return (
                    <div className="carousel-item">
                      <div className="row">
                        {item.map((productItem) => {
                          return (
                            <div className="col-md-4">
                              <div className="single-box">
                                <div className="img-area">
                                  <img src="img/slider1.jpg" alt="" />
                                </div>
                                <div className="img-text">
                                  <h2>{productItem.name}</h2>
                                  <p>{productItem.price}</p>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                }
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider;
