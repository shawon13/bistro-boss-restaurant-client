
import useCart from '../../../hooks/useCart';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { MdOutlineDeleteForever } from "react-icons/md";
import Swal from 'sweetalert2';
import useAxios from '../../../hooks/useAxios';
import { Link } from 'react-router-dom';
const Cart = () => {
    const [cart, refetch] = useCart();
    const totalPrice = cart.reduce((prePrice, currentPrice) => {
        return prePrice + currentPrice.price;
    }, 0)

    const axiosSecure = useAxios();
    const handleDelete = (id) => {
        console.log(id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/carts/${id}`)
                    .then(res => {
                        console.log(res.data)
                        if (res.data.deletedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }
    return (
        <div className='py-10 max-w-screen-lg mx-auto'>
            <div>
                <SectionTitle subHeading={'my cart'} heading={'wanna add more'}></SectionTitle>
            </div>
            <div className='bg-white shadow-xl py-10 px-10'>
                <div className='flex items-center justify-between mb-8'>
                    <div>
                        <h2 className='uppercase font-bold text-3xl font-cinzel'>total orders:{cart.length}</h2>
                    </div>
                    <div>
                        <h2 className='uppercase font-bold text-3xl font-cinzel'>total price:${totalPrice.toFixed(2)}</h2>
                    </div>
                    <div>
                        {
                            cart.length ? <Link to='/dashboard/payment'><button className='btn font-cinzel text-black' style={{ backgroundColor: '#D1A054' }}>pay</button></Link> : <button disabled className='btn font-cinzel text-black' style={{ backgroundColor: '#D1A054' }}>pay</button>
                        }
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead className='rounded-t-2xl' style={{ backgroundColor: '#D1A054' }}>
                            <tr>
                                <th></th>
                                <th className='text-bse font-semibold font-inter text-black uppercase'>item image</th>
                                <th className='text-bse font-semibold font-inter text-black uppercase'>item name</th>
                                <th className='text-bse font-semibold font-inter text-black uppercase'>price</th>
                                <th className='text-bse font-semibold font-inter text-black uppercase'>action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                cart.map((item, index) => <tr key={item._id}>
                                    <th>
                                        <label>
                                            {index + 1}
                                        </label>
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src={item.image}
                                                        alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {item.name}
                                    </td>
                                    <td>${item.price}</td>
                                    <th>
                                        <button onClick={() => handleDelete(item._id)} className="btn rounded-full bg-red-600 text-white w-[50px] h-[50px] p-0 hover:bg-red-600 hover:text-white"><MdOutlineDeleteForever className='text-2xl' /></button>
                                    </th>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Cart;