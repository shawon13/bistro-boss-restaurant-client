import { useContext } from 'react';
import loginImg from '../../assets/reservation/authentication.png'
import { AuthContext } from '../../Provider/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Helmet } from 'react-helmet';
import Swal from 'sweetalert2'
import SocialLink from '../Shared/SocialLink/SocialLink';
import useAxiosPublic from '../../hooks/useAxiosPublic';


const SignUp = () => {
    const axiosPublic = useAxiosPublic()
    const { createUser, updateUser, logOut } = useContext(AuthContext);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const navigate = useNavigate()
    const onSubmit = data => {
        createUser(data.email, data.password)
            .then(result => {
                const signupUser = result.user;
                console.log(signupUser)
                updateUser(data.name, data.url)
                    .then(() => {
                        console.log('user profile info updated');
                        logOut()
                            .then(() => {
                                navigate('/login')
                            })
                            .catch(error => console.log(error.message))
                        //user add database
                        const userInfo = {
                            email: signupUser.email,
                            name: signupUser.displayName
                        }
                        axiosPublic.post('/users', userInfo)
                            .then(res => {
                                console.log(res.data)
                            })
                            .catch(error => console.log(error))
                    })
                    .catch(error => {
                        console.log(error.message)
                    })
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Successfuly Sign Up",
                    showConfirmButton: false,
                    timer: 1500
                });
                reset();
            })
            .catch(error => {
                console.log(error.message)
            })
    };



    return (
        <>
            <Helmet>
                <title>bistro boss-sign up</title>
            </Helmet>
            <div className="hero bg-base-200 min-h-screen login-bg bg-no-repeat bg-cover bg-center">
                <div className="hero-content flex-col lg:flex-row-reverse login-bg bg-no-repeat bg-cover bg-center shadow-2xl my-10">
                    <div className="card w-full md:w-1/2">
                        <h2 className='text-5xl font-semibold font-inter text-center'>SignUP</h2>
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="name" {...register("name", { required: true })} name='name' className="input input-bordered" />
                                {errors.name?.type === 'required' && <p className='text-red-500' role="alert">Name is required</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo Url</span>
                                </label>
                                <input type="url" placeholder="url" {...register("url", { required: true })} name='url' className="input input-bordered" />
                                {errors.name?.type === 'required' && <p className='text-red-500' role="alert">Photo URL is required</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" {...register("email", { required: true })} name='email' className="input input-bordered" />
                                {errors.email?.type === 'required' && <p className='text-red-500' role="alert">Email is required</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 15,
                                    pattern: /(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])/
                                })} name='password' className="input input-bordered" />
                                {errors.password?.type === 'required' && <p className='text-red-500' role="alert">Password is required</p>}
                                {errors.password?.type === 'minLength' && <p className='text-red-500' role="alert">Password must be six characters</p>}
                                {errors.password?.type === 'maxLength' && <p className='text-red-500' role="alert">Password must be less than fifteen</p>}
                                {errors.password?.type === 'pattern' && <p className='text-red-500' role="alert">Password must have one uppercase, one lowercase, one number and one special characters</p>}
                            </div>
                            <div className="form-control mt-3">
                                <input type="submit" style={{ backgroundColor: '#dbb984' }} className='btn' value="Sign UP" />
                            </div>
                        </form>
                        <p className='text-center'>Already register?<Link to='/login'>Go to Login</Link></p>
                        <SocialLink></SocialLink>
                    </div>
                    <div className="text-center md:w-1/2 lg:text-left">
                        <img src={loginImg} alt="" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;