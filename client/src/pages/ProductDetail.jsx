import React from 'react'
import Layout from '../components/Layout/Layout'
import { useParams } from 'react-router-dom'

const ProductDetail = () => {
    const { slug } = useParams();
    return (
        <Layout title={slug}>
            <h2>Product Detail</h2>
        </Layout>
    )
}

export default ProductDetail