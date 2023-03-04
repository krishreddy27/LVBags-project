import React from 'react'
import { Button, Card } from "react-bootstrap";
import Rating from './Rating';
const Product = ({ product }) => {
    return (
        <>
            <Card className='my-3 p-3 rounded'>
                <a href={`/product/${product._id}`}>
                    <Card.Img src={product.image}
                        variant='top'
                        width={170}
                        height={170} 
                        margin={20}/>
                </a>
                <Card.Body>
                    <a href={`/product/${product._id}`}>
                        <Card.Title as='div'>
                            <strong>{product.productName}</strong>
                        </Card.Title>
                    </a>
                    <Card.Text as='div'>
                        <div className='my-3'>
                            {product.description}
                        </div>
                    </Card.Text>
                    <Card.Text>${product.price}</Card.Text>
                    <Rating />
                    <br />
                    <div className='py-2'>
                        <Button>Add To Cart</Button>
                    </div>
                </Card.Body>
            </Card>
        </>
    )
}

export default Product