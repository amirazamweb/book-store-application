import { AiFillStar } from 'react-icons/ai';

const Card = () => {
    return (
        <div className='bg-slate-100 rounded hover:bg-slate-200 cursor-pointer group'>
            <div className='w-full'>
                <img
                    src="https://d34a0mln2492j4.cloudfront.net/unsigned/resize:fit:408:622:0/gravity:sm/plain/https%3A%2F%2Fimage-hub.reproindialtd.com%2F9789815017908.jpg"
                    alt="card-img"
                    className='w-full rounded' />
            </div>
            <div className='px-2 text-center py-1'>
                <div className='flex justify-center gap-2 mt-3 text-green-400'>
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                </div>
                <h4 className='font-semibold text-slate-600'>Why Ami I like this</h4>
                <p className='text-base text-slate-500'>Natalia Rachaeil</p>
                <div className='flex justify-around items-center my-2'>
                    <strong className='text-sky-500'>&#8377;689</strong>
                    <p className='bg-green-500 rounded text-white px-2'>In Stock</p>
                </div>

                <div className='hidden group-hover:block my-1'>
                    <div className='flex justify-around'>
                        <button className='bg-slate-500 rounded px-2 py-1 text-white text-sm'>Details</button>
                        <button className='bg-cyan-500 rounded px-2 py-1 text-white text-sm'>Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;