import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItems from "../../Shared/MenuItems/MenuItems";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
    // const [menu, setMenu] = useState([]);

    // useEffect(() => {
    //     fetch('menu.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             const pizzaItems = data.filter(items => items.category === 'pizza')
    //             setMenu(pizzaItems)
    //         })
    // }, [])
    const [menu] = useMenu([]);
    const popular = menu.filter(p => p.category === 'popular')
    return (
        <section>
            <div className='max-w-screen-lg mx-auto py-20'>
                <SectionTitle
                    subHeading={'check it out'}
                    heading={'from our menu'}
                ></SectionTitle>
                <div className="grid grid-cols-2 gap-8">
                    {
                        popular.map(item => <MenuItems key={item._id} item={item}></MenuItems>)
                    }
                </div>
                <div className="text-center mt-8">
                    <button className='btn btn-outline mt-5 text-black border-b-2 border-t-0 border-x-0 border-black bg-transparent text-base uppercase'>read more</button>
                </div>
            </div>
        </section>
    );
};

export default PopularMenu;