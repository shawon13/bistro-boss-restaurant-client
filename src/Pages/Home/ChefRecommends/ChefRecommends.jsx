import './chefRecommends.css'
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const ChefRecommends = () => {
    const chefRecommends = [
        {
            "_id": "642c155b2c4774f05c36eea2",
            "name": "Caeser Salad",
            "recipe": "Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.",
            "image": "https://i.ibb.co.com/DtzfBHJ/slide1.jpg",
            "category": "salad",
            "price": 13.5
        },
        {
            "_id": "642c155b2c4774f05c36eea3",
            "name": "egg drop soup",
            "recipe": "Sauces and oils,Water and cornstarch, Eggs, Seasonings, Chives.",
            "image": "https://i.ibb.co.com/MCVJ1VW/slide3.jpg",
            "category": "soup",
            "price": 10.5
        },
        {
            "_id": "642c155b2c4774f05c36eea4",
            "name": "veggie pizza",
            "recipe": "Spinach, omatoes, Button Mushrooms, Olives,Onions,Mozzarella Cheese.",
            "image": "https://i.ibb.co.com/BqWTNrS/slide2.jpg",
            "category": "pizza",
            "price": 15.5
        },
    ]
    return (
        <section className='py-20'>
            <div className='max-w-screen-lg mx-auto'>
                <SectionTitle
                    subHeading={'should try'}
                    heading={'chef Recommends'}
                ></SectionTitle>
                <div className='flex gap-5'>
                    {
                        chefRecommends.map(chef => <div key={chef._id} className="card bg-base-100 w-[424px] h-[541] shadow-xl rounded-none">
                            <figure className='rounded-none'>
                                <img
                                    src={chef.image}
                                    className='w-full h-72 rounded-none'
                                    alt="chef recommends" />
                            </figure>
                            <div className="card-body text-center p-5">
                                <h2 className="card-title justify-center font-inter text-2xl">{chef.name}</h2>
                                <p className='font-inter text-sm'>{chef.recipe}</p>
                                <div className="card-actions justify-center">
                                    <button className="btn uppercase border-b border-t-0 border-l-0 border-r-0 add-btn" style={{ backgroundColor: '#e8e8e8', color: '#BB8506', borderColor: '#BB8506' }}>add to cart</button>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </section>
    );
};

export default ChefRecommends;