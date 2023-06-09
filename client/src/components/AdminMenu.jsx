import React from 'react'
import { Link } from 'react-router-dom'

const AdminMenu = () => {
    return (
        <div className='fixed top-20 left-20'>
            <Link to='/dashboard/admin/profile' ><div className='mb-4 bg-slate-500 text-white px-2 py-1 text-sm'>Profile</div></Link>
            <Link to='/dashboard/admin/create-product'><div className='mb-4 bg-slate-500 text-white px-2 py-1 text-sm'>Create Product</div></Link>
        </div>
    )
}

export default AdminMenu