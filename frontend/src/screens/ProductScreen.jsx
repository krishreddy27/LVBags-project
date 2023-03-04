import React from 'react'
import { Container } from 'react-bootstrap'
import {Link} from 'react-router-dom'

export const ProductScreen = () => {
    return (
        <>
            <main>
                <Container>
                    Detail of Product present here
                    <h1>This page is in maintanace. We will notify you, once done from our side</h1>
                    <span><Link to='/login'>Register here to notify</Link></span>
                </Container>
            </main>
        </>
    )
}
