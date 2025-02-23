
import { FaFacebookF, FaGithub, FaGoogle } from 'react-icons/fa';
import useAuth from '../../../hooks/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
const SocialLink = () => {
    const { googleLogin } = useAuth();

    const location = useLocation();
    const from = location?.state?.form?.pathName || '/';
    const navigate = useNavigate();

    const axiosPublic = useAxiosPublic()
    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                console.log(result.user);
                const userInfo = {
                    email: result.user.email,
                    name: result.user.displayName
                }
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        console.log(res.data)
                    })
                    .catch(error => console.log(error))
                navigate(from)
            })
    }
    return (
        <div className='text-center mt-5'>
            <p>Or sign in with</p>
            <div className='mt-5'>
                <button style={{ borderColor: "#d2d2d2" }} className="btn ml-3 border-2 rounded-full">
                    <FaFacebookF />
                </button>
                <button onClick={handleGoogleLogin} style={{ borderColor: "#d2d2d2" }} className="btn ml-3 border-2 rounded-full">
                    <FaGoogle />
                </button>
                <button style={{ borderColor: "#d2d2d2" }} className="btn ml-3 border-2 rounded-full">
                    <FaGithub />
                </button>
            </div>
        </div>
    );
};

export default SocialLink;