import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaClock } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import Cover from '../Shared/Cover/Cover';
import coverImg from '../../assets/contact/banner.jpg'
import SectionTitle from '../../components/SectionTitle/SectionTitle';
const Contact = () => {
    return (
        <section>
            <div className='main-cover'>
                <Cover img={coverImg} coverTitle={'contact us'} coverDescription={'would you like to try a dish?'}></Cover>
            </div>
            <div className='max-w-screen-lg mx-auto'>
                <div className='py-20'>
                    <SectionTitle heading={'our loaction'} subHeading={'visit us'}></SectionTitle>
                    <div className='flex justify-between gap-5'>
                        <div className="border w-[414px] h-auto">
                            <h3 className="text-white py-2.5 text-center" style={{ backgroundColor: '#D1A054' }}><FaPhoneAlt className="w-full text-3xl" /></h3>
                            <div className="bg-gray-100 text-center p-3 m-4 mt-0 h-[150px]">
                                <h4 className='text-2xl font-inter'>Phone</h4>
                                <p className='text-base font-inter font-normal'>+8801625200000</p>
                            </div>
                        </div>
                        <div className="border w-[414px] h-auto">
                            <h3 className="text-white py-2.5 text-center" style={{ backgroundColor: '#D1A054' }}><FaLocationDot className="w-full text-3xl" /></h3>
                            <div className="bg-gray-100 text-center p-3 m-4 mt-0 h-[150px]">
                                <h4 className='text-2xl font-inter'>Address</h4>
                                <p className='text-base font-inter font-normal'>+38 (012) 34 56 789</p>
                            </div>
                        </div>
                        <div className="border w-[414px] h-auto">
                            <h3 className="text-white py-2.5 text-center" style={{ backgroundColor: '#D1A054' }}><FaClock className="w-full text-3xl" /></h3>
                            <div className="bg-gray-100 text-center p-3 m-4 mt-0 h-[150px]">
                                <h4 className='text-2xl font-inter'>WORKING HOURS</h4>
                                <p className='text-base font-inter font-normal'>Mon - Fri: 08:00 - 22:00</p>
                                <p className='text-base font-inter font-normal'>Sat - Sun: 10:00 - 23:00</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pb-20">
                    <SectionTitle heading={'CONTACT FORM'} subHeading={'Send Us a Message'}></SectionTitle>
                    <div className="hero bg-base-200">
                        <form className="card-body w-4/5">
                            <div className="flex justify-between gap-5">
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Name*</span>
                                    </label>
                                    <input type="text" placeholder="Enter your Name" className="input input-bordered" required />
                                </div>
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Email*</span>
                                    </label>
                                    <input type="email" placeholder="Enter your Email" className="input input-bordered" required />
                                </div>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Phone*</span>
                                </label>
                                <input type="tel" placeholder="Enter your Phone Number" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Message*</span>
                                </label>
                                <textarea name="" id="" cols="30" rows="10"></textarea>
                            </div>
                            <div className="form-control mt-6">
                                <button style={{ background: 'linear-gradient(90deg, rgba(131,93,35,1) 0%, rgba(181,129,48,1) 100%)' }} className="btn text-white w-1/4 mx-auto flex items-center">
                                    <input type="submit" value="Send Message" className="cursor-pointer" /><FaTelegramPlane />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;