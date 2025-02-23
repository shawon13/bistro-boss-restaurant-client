import React from 'react';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <footer className="footer gap-0">
                <aside style={{ backgroundColor: '#1F2937' }} className="w-full  h-full text-white py-10 px-28 justify-end">
                    <div className='text-center'>
                        <h4 className='text-xl font-medium'>CONTACT US</h4>
                        <p>
                            123 ABS Street, Uni 21, Bangladesh
                        </p>
                        <p>
                            +88 123456789
                        </p>
                        <p>
                            Mon - Fri: 08:00 - 22:00
                        </p>
                        <p>
                            Sat - Sun: 10:00 - 23:00
                        </p>
                    </div>
                </aside>
                <nav style={{ backgroundColor: '#111827' }} className="w-full h-full text-white py-10 px-28 justify-start">
                    <div className='text-center'>
                        <h6 className="text-xl font-medium">Follow US</h6>
                        <p>Join us on social media</p>
                        <div className="mt-2.5 flex justify-evenly">
                            <Link><FaFacebookF /></Link>
                            <Link><FaLinkedinIn /></Link>
                            <Link><FaXTwitter />
                            </Link>
                        </div>
                    </div>
                </nav>
            </footer>
            <div className="footer justify-center bg-black text-white p-4">
                <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
            </div>
        </div>
    );
};

export default Footer;