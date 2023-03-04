import axios from 'axios'
import React, { useState, useEffect, Component } from 'react'
import './home.css';

class Mobile extends Component {
  constructor(props){
    super();
    this.state = {
      mobileList :[]
    }
  }
  componentDidMount(){
    this.getMobileList()
  }
  getMobileList = () =>{
    axios.get(`http://localhost:8000/products/type/mob`)
      .then(response => {
        console.log("Before updating the state: ")
        this.setState({mobileList : response.data});
        console.log("Mobile List:- " + response.data)
      })
      .catch(err => console.log(err))
    console.log("After updating the state: "+this.state.mobileList)
  }
  render() {
    return (
      <div>
        <center>Mobile's List</center>
      </div>
    )
  }
}



export default Mobile