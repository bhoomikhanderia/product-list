import React, { Component } from "react";
import "./App.css";
import Header from "./components/header";
import productsApi from "./api/productsApi";
import ProductlistHeading from "./components/productlistHeading/productlistHeading";
import ProductSorting from "./components/productSorting/productSorting";
import { ascendingOrder, descendingOrder } from "./utils";
import Product from "./components/product/product";

class App extends Component {
  constructor(props) {
    super(props);

    // Set default state
    this.state = {
      metadata: [],
      products: []
    };
  }

  onChange(e) {
    if (e.target.value === "low-high") {
      let productSort = ascendingOrder(this.state.products);
      this.setState({ products: productSort });
    } else {
      let productSort = descendingOrder(this.state.products);
      this.setState({ products: productSort });
    }
  }

  componentDidMount() {
    productsApi().then(({ metadata, products }) =>
      this.setState({ metadata, products })
    );
  }

  render() {
    const { metadata, products } = this.state;
    return (
      <div className="App">
        <Header />
        <div className="container">
          <div className="inner-content">
            <div className="metadata">
              <ProductlistHeading metadata={metadata} />
            </div>
            <div className="prosorting">
              <ProductSorting onChange={this.onChange.bind(this)} />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="inner-content">
            <div className="product-grid">
              {products.map((product, id) => (
                <Product key={id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
