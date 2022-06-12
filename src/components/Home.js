import React, { Component } from "react";
import Product from "./Product";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ ...data });
      });
  }

  render() {
    const { products } = this.state;

    return (
      <div className="product">
        {products?.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    );
  }
}
