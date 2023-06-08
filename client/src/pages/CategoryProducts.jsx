import React from 'react'
import Layout from '../components/Layout/Layout'
import { useParams } from 'react-router-dom';
import Card from '../components/Card';

const CategoryProducts = () => {
    const { slug } = useParams();
    return (
        <Layout>
            <div>
                <h2 className='text-center text-3xl font-semibold text-slate-500 my-4'>Category Products</h2>
                <div className='grid grid-cols-5 gap-12 px-24'>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </Layout>
    )
}

export default CategoryProducts