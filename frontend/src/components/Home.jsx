import './home.css'
import axios from 'axios'
import React, { Component } from 'react'
import Cart from './Cart';
import { Card, Button, CardGroup, Row, Col } from "react-bootstrap";
import Product from './Product';
import Mobile from './Mobile';

class Home extends Component {
  constructor(props) {
    super(props);
    const URL = "http://localhost:8000/products"
    this.state = {
      products: [],
      cart: [],
      cartModal: false
    }
    console.log("Props Data in constructor Home Screen", this.props)
    this.addToCart = this.addToCart.bind(this);
    this.showHandler = this.showHandler.bind(this)
  }


  componentDidMount() {
    this.getProducts()
  }

  addToCart = (id) => {
    this.setState({ cartModal: !this.state.cartModal })
    axios.get(`${URL}/cart/${id}`)
      .then(response => {
        this.setState((prevCart) => { cart: prevCart.cart.concat([response.data]) })
      })

  }

  getCartDetails = () => {
    axios.get("http://localhost:8000/cart/")
      .then(response => {
        this.setState({ cart: response.data })
        console.log(this.state.cart)
      })
      .catch(err => {
        console.log(err);
      })
  }

  getProducts = () => {
    axios.get("http://localhost:8000/products")
      .then(response => {
        this.setState({ products: response.data })
        console.log(this.state.products)
      })
      .catch(err => {
        console.log(err);
      })
  }

  showHandler = () => {
    this.setState({ cartModal: !this.state.cartModal })
  }

  closeHnadler = () => {
    this.setState({ cartModal: false })
  }
  render() {
    if (this.props === 'Mobiles') {
      return (
        <Mobile />
      )
    } else {
      return (
        <>
          <Row>
            {this.state.products &&
              this.state.products.map((products, index) => (
                <Col sm={12} md={6} lg={4} xl={3} key={index}>
                  <Product product={products} />
                </Col>
              ))}
          </Row>
        </>
      )
    }
  }
}

export default Home