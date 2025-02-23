
import { useLoaderData } from 'react-router-dom';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { useForm } from 'react-hook-form';
import useAxios from '../../../hooks/useAxios'
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import Swal from 'sweetalert2';
import { useEffect, useState } from 'react';

const image_hosting_key = import.meta.env.VITE_image_hosting_key;
const image_hostion_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key} `;

const UpdateItems = () => {

    const { name, price, category, recipe, _id, image: existingImage } = useLoaderData();
    const axiosPublic = useAxiosPublic()
    const axiosSecure = useAxios()
    const {
        register,
        handleSubmit,
        reset,
        watch
    } = useForm({
        defaultValues: {
            name,
            price,
            category,
            recipe,
            image: null
        }
    })
    const [loading, setLoading] = useState(false);
    const [isChanged, setIsChanged] = useState(true);
    const [previewImage, setPreviewImage] = useState(existingImage);

    const formValues = watch();

    useEffect(() => {
        const setIsFormChanged =
            formValues.name !== name ||
            formValues.price !== price ||
            formValues.category !== category ||
            formValues.recipe !== recipe ||
            (formValues.image && formValues.image[0]);

        setIsChanged(setIsFormChanged);
    }, [formValues, name, price, category, recipe]);


    const onSubmit = async (data) => {
        setLoading(true);
        let imageUrl = existingImage;
        if (data.image && data.image[0]) {
            const imageFile = { image: data.image[0] };
            const res = await axiosPublic.post(image_hostion_api, imageFile, {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            });
            if (res.data.success) {
                imageUrl = res.data.data.display_url;
            }
        }
        const menuItem = {
            name: data.name,
            category: data.category,
            price: parseFloat(data.price),
            recipe: data.recipe,
            image: imageUrl
        };

        // Update the menu item
        const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);
        setLoading(false);
        if (menuRes.data.modifiedCount > 0) {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${data.name} is updated to the menu.`,
                showConfirmButton: false,
                timer: 1500
            });
            reset(menuItem);
            setPreviewImage(imageUrl)
            setIsChanged(false);
        }
    }

    return (
        <section className='bg-white py-10 h-full'>
            <div className='container max-w-screen-lg mx-auto'>
                <div>
                    <SectionTitle heading={'update item'} subHeading={'update info'}></SectionTitle>
                </div>
                <div style={{ backgroundColor: '#E8E8E8' }} className='w-[800px] h-auto mx-auto p-7'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* recipe name */}
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text capitalize">Recipe Name*</span>
                            </div>
                            <input defaultValue={name} {...register("name", { required: true })} type="text" placeholder="Type here" className="input input-bordered w-full" />
                        </label>
                        {/* recipe category */}
                        <div className='flex gap-6 my-3'>
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text capitalize">category*</span>
                                </div>
                                <select defaultValue={category} {...register("category", { required: true })} className="select select-bordered w-full">
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
                                <input defaultValue={price} {...register("price", { required: true })} type="number" placeholder="price" className="input input-bordered w-full" />
                            </label>
                        </div>
                        {/* recipe details */}
                        <label className="form-control my-3">
                            <div className="label">
                                <span className="label-text capitalize">recipe details*</span>
                            </div>
                            <textarea defaultValue={recipe} {...register("recipe", { required: true })} className="textarea textarea-bordered h-40" placeholder="recipe details"></textarea>
                        </label>

                        {/* Recipe Image */}
                        <div className="my-3">
                            {previewImage && (
                                <div className="mb-3">
                                    <img src={previewImage} alt="Preview" className="w-40 h-40 object-cover rounded-lg shadow-md" />
                                </div>
                            )}
                            <input {...register("image")} type="file" className="file-input w-full max-w-72" />
                        </div>
                        <button
                            disabled={!isChanged || loading} style={{ background: 'linear-gradient(90deg, rgba(131,93,35,1) 0%, rgba(181,129,48,1) 100%)' }} className='btn text-uppercase text-white font-inter'
                        >
                            {loading ?
                                <>
                                    <span className='text-white'>Updating</span>
                                    <span className="loading loading-spinner loading-lg text-white"></span> {/* Icon or spinner */}
                                </>
                                :
                                <span className='text-white'>Update Item</span>
                            }</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default UpdateItems;