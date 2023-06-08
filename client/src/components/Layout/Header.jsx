import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { FaUserAlt } from 'react-icons/fa';
import { BsCartFill } from 'react-icons/bs';
import toast from 'react-hot-toast';
import logo from '../../images/logo.png'
import { useAuth } from '../../context/auth';

const Header = () => {

    const [auth, setAuth] = useAuth();
    const [showMenu, setShowMenu] = useState(false);
    const navigate = useNavigate();

    // logout handler

    const logoutHandler = () => {
        setAuth({ ...auth, user: null, token: '' });
        localStorage.removeItem('bookstore_auth');
        toast.success('Logout sucessfully');
        setTimeout(() => navigate('/login'), 0);
    }

    return (
        <header className='sticky shadow-md h-12 md:h-16 w-full px-1 md:px-8 top-0 bg-white z-10'>
            <div className='flex items-center h-full justify-between'>
                <div className='h-6 md:h-12'>
                    <Link to='/'><img src={logo} alt="logo" className='h-full' /></Link>
                </div>
                <div className='flex items-center'>
                    <input type="text"
                        className='bg-slate-200 px-2 py-2 focus-within:outline-slate-400 rounded text-sm w-64'
                        placeholder='Search books, authers, publishers...' />
                    <button className='bg-sky-600 text-sm py-2 px-2.5 ml-2 rounded text-white'>Search</button>
                </div>
                <div className='flex items-center gap-3 md:gap-8'>
                    <nav className='text-sm md:text-base flex items-center gap-2 md:gap-10'>
                        <NavLink to='/'>Home</NavLink>
                        <NavLink to='/menu'>Category</NavLink>
                        <NavLink to='/about'>About</NavLink>
                        <NavLink to='/contact'>Contact</NavLink>
                    </nav>
                    <div className='text-slate-600 relative md:text-lg'>
                        <BsCartFill />
                        <div
                            className='absolute -top-2 -right-2 bg-red-500 text-white m-0 p-0 rounded-full h-4 w-4 text-xs text-center'>1</div>
                    </div>
                    <div className='text-slate-600 text-xs cursor-pointer relative'>
                        {auth?.token ? (
                            <img
                                src={`${process.env.REACT_APP_SERVER_DOMAIN}/api/v1/auth//profile-image/${auth.user?._id}`}
                                alt='profile-image'
                                className='w-6 h-6 rounded-full'
                                onClick={() => setShowMenu(showMenu === true ? false : true)} />
                        ) :
                            (
                                <Link to='/login'><FaUserAlt className='w-5 h-5' /></Link>
                            )}
                        {showMenu && <div className='absolute top-7 right-0 whitespace-nowrap drop-shadow-md shadow-md bg-white px-1 text-sm rounded'>

                            {auth?.token &&
                                (<>
                                    <Link to="/"
                                        className='hover:text-red-500 text-center font-bold'>
                                        <p>Dashboard</p>
                                    </Link>
                                    <p
                                        className='my-2 bg-red-500 px-2 text-white'
                                        onClick={logoutHandler}>Logout</p>
                                </>)
                            }

                        </div>}
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header