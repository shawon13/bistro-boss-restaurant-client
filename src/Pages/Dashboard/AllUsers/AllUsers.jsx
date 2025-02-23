
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAxios from "../../../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import { FaUsers } from "react-icons/fa";
import { MdOutlineDeleteForever } from "react-icons/md";
import Swal from "sweetalert2";

const AllUsers = () => {
    const axiosSecure = useAxios()

    const { refetch, data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        },
    })
    const handleDeleteUser = (id) => {
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
                axiosSecure.delete(`/users/${id}`)
                    .then(res => {
                        console.log(res.data)
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            refetch()
                        }
                    })
            }
        });
    }

    const handleAdmin = (user) => {

        axiosSecure.patch(`/users/admin/${user._id}`)
            .then(res => {
                if (res.data.modifiedCount) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${user.name} is an Admin Now`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                    refetch()
                }
            })
    }

    return (
        <div className='py-10 max-w-screen-lg mx-auto'>
            <div>
                <SectionTitle subHeading={'How many?'} heading={'MANAGE ALL USERS'}></SectionTitle>
            </div>
            <div className='bg-white shadow-xl py-10 px-10'>
                <div className='flex items-center justify-between mb-8'>
                    <div>
                        <h2 className='uppercase font-bold text-3xl font-cinzel'>total Users:{users.length}</h2>
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead className='rounded-t-2xl' style={{ backgroundColor: '#D1A054' }}>
                            <tr>
                                <th></th>
                                <th className='text-base font-semibold font-inter text-black uppercase'>name</th>
                                <th className='text-base font-semibold font-inter text-black uppercase'>email</th>
                                <th className='text-base font-semibold font-inter text-black uppercase'>role</th>
                                <th className='text-base font-semibold font-inter text-black uppercase'>action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                users.map((user, index) => <tr key={user._id}>
                                    <th>
                                        <label>
                                            {index + 1}
                                        </label>
                                    </th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <th>
                                        {user.role === 'admin' ? 'Admin' : <button onClick={() => handleAdmin(user)} className="btn rounded-full bg-red-600 text-white w-[50px] h-[50px] p-0 hover:bg-red-600 hover:text-white"><FaUsers className='text-2xl' /></button>}
                                    </th>
                                    <th>
                                        <button onClick={() => handleDeleteUser(user._id)} className="btn rounded-full bg-red-600 text-white w-[50px] h-[50px] p-0 hover:bg-red-600 hover:text-white"><MdOutlineDeleteForever className='text-2xl' /></button>
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

export default AllUsers;