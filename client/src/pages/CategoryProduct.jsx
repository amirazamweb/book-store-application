import React from 'react'
import { useParams } from 'react-router-dom';
import Layout from '../components/Layout/Layout';

const CategoryProduct = () => {
    const { slug } = useParams();
    return (
        <Layout title={`Category - ${slug}`}>
            <div>
                <div>New Arrivals</div>
                <div>Stock Market & Investment</div>
                <div>Bookshelf of Love & Fantasy</div>
                <div>Biographies & Autobiographies</div>
                <div>Mystery & Suspense Novels</div>
            </div>
        </Layout>
    )
}

export default CategoryProduct