import React, { useContext } from 'react'
import Layout from '../components/Layout/Layout';
import ImageSlider from '../components/ImageSlider';
import { Select } from 'antd';
import { Option } from 'antd/es/mentions';
import Card from '../components/Card';

const Home = () => {
    return (
        <Layout title={'Book Store'}>
            {/* image slider */}
            <ImageSlider />
            {/* title with filteration */}
            <div className='relative my-8'>
                <div>
                    <h2 className='font-bold text-3xl text-center my-6 text-slate-600'>Your Favourite Books Collection</h2>
                </div>

                <Select
                    placeholder={'Filter By Category'}
                    bordered
                    showSearch
                    className='absolute left-24 top-1 w-60'>
                    <Option value="">New Arrivals</Option>
                    <Option value="">Stock Market & Investment</Option>
                    <Option value="">Bookshelf of Love & Fantasy</Option>
                    <Option value="">Biographies & Autobiographies</Option>
                    <Option value="">Mystery & Suspense Novels</Option>
                </Select>

                <Select
                    placeholder={'Filter By Price'}
                    bordered
                    showSearch
                    className='absolute right-24 top-1 w-60'>
                    <Option value="">&#8377; 1 to 200</Option>
                    <Option value="">&#8377; 201 to 400</Option>
                    <Option value="">&#8377; 401 to 600</Option>
                    <Option value="">&#8377; 601 to 800</Option>
                    <Option value="">&#8377; 801 to 1000</Option>
                    <Option value="">more than &#8377; 1000</Option>
                </Select>
            </div>

            {/*display card */}

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

        </Layout>
    )
}

export default Home