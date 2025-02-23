import './Login.css'
import Swal from 'sweetalert2'
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import loginImg from '../../assets/reservation/authentication.png'
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import SocialLink from '../Shared/SocialLink/SocialLink';
const Login = () => {
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/'
    const navigate = useNavigate();
    const { loginUser } = useContext(AuthContext);
    const [disabled, setDisabled] = useState(true);

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleValidate = (event) => {
        const user_captcha_value = event.target.value;
        if (validateCaptcha(user_captcha_value)) {
            setDisabled(false)
        }

        else {
            setDisabled(true)
        }
    }

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        loginUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                Swal.fire({
                    title: "Login successfuly",
                    showClass: {
                        popup: `
                        animate__animated
                        animate__fadeInUp
                        animate__faster
                      `
                    },
                    hideClass: {
                        popup: `
                        animate__animated
                        animate__fadeOutDown
                        animate__faster
                      `
                    }
                });
                navigate(from)
                form.reset()
            })
            .catch(error => {
                console.log(error)
            })

    }

    return (
        <>
            <Helmet>
                <title>bistro boss-login</title>
            </Helmet>
            <div className="hero bg-base-200 min-h-screen login-bg bg-no-repeat bg-cover bg-center">
                <div className="hero-content flex-col lg:flex-row-reverse login-bg bg-no-repeat bg-cover bg-center shadow-2xl my-10">
                    <div className="card w-full md:w-1/2">
                        <h2 className='text-5xl font-semibold font-inter text-center'>Login</h2>
                        <form onSubmit={handleLogin} className="card-body py-5">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <LoadCanvasTemplate className='w-full' />
                                </label>
                                <input type="text" name='captcha' onBlur={handleValidate} placeholder='Type Here' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <input disabled={false} type="submit" style={{ backgroundColor: '#dbb984' }} className='btn' value="Login" />
                            </div>
                        </form>
                        <p className='text-center'>New here? <Link to='/signup'>Create a new Account</Link></p>
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

export default Login;