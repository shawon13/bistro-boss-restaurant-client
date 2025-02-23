import './Featured.css'
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import featured from '../../../assets/home/featured.jpg'
const Featured = () => {
    return (
        <section className="feature-bg bg-fixed">
            <div className='bg-black bg-opacity-70  py-20'>
                <div className='max-w-screen-lg mx-auto text-white z-20'>
                    <SectionTitle
                        subHeading={'Check it out'}
                        heading={'from our menu'}
                    ></SectionTitle>
                    <div className='flex items-center'>
                        <div className='md:w-1/2'>
                            <img src={featured} className='w-[648px]' alt="" />
                        </div>
                        <div className='md:ml-8 md:w-1/2 text-white'>
                            <h4 className='text-2xl font-normal capitalize'>March 20, 2023</h4>
                            <h4 className='text-2xl font-normal uppercase'>WHERE CAN I GET SOME?</h4>
                            <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                            <button className='btn btn-outline feature-btn mt-5 text-white border-b-2 border-t-0 border-x-0 border-white bg-transparent text-base uppercase'>read more</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Featured;