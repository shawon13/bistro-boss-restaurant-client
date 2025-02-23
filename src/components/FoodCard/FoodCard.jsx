import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import useAxios from "../../hooks/useAxios";
import useCart from "../../hooks/useCart";

const FoodCard = ({ item }) => {
    const [, refetch] = useCart()
    const axiosSecure = useAxios()
    const { name, image, price, recipe } = item;
    const { user } = useAuth();
    const navigate = useNavigate()
    const location = useLocation()
    const handleAddToCart = (food) => {
        console.log(food)
        if (user && user.email) {
            // add to cart
            console.log('add to cart')
            const foodItem = {
                foodId: item._id,
                email: user.email,
                name,
                image,
                price,
                recipe
            }
            axiosSecure.post('/carts', foodItem)
                .then(res => {
                    console.log(res.data)
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: `${name} added to your cart`,
                            showConfirmButton: false,
                            timer: 1500
                        });
                        refetch()
                    }
                })
        }
        else {
            Swal.fire({
                title: "Are you sure?",
                text: "Please Login to Add to the Cart!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, login!"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            });
        }
    }
    return (
        <div key={item._id} className="card bg-base-100 w-auto shadow-xl rounded-none">
            <figure className='rounded-none'>
                <img
                    src={image}
                    className='w-full h-72 rounded-none'
                    alt="chef recommends" />
            </figure>
            <p className="bg-black px-2 py-1 text-sm text-white absolute right-3 top-3">${price}</p>
            <div className="card-body text-center p-5">
                <h2 className="card-title justify-center font-inter text-2xl">{name}</h2>
                <p className='font-inter text-sm'>{recipe}</p>
                <div className="card-actions justify-center">
                    <button onClick={() => handleAddToCart(item)} className="btn uppercase border-b border-t-0 border-l-0 border-r-0 add-btn" style={{ backgroundColor: '#e8e8e8', color: '#BB8506', borderColor: '#BB8506' }}>add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;