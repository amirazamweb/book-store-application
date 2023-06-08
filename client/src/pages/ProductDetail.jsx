import React from 'react'
import Layout from '../components/Layout/Layout'
import { useParams } from 'react-router-dom';
import { GrFormAdd, GrFormSubtract } from 'react-icons/gr';
import Card from '../components/Card';

const ProductDetail = () => {
    const { slug } = useParams();
    return (
        <Layout title={slug}>
            <div className='flex gap-20 w-3/4 m-auto mt-12'>
                <div className='w-1/3'>
                    <img src="https://d34a0mln2492j4.cloudfront.net/unsigned/resize:fit:760:1000:0/gravity:sm/plain/https%3A%2F%2Fimage-hub.reproindialtd.com%2F9789815017908.jpg"
                        alt="product-details" className='w-full' />
                </div>
                <div className='w-2/3'>
                    <h1 className='text-4xl font-semi-bold text-slate-500'>Why Am I like This?: Illuminating the traumatized self</h1>
                    <p
                        className='border-solid border-2 border-slate-300 w-1/3 rounded px-2 py-1 my-4 text-slate-500'>English</p>
                    <div className='flex items-center my-5'>
                        <p className='text-slate-500 font-bold text-xl me-8'>Quantity: </p>
                        <div className='flex items-center w-1/5 justify-between text-2xl font-bold'>
                            <GrFormSubtract className='outline outline-2 outline-slate-300 rounded hover:bg-red-500 w-8 h-8' />
                            <span>0</span>
                            <GrFormAdd className='outline outline-2 outline-slate-300 rounded hover:bg-green-500 w-8 h-8' />
                        </div>
                    </div>
                    <div className='border-solid border-2 border-slate-300 w-1/3 rounded px-3 py-1 my-4'>
                        <h4 className='text-slate-500'>Paperback</h4>
                        <p>
                            <span className='text-red-500 font-bold text-xl'>&#8377;699</span>
                            <del className='text-slate-400 mx-1'>&#8377;123</del>
                            <span className='text-green-500'>10% OFF</span>
                        </p>
                    </div>
                    <div className='my-2'>
                        <button className='bg-red-500 text-white rounded px-2 py-2 font-semibold'>GO TO CART</button>
                    </div>
                    <div>
                        <h3 className='text-xl font-semibold text-salte-600 my-2'>Description</h3>
                        <p className='text-sm text-slate-500'>Rohan Khosla’s social media page showcases a picture-perfect life. To the world he is professionally successful married to a charming wife and has a doting son. Rohan has achieved everything that was supposed to make him happy but a storm is brewing inside him. He is disillusioned with the purpose of family career society and life. Even after leading a life that followed all conventions set by society like a sheep Rohan’s destiny has changed dramatically every ten years since his birth. At forty Rohan is at a crossroads; this time he will rebel against the norms. No longer he will remain the sheep but become a tiger―a solitary predator who lives an uninhibited life. Wandering through cities indulging in debauchery trying new professions finding love navigating precarious situations and facing life’s ugliest truths up close ―our protagonist lives through a lifetime’s worth of experience in a decade. Can he become the master of his destiny? Will he find answers to the existential questions at the core of his angst- the truth about his real nature and the purpose of his life?</p>
                    </div>
                </div>
            </div>

            {/* similar products */}
            <hr className='my-3' />
            <div>
                <h2 className='text-center text-3xl font-semibold text-slate-500 my-4'>Similar Products</h2>
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

export default ProductDetail