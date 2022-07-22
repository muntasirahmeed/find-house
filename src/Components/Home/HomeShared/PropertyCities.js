import React from "react";
import "../../../styles/css/bootstrap.min.css";
import "../../../styles/css/responsive.css";
import "../../../styles/css/style.css";
import property1 from '../../../styles/images/property/pc1.jpg';
import property2 from '../../../styles/images/property/pc2.jpg';
import property3 from '../../../styles/images/property/pc3.jpg';
import property4 from '../../../styles/images/property/pc4.jpg';
const PropertyCities = () => {
  return (
    // <!-- Property Cities -->
    <section id="property-city" class="property-city pb30">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 offset-lg-3">
            <div class="main-title text-center">
              <h2>Find Properties in These Cities</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-4 col-xl-4">
            <div class="properti_city">
              <div class="thumb">
                <img
                  class="img-fluid w100"
                  src={property1}
                  alt="pc1.jpg"
                />
              </div>
              <div class="overlay">
                <div class="details">
                  <h4>Miami</h4>
                  <p>24 Properties</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-8 col-xl-8">
            <div class="properti_city">
              <div class="thumb">
                <img
                  class="img-fluid w100"
                  src={property2}
                  alt="pc2.jpg"
                />
              </div>
              <div class="overlay">
                <div class="details">
                  <h4>Los Angeles</h4>
                  <p>18 Properties</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-8 col-xl-8">
            <div class="properti_city">
              <div class="thumb">
                <img
                  class="img-fluid w100"
                  src={property3}
                  alt="pc3.jpg"
                />
              </div>
              <div class="overlay">
                <div class="details">
                  <h4>New York</h4>
                  <p>89 Properties</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-xl-4">
            <div class="properti_city">
              <div class="thumb">
                <img
                  class="img-fluid w100"
                  src={property4}
                  alt="pc4.jpg"
                />
              </div>
              <div class="overlay">
                <div class="details">
                  <h4>Florida</h4>
                  <p>47 Properties</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyCities;
