import React, { Component, useState } from 'react'
import './AddProducts.css';
import axios from 'axios';



function AddProducts() {
    const [state, setState] = useState({
        productName: "",
        productType: "",
        model: "",
        price: "",
        description: "",
        date: "",
        image: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setState((prevState) => {
            return {
                ...prevState,
                [name]: value,
            };
        });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {

            productName: state.productName,
            productType: state.productType,
            price: state.price,
            description: state.description,
            date: new Date(),
            image: state.image,
            model: state.model

        }
        console.log("Submit Function:-", data)
        axios.post("http://localhost:8000/products/addProducts", data)
            .then(res => {
                console.log("uqsfdbf id" + res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }
    return (
        <div>
            <div className='inputCard'>
                <label>ProductName</label>
                <input type="text" name="productName" value={state.productName} onChange={handleChange} />
                <label>ProductType</label>
                <select name="productType" value="Mobiles" onChange={handleChange}>
                    <option value="Mobiles">Mobiles</option>
                    <option value="Watches">Watches</option>
                    <option value="Chairs">Chairs</option>
                    <option value="Speakers">Speakers</option>
                    <option value="Bluetooth">Bluetooth</option>
                    <option value="Furniture">Furniture</option>
                </select>
                <label>
                    Model
                </label>
                <input type="text" name="model" value={state.model} onChange={handleChange} />
                <label>
                    Price
                </label>
                <input type="number" name="price" value={state.price} onChange={handleChange} />
                <label>Description</label>
                <input type="text" name="description" value={state.description} onChange={handleChange} />
                <label>Image Url</label>
                <input type="text" name="image" value={state.image} onChange={handleChange} />
                <button className="submit" onClick={handleSubmit}>Add Product</button>
            </div>
        </div>
    )
}

export default AddProducts;
