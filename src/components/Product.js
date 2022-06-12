import React, { Component } from "react";
import Star from "./Star/Star";

export default class Product extends Component {
  render() {
    const rating = Math.round(this.props.product.rating);
    const RatingArray = new Array(rating).fill(0, 0);
    const star = RatingArray.map((a, index) => {
      return <Star />;
    });
    console.log(star);
    return (
      <>
        <div className="product-img">
          <img src={this.props.product.thumbnail} alt="" />
          <span className="tag">new</span>
        </div>
        <div className="product-listing">
          <div className="content">
            <h1 className="name">{this.props.product.title}</h1>
            <p className="info">{this.props.product.description}</p>
            <p className="price">$ {this.props.product.price}</p>
            <div className="btn-and-rating-box">
              <div className="rating">{star}</div>
              <button className="btn">buy now</button>
            </div>
          </div>
        </div>
      </>
    );
  }
}
