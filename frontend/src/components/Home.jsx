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
    const URL = "http://localhost:8000/bags"
    this.state = {
      bags: [],
      cart: [],
      cartModal: false
    }
    console.log("Props Data in constructor Home Screen", this.props)
    this.addToCart = this.addToCart.bind(this);
    this.showHandler = this.showHandler.bind(this)
  }


  componentDidMount() {
    this.getBagsData()
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

  getBagsData = () => {
    axios.get("http://localhost:8000/bags/")
      .then(response => {
        this.setState({ bags: response.data })
        console.log("Method: getBagsData entering"+this.state.bags)
      })
      .catch(err => {
        console.log(err);
      })
  }

  showHandler = () => {
    this.setState({ cartModal: !this.state.cartModal })
  }

  closeHandler = () => {
    this.setState({ cartModal: false })
  }
  render() {
      console.log("Home Component")
      return (
        <>
          <Row>
            {this.state.bags &&
              this.state.bags.map((bag, index) => (
                <Col sm={12} md={6} lg={4} xl={3} key={index}>
                  <Product product={bag}/>
                </Col>
              ))}
          </Row>
        </>
      )
  }
}

export default Home