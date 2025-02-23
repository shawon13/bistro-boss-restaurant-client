import { IoMdHome } from "react-icons/io";
import { IoWallet } from "react-icons/io5";
import { MdShoppingCart } from "react-icons/md";
import { FaBook, FaCalendarAlt, FaList, FaUtensils } from "react-icons/fa";
import { MdReviews } from "react-icons/md";
import { FaEnvelope } from "react-icons/fa";
import { IoLockClosedSharp } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";
import { NavLink, Outlet } from 'react-router-dom';
import { HiUserGroup } from "react-icons/hi";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
    const [isAdmin] = useAdmin();
    return (
        <div className='flex'>
            <div className='w-72 min-h-screen bg-orange-300 py-10 px-8'>
                <div className="uppercase mb-5">
                    <h2 className="font-cinzel text-2xl font-bold">bistro boss</h2>
                    <p className="font-cinzel text-base font-bold">restaurent</p>
                </div>
                {
                    isAdmin ? <>
                        <li className="list-none py-3 text-base">
                            <NavLink className="flex items-center capitalize font-cinzel font-medium" to='/dashboard/adminhome'><IoMdHome className='mr-2 text-2xl' />admin home</NavLink>
                        </li>
                        <li className="list-none py-3 text-base">
                            <NavLink className="flex items-center uppercase font-cinzel font-medium" to='/dashboard/additems'><FaUtensils className='mr-2 text-2xl' />add items</NavLink>
                        </li>
                        <li className="list-none py-3 text-base">
                            <NavLink className="flex items-center uppercase font-cinzel font-medium" to='/dashboard/manageitems'><FaList className='mr-2 text-2xl' />manage items</NavLink>
                        </li>
                        <li className="list-none py-3 text-base">
                            <NavLink className="flex items-center uppercase font-cinzel font-medium" to='/dashboard/managebookings'><FaBook className='mr-2 text-2xl' />manage bookings</NavLink>
                        </li>
                        <li className="list-none py-3 text-base">
                            <NavLink className="flex items-center uppercase font-cinzel font-medium" to='/dashboard/allusers'><HiUserGroup className='mr-2 text-2xl' />all users</NavLink>
                        </li>
                    </> : <>
                        <li className="list-none py-3 text-base">
                            <NavLink className="flex items-center capitalize font-cinzel font-medium" to='/dashboard/userhome'><IoMdHome className='mr-2 text-2xl' />user home</NavLink>
                        </li>
                        <li className="list-none py-3 text-base">
                            <NavLink className="flex items-center uppercase font-cinzel font-medium" to='/dashboard/reservation'><FaCalendarAlt className='mr-2 text-2xl' />reservation</NavLink>
                        </li>
                        <li className="list-none py-3 text-base">
                            <NavLink className="flex items-center uppercase font-cinzel font-medium" to='/dashboard/paymenthistory'><IoWallet className='mr-2 text-2xl' />payment history</NavLink>
                        </li>
                        <li className="list-none py-3 text-base">
                            <NavLink className="flex items-center uppercase font-cinzel font-medium" to='/dashboard/mycart'><MdShoppingCart className='mr-2 text-2xl' />my cart</NavLink>
                        </li>
                        <li className="list-none py-3 text-base">
                            <NavLink className="flex items-center uppercase font-cinzel font-medium" to='/dashboard/addreview'><MdReviews className='mr-2 text-2xl' />add review</NavLink>
                        </li>
                        <li className="list-none py-3 text-base">
                            <NavLink className="flex items-center uppercase font-cinzel font-medium" to='/dashboard/mybooking'><FaCalendarAlt className='mr-2 text-2xl' />my booking</NavLink>
                        </li>
                    </>
                }
                <div className="divider border-white"></div>
                <li className="list-none py-3 text-base">
                    <NavLink className="flex items-center uppercase font-cinzel font-medium" to='/'><IoMdHome className='mr-2 text-2xl' />home</NavLink>
                </li>
                <li className="list-none py-3 text-base">
                    <NavLink className="flex items-center uppercase font-cinzel font-medium" to='/menu'><FiMenu className='mr-2 text-2xl' />menu</NavLink>
                </li>
                <li className="list-none py-3 text-base">
                    <NavLink className="flex items-center uppercase font-cinzel font-medium" to='/order/salad'><IoLockClosedSharp className='mr-2 text-2xl' />shop</NavLink>
                </li>
                <li className="list-none py-3 text-base">
                    <NavLink className="flex items-center uppercase font-cinzel font-medium" to='/contact'><FaEnvelope className='mr-2 text-2xl' />contact</NavLink>
                </li>
            </div>
            <div className='flex-1' style={{ backgroundColor: '#f6f6f6' }}>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;