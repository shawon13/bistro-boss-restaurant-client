import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';
import useCart from '../../../hooks/useCart';

const Navber = () => {
    const { user, logOut } = useContext(AuthContext)
    const [cart] = useCart()
    const handleLogOut = () => {
        logOut()
    }
    const navOptions = <>
        <li className=' uppercase font-medium text-sm font-inter'>
            <Link to='/' className='mx-2'>home</Link>
        </li>
        <li className=' uppercase font-medium text-sm font-inter'>
            <Link to='/contact' className='mx-2'>contactus</Link>
        </li>
        <li className=' uppercase font-medium text-sm font-inter'>
            <Link to='/dashboard' className='mx-2'>dashboard</Link>
        </li>
        <li className=' uppercase font-medium text-sm font-inter'>
            <Link to='/menu' className='mx-2'>our menu</Link>
        </li>
        <li className=' uppercase font-medium text-sm font-inter'>
            <Link to='/order/salad' className='mx-2'>our shop</Link>
        </li>
        <li className=' uppercase font-medium text-sm font-inter'>
            <Link to='/secret' className='mx-2'>secret</Link>
        </li>
        {user ? <li onClick={handleLogOut} className=' uppercase font-medium text-sm font-inter'>
            <button className=' uppercase'> Log Out</button>
        </li> :
            <div className='flex items-center'>
                <li className=' uppercase font-medium text-sm font-inter'>
                    <Link to='/login' className='mx-2'>Login</Link>
                </li>
                <li className=' uppercase font-medium text-sm font-inter'>
                    <Link to='/signup' className='mx-2'>SignUp</Link>
                </li>
            </div>
        }
    </>
    return (
        <div className='bg-black bg-opacity-60 fixed z-10 w-full'>
            <div className="navbar max-w-screen-xl mx-auto text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {navOptions}
                        </ul>
                    </div>
                    <Link ><h4 className='text-3xl font-black font-cinzel'>Bistro Boss</h4><span className='text-2xl font-bold font-cinzel'>restaurant</span></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end items-center w-1/4">
                    <div className="flex-none items-center">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <Link to='/dashboard/mycart' className="indicator">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                                <span className="badge badge-sm indicator-item">{cart?.length}</span>
                            </Link>
                        </div>
                        <div className="dropdown dropdown-end ml-8">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img
                                        alt="Tailwind CSS Navbar component"
                                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                </div>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                <li>
                                    <a className="justify-between">
                                        Profile
                                        <span className="badge">New</span>
                                    </a>
                                </li>
                                <li><a>Settings</a></li>
                                <li><a>Logout</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navber;