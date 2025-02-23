import { Helmet } from 'react-helmet-async';
import Cover from '../Shared/Cover/Cover';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import useMenu from '../../hooks/useMenu';
import MenuCategory from './MenuCategory';
import banner from '../../assets/menu/banner3.jpg'
import dessertImg from '../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../assets/menu/pizza-bg.jpg'
import saladImg from '../../assets/menu/salad-bg.jpg'
import soupImg from '../../assets/menu/soup-bg.jpg'

const Menu = () => {
    const [menu] = useMenu([])
    const offer = menu.filter(item => item.category === 'offered');
    const dessert = menu.filter(item => item.category === 'dessert');
    const pizza = menu.filter(item => item.category === 'pizza');
    const salad = menu.filter(item => item.category === 'salad');
    const soup = menu.filter(item => item.category === 'soup');
    return (
        <div>
            <Helmet>
                <title>bistro boss-menu</title>
            </Helmet>
            {/* our menu cover section */}
            <section className='main-cover'>
                <Cover
                    img={banner}
                    coverTitle={'OUR MENU'}
                    coverDescription={'would you like to try a dish?'}
                ></Cover>
            </section>
            {/* offered section */}
            <section className='py-20'>
                <div className='max-w-screen-lg mx-auto'>
                    <SectionTitle
                        subHeading={"don't miss"}
                        heading={"today's offer"}
                    ></SectionTitle>
                    <MenuCategory items={offer}></MenuCategory>
                </div>
            </section>
            {/* desserts section */}
            <section className='pb-20'>
                <MenuCategory items={dessert} img={dessertImg} title={'desserts'} description={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}></MenuCategory>

            </section>
            {/* pizza section */}
            <section className='pb-20'>
                <MenuCategory items={pizza} img={pizzaImg} title={'pizza'} description={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}></MenuCategory>

            </section>
            {/* salad section */}
            <section className='pb-20'>
                <MenuCategory items={salad} img={saladImg} title={'salads'} description={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}></MenuCategory>

            </section>
            {/* soup section */}
            <section className='pb-20'>
                <MenuCategory items={soup} img={soupImg} title={'soups'} description={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}></MenuCategory>

            </section>
        </div>
    );
};

export default Menu;