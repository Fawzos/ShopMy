import data from "../src/data";

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
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>

        <div className="carousel-inner">
          <div className="carousel-item active">
            {
              <div className="row">
                <div className="col-md-4">
                  <div className="single-box">
                    <div className="img-area">
                      <img src="img/slider1.jpg" alt="" />
                    </div>
                    <div className="img-text">
                      <h2>{data.products[0].name}</h2>
                      <p>{data.products[0].price}</p>
                    </div>
                  </div>
                  <div className="single-box">
                    <div className="img-area">
                      <img src="img/slider1.jpg" alt="" />
                    </div>
                    <div className="img-text">
                      <h2>{data.products[1].name}</h2>
                      <p>{data.products[1].price}</p>
                    </div>
                  </div>
                  <div className="single-box">
                    <div className="img-area">
                      <img src="img/slider1.jpg" alt="" />
                    </div>
                    <div className="img-text">
                      <h2>{data.products[2].name}</h2>
                      <p>{data.products[2].price}</p>
                    </div>
                  </div>
                </div>
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  </div>
</div>;
