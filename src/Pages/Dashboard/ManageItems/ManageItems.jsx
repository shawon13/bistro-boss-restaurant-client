import { FaEdit } from "react-icons/fa";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import { MdOutlineDeleteForever } from "react-icons/md";
import Swal from "sweetalert2";
import useAxios from "../../../hooks/useAxios";
import { Link } from "react-router-dom";

const ManageItems = () => {
    const [menu, , refetch] = useMenu()

    const axiosSecure = useAxios()
    const handleDeleteItem = (item) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/menu/${item._id}`);

                if (res.data.deletedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${item.name} has been deleted.`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            }
        });
    }
    return (
        <section className=' py-10 h-full'>
            <div className='container max-w-screen-lg mx-auto'>
                <SectionTitle heading='manage all items' subHeading='hurry up!'></SectionTitle>
            </div>
            <div className='bg-white shadow-xl py-10 px-10 mx-10'>
                <div className='flex items-center justify-between mb-8'>
                    <div>
                        <h2 className='uppercase font-bold text-3xl font-cinzel'>total items: {menu.length}</h2>
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th className="uppercase dark-color text-sm">item image</th>
                                <th className="uppercase dark-color text-sm">item name</th>
                                <th className="uppercase dark-color text-sm">price</th>
                                <th className="uppercase dark-color text-sm">update</th>
                                <th className="uppercase dark-color text-sm">delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                menu.map((item, index) => <tr key={item._id}>
                                    <td>{index + 1}</td>
                                    <td>
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src={item.image}
                                                    alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {item.name}
                                    </td>
                                    <td>${item.price}</td>
                                    <td>
                                        <Link to={`/dashboard/updateitem/${item._id}`}>
                                            <button className="btn rounded-full bg-yellow-700 text-white w-[50px] h-[50px] p-0 hover:bg-yellow-700 hover:text-white flex justify-center items-center">
                                                <FaEdit className='text-xl' />
                                            </button>
                                        </Link>
                                    </td>
                                    <td>
                                        <button onClick={() => handleDeleteItem(item)} className="btn rounded-full bg-red-600 text-white w-[50px] h-[50px] p-0 hover:bg-red-600 hover:text-white"><MdOutlineDeleteForever className='text-2xl' /></button>
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default ManageItems;