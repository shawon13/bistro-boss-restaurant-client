import { useForm } from 'react-hook-form';
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { FaUtensils } from 'react-icons/fa';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import useAxios from '../../../hooks/useAxios';
import Swal from 'sweetalert2';
const image_hosting_key = import.meta.env.VITE_image_hosting_key;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;


const AddItems = () => {
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxios()
    const {
        register,
        handleSubmit,
        reset
    } = useForm()
    const onSubmit = async (data) => {
        console.log(data)
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                "content-type": "multipart/form-data",
            }
        });

        if (res.data.success) {
            const menuItem = {
                name: data.name,
                recipe: data.recipe,
                category: data.category,
                price: parseFloat(data.price),
                image: res.data.data.display_url
            }
            const menuRes = await axiosSecure.post('/menu', menuItem);
            console.log(menuRes.data)
            if (menuRes.data.insertedId) {
                reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} is added to the menu.`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }

        }
    }

    return (
        <section className='bg-white py-10 h-full'>
            <div className='container max-w-screen-lg mx-auto'>
                <div>
                    <SectionTitle subHeading="What's new?" heading={'add an item'}></SectionTitle>
                </div>
                <div style={{ backgroundColor: '#E8E8E8' }} className='w-[800px] h-auto mx-auto p-7'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* recipe name */}
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text capitalize">Recipe Name*</span>
                            </div>
                            <input {...register("name", { required: true })} type="text" placeholder="Type here" className="input input-bordered w-full" />
                        </label>
                        {/* recipe category */}
                        <div className='flex gap-6 my-3'>
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text capitalize">category*</span>
                                </div>
                                <select defaultValue='default' {...register("category", { required: true })} className="select select-bordered w-full">
                                    <option disabled value="default">Select your category</option>
                                    <option>salad</option>
                                    <option>pizza</option>
                                    <option>soups</option>
                                    <option>desserts</option>
                                    <option>drinks</option>
                                </select>
                            </label>
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text capitalize">price*</span>
                                </div>
                                <input {...register("price", { required: true })} type="number" placeholder="price" className="input input-bordered w-full" />
                            </label>
                        </div>
                        {/* recipe details */}
                        <label className="form-control my-3">
                            <div className="label">
                                <span className="label-text capitalize">recipe details*</span>
                            </div>
                            <textarea {...register("recipe", { required: true })} className="textarea textarea-bordered h-40" placeholder="recipe details"></textarea>
                        </label>
                        {/* recipe file */}
                        <div className='my-3'>
                            <input {...register("image", { required: true })} type="file" className="file-input w-full max-w-72" />
                        </div>
                        <button style={{ background: 'linear-gradient(90deg, rgba(131,93,35,1) 0%, rgba(181,129,48,1) 100%)' }} className='btn text-white font-inter'>Add Item <FaUtensils className='mr-2 text-2xl' /></button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default AddItems;