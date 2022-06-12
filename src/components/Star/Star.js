import React, { Component } from "react";
import "./Star.css";
export default class Star extends Component {
  render() {
    return (
      <div className="main-container">
        <div className="inner-content">
          <input type="radio" name="starRating-2" id="star6" />
          <label htmlFor="star6">
            <i className="fa fa-star"></i>
          </label>
        </div>
      </div>
    );
  }
}
